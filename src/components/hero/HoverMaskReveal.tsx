"use client";

import { useEffect, useRef } from "react";

const VERT = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;

uniform sampler2D u_front;
uniform sampler2D u_back;
uniform vec2 u_res;
uniform vec2 u_frontSize;
uniform vec2 u_backSize;
uniform vec2 u_mouse;
uniform vec2 u_vel;
uniform float u_progress;
uniform float u_size;
uniform float u_strength;
uniform float u_edgeGrain;
uniform float u_swirl;
uniform float u_time;

vec2 coverUv(vec2 uv, vec2 res, vec2 img) {
  float ca = res.x / res.y;
  float ia = img.x / img.y;
  vec2 scale = vec2(1.0);
  if (ca > ia) {
    scale.y = ia / ca;
  } else {
    scale.x = ca / ia;
  }
  return (uv - 0.5) / scale + 0.5;
}

float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 6; i++) {
    v += a * noise(p);
    p = m * p + 0.13;
    a *= 0.5;
  }
  return v;
}

float ridge(vec2 p) {
  return 1.0 - abs(fbm(p) * 2.0 - 1.0);
}

vec3 paperFront(vec3 base, vec2 uv, vec2 frag, vec2 res) {
  float aspect = res.x / max(res.y, 1.0);
  vec2 st = vec2(uv.x * aspect, uv.y);
  float fine = hash(frag) - 0.5;
  float fiber = noise(st * 64.0) - 0.5;
  float pits = step(0.993, hash(frag * 0.73 + 8.4));
  vec3 grain = vec3(fine * 0.012);
  grain += vec3(0.01, 0.008, 0.006) * fiber;
  grain -= vec3(0.018, 0.015, 0.012) * pits;
  return clamp(base + grain, 0.0, 1.0);
}

void main() {
  vec2 uv = vec2(gl_FragCoord.x / u_res.x, 1.0 - gl_FragCoord.y / u_res.y);
  vec2 frontUv = coverUv(uv, u_res, u_frontSize);
  vec2 backUv = coverUv(uv, u_res, u_backSize);
  vec4 front = texture2D(u_front, frontUv);
  vec4 back = texture2D(u_back, backUv);
  front.rgb = paperFront(front.rgb, uv, gl_FragCoord.xy, u_res);

  if (u_progress < 0.001) {
    gl_FragColor = front;
    return;
  }

  float aspect = u_res.x / max(u_res.y, 1.0);
  vec2 st = vec2(uv.x * aspect, uv.y);
  vec2 ms = vec2(u_mouse.x * aspect, u_mouse.y);
  vec2 p = st - ms;
  p -= u_vel * vec2(aspect, 1.0) * 1.15;

  vec2 warpUV = st * 1.85 + vec2(u_time * 0.03, -u_time * 0.022);
  vec2 warp = vec2(
    fbm(warpUV),
    fbm(warpUV + vec2(17.2, 9.4))
  );
  vec2 liquid = st + (warp - 0.5) * (0.92 + u_swirl * 0.09);

  float n = fbm(liquid * 2.35);
  float n2 = fbm(liquid * 8.2 + 13.0);
  float n3 = ridge(liquid * 3.6 + 4.7);

  float r = length(p);
  float ang = atan(p.y, p.x);
  ang += (n - 0.5) * u_swirl * 1.15 * u_progress;
  vec2 lp = vec2(cos(ang), sin(ang)) * r;

  float radius = u_size * 2.85 * u_progress;
  float disp = (n - 0.5) * 2.0 * u_edgeGrain * 1.45;
  disp += (n2 - 0.5) * u_edgeGrain * 0.62;
  disp += (n3 - 0.5) * u_edgeGrain * 0.52;

  float field = length(lp) / max(radius, 1.0e-4) + disp;

  float aa = 0.008;
  float mask = 1.0 - smoothstep(1.0 - aa, 1.0 + aa * 0.2, field);

  float rim = smoothstep(0.52, 1.18, field);
  float specks = smoothstep(0.42, 0.68, n2);
  mask *= 1.0 - rim * specks * (0.82 + u_edgeGrain * 0.22);

  mask = clamp(mask, 0.0, 1.0);
  mask *= mix(0.82, 1.0, clamp(u_strength * 1.4, 0.0, 1.0));

  gl_FragColor = mix(front, back, mask);
}
`;

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function loadTexture(
  gl: WebGLRenderingContext,
  src: string,
  onLoad: (width: number, height: number) => void,
) {
  const texture = gl.createTexture();
  if (!texture) return { texture: null as WebGLTexture | null };
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA,
    1,
    1,
    0,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    new Uint8Array([232, 224, 214, 255]),
  );

  const image = new Image();
  image.decoding = "async";
  image.onload = () => {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    onLoad(image.naturalWidth, image.naturalHeight);
  };
  image.src = src;
  return { texture };
}

export function HoverMaskReveal({
  front,
  back,
  size = 0.12,
  strength = 0.5,
  returnTime = 2.8,
  edgeGrain = 0.7,
  swirl = 3,
  followTime = 0.45,
}: {
  front: string;
  back: string;
  size?: number;
  strength?: number;
  returnTime?: number;
  edgeGrain?: number;
  swirl?: number;
  followTime?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: true,
    });
    if (!gl) return;


    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const loc = gl.getAttribLocation(program, "a_pos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const u = {
      front: gl.getUniformLocation(program, "u_front"),
      back: gl.getUniformLocation(program, "u_back"),
      res: gl.getUniformLocation(program, "u_res"),
      frontSize: gl.getUniformLocation(program, "u_frontSize"),
      backSize: gl.getUniformLocation(program, "u_backSize"),
      mouse: gl.getUniformLocation(program, "u_mouse"),
      vel: gl.getUniformLocation(program, "u_vel"),
      progress: gl.getUniformLocation(program, "u_progress"),
      size: gl.getUniformLocation(program, "u_size"),
      strength: gl.getUniformLocation(program, "u_strength"),
      edgeGrain: gl.getUniformLocation(program, "u_edgeGrain"),
      swirl: gl.getUniformLocation(program, "u_swirl"),
      time: gl.getUniformLocation(program, "u_time"),
    };

    const frontSize = { x: 1, y: 1 };
    const backSize = { x: 1, y: 1 };
    const frontTex = loadTexture(gl, front, (w, h) => {
      frontSize.x = w;
      frontSize.y = h;
    });
    const backTex = loadTexture(gl, back, (w, h) => {
      backSize.x = w;
      backSize.y = h;
    });

    const target = { x: 0.5, y: 0.5 };
    const mouse = { x: 0.5, y: 0.5 };
    const vel = { x: 0, y: 0 };
    let progress = 0;
    let hovering = false;
    let leaveAt = 0;
    let leaveFrom = 1;
    let raf = 0;
    let lastNow = performance.now();
    const start = lastNow;

    const parent =
      canvas.closest("section") ?? canvas.parentElement ?? document.body;

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.floor(rect.width * dpr));
      const h = Math.max(1, Math.floor(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    const setTarget = (clientX: number, clientY: number) => {
      const rect = parent.getBoundingClientRect();
      target.x = (clientX - rect.left) / Math.max(rect.width, 1);
      target.y = (clientY - rect.top) / Math.max(rect.height, 1);
    };

    const onLeave = () => {
      if (!hovering) return;
      hovering = false;
      target.x = mouse.x;
      target.y = mouse.y;
      leaveFrom = progress;
      leaveAt = performance.now();
    };

    const onWindowMove = (event: PointerEvent) => {
      if (!finePointer || reduce) return;
      const rect = parent.getBoundingClientRect();
      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
      if (inside) {
        setTarget(event.clientX, event.clientY);
        if (!hovering) {
          if (progress < 0.02) {
            mouse.x = target.x;
            mouse.y = target.y;
            vel.x = 0;
            vel.y = 0;
          }
          hovering = true;
        }
      } else {
        onLeave();
      }
    };

    window.addEventListener("pointermove", onWindowMove, true);
    window.addEventListener("pointerdown", onWindowMove, true);

    const observer = new ResizeObserver(resize);
    observer.observe(parent);
    resize();

    const tick = (now: number) => {
      resize();
      const dt = Math.min(0.05, Math.max(0.001, (now - lastNow) / 1000));
      lastNow = now;
      const t = (now - start) / 1000;

      const follow = 1 - Math.exp(-dt / Math.max(followTime, 0.05));
      const prevX = mouse.x;
      const prevY = mouse.y;
      mouse.x += (target.x - mouse.x) * follow;
      mouse.y += (target.y - mouse.y) * follow;

      vel.x += (mouse.x - prevX) * 2.4;
      vel.y += (mouse.y - prevY) * 2.4;
      const velDecay = Math.exp(-dt / 0.22);
      vel.x *= velDecay;
      vel.y *= velDecay;

      if (hovering) {
        const appear = 1 - Math.exp(-dt / 0.22);
        progress += (1 - progress) * appear;
      } else if (progress > 0.001) {
        const elapsed = (now - leaveAt) / 1000;
        const k = Math.min(1, elapsed / Math.max(returnTime, 0.05));
        progress = leaveFrom * (1 - k * k * k);
        if (k >= 1) progress = 0;
      } else {
        progress = 0;
      }

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, frontTex.texture);
      gl.uniform1i(u.front, 0);
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, backTex.texture);
      gl.uniform1i(u.back, 1);

      gl.uniform2f(u.res, canvas.width, canvas.height);
      gl.uniform2f(u.frontSize, frontSize.x, frontSize.y);
      gl.uniform2f(u.backSize, backSize.x, backSize.y);
      gl.uniform2f(u.mouse, mouse.x, mouse.y);
      gl.uniform2f(u.vel, vel.x, vel.y);
      gl.uniform1f(u.progress, progress);
      gl.uniform1f(u.size, size);
      gl.uniform1f(u.strength, strength);
      gl.uniform1f(u.edgeGrain, edgeGrain);
      gl.uniform1f(u.swirl, swirl);
      gl.uniform1f(u.time, t);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("pointermove", onWindowMove, true);
      window.removeEventListener("pointerdown", onWindowMove, true);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buffer);
      if (frontTex.texture) gl.deleteTexture(frontTex.texture);
      if (backTex.texture) gl.deleteTexture(backTex.texture);
    };
  }, [back, edgeGrain, followTime, front, returnTime, size, strength, swirl, FRAG]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    />
  );
}
