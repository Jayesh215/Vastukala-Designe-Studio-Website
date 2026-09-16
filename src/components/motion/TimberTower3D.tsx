"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group } from "three";
import { useReducedMotion } from "framer-motion";

const WOOD = "#D4B896";
const WOOD_DARK = "#C4A882";
const WOOD_EDGE = "#B8956F";

type ModuleSpec = {
  height: number;
  size: number;
  louvers: number;
  thickness: number;
  voidWindow?: boolean;
};

/** Densest louvers at the base — matches the ALTURA timber study. */
const MODULES: ModuleSpec[] = [
  { height: 0.58, size: 1.15, louvers: 22, thickness: 0.018 },
  { height: 0.48, size: 1.12, louvers: 18, thickness: 0.022 },
  { height: 0.5, size: 1.1, louvers: 15, thickness: 0.026 },
  { height: 0.52, size: 1.08, louvers: 12, thickness: 0.03 },
  { height: 0.55, size: 1.05, louvers: 9, thickness: 0.035, voidWindow: true },
];

const MODULE_GAP = 0.04;

function Louvers({
  count,
  thickness,
  size,
  height,
}: {
  count: number;
  thickness: number;
  size: number;
  height: number;
}) {
  const fins = useMemo(() => {
    const items: { key: string; position: [number, number, number]; args: [number, number, number] }[] =
      [];
    const inner = size * 0.94;
    const gap = (inner - count * thickness) / (count + 1);

    for (let i = 0; i < count; i += 1) {
      const offset = -inner / 2 + gap + thickness / 2 + i * (thickness + gap);
      // Front & back (along X)
      items.push({
        key: `f-${i}`,
        position: [offset, 0, size / 2],
        args: [thickness, height * 0.9, 0.045],
      });
      items.push({
        key: `b-${i}`,
        position: [offset, 0, -size / 2],
        args: [thickness, height * 0.9, 0.045],
      });
    }

    const sideCount = Math.max(6, Math.round(count * 0.85));
    const sideGap = (inner - sideCount * thickness) / (sideCount + 1);
    for (let i = 0; i < sideCount; i += 1) {
      const offset = -inner / 2 + sideGap + thickness / 2 + i * (thickness + sideGap);
      items.push({
        key: `r-${i}`,
        position: [size / 2, 0, offset],
        args: [0.045, height * 0.9, thickness],
      });
      items.push({
        key: `l-${i}`,
        position: [-size / 2, 0, offset],
        args: [0.045, height * 0.9, thickness],
      });
    }

    return items;
  }, [count, height, size, thickness]);

  return (
    <group>
      {fins.map((fin) => (
        <mesh key={fin.key} position={fin.position} castShadow>
          <boxGeometry args={fin.args} />
          <meshStandardMaterial
            color={WOOD}
            roughness={0.7}
            metalness={0.02}
          />
        </mesh>
      ))}
    </group>
  );
}

function TimberModule({
  spec,
  y,
}: {
  spec: ModuleSpec;
  y: number;
}) {
  return (
    <group position={[0, y, 0]}>
      <mesh position={[0, spec.height / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[spec.size, 0.04, spec.size]} />
        <meshStandardMaterial color={WOOD_EDGE} roughness={0.62} />
      </mesh>
      <mesh position={[0, -spec.height / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[spec.size, 0.04, spec.size]} />
        <meshStandardMaterial color={WOOD_EDGE} roughness={0.62} />
      </mesh>

      <mesh castShadow>
        <boxGeometry args={[spec.size * 0.7, spec.height * 0.84, spec.size * 0.7]} />
        <meshStandardMaterial color={WOOD_DARK} roughness={0.82} />
      </mesh>

      <Louvers
        count={spec.louvers}
        thickness={spec.thickness}
        size={spec.size}
        height={spec.height}
      />

      {spec.voidWindow ? (
        <mesh position={[0, 0.04, spec.size / 2 + 0.01]}>
          <boxGeometry args={[0.26, 0.2, 0.05]} />
          <meshStandardMaterial color="#1c1c1c" roughness={0.95} />
        </mesh>
      ) : null}
    </group>
  );
}

function TimberTower({ spinning }: { spinning: boolean }) {
  const group = useRef<Group>(null);

  const stacked = useMemo(() => {
    const totalHeight =
      MODULES.reduce((sum, m) => sum + m.height, 0) +
      MODULE_GAP * (MODULES.length - 1);
    let cursor = -totalHeight / 2;
    return MODULES.map((spec) => {
      const y = cursor + spec.height / 2;
      cursor += spec.height + MODULE_GAP;
      return { spec, y };
    });
  }, []);

  useFrame((_, delta) => {
    if (!spinning || !group.current) return;
    // ~18s per full turn — calm ALTURA-style pedestal spin
    group.current.rotation.y += delta * ((Math.PI * 2) / 18);
  });

  return (
    <group ref={group} position={[0, 0.15, 0]} rotation={[0.08, 0.4, 0]}>
      {stacked.map(({ spec, y }, index) => (
        <TimberModule key={index} spec={spec} y={y} />
      ))}
    </group>
  );
}

/** WebGL timber louver tower with continuous 360° rotation. */
export function TimberTowerScene() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative h-full min-h-[16rem] w-full">
      <Canvas
        className="h-full w-full touch-none"
        dpr={[1, 1.75]}
        camera={{ position: [2.7, 1.15, 3.5], fov: 30, near: 0.1, far: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
        aria-label="3D timber louver architectural model rotating continuously"
      >
        <ambientLight intensity={0.85} />
        <directionalLight position={[4.2, 6.5, 3.2]} intensity={1.55} castShadow={false} />
        <directionalLight position={[-3.2, 2.8, -2.2]} intensity={0.45} />
        <directionalLight position={[1.5, 1.2, 4]} intensity={0.35} />
        <Environment preset="apartment" environmentIntensity={0.28} />
        <TimberTower spinning={!reduceMotion} />
        <ContactShadows
          position={[0, -1.55, 0]}
          opacity={0.28}
          scale={8}
          blur={2.4}
          far={4.5}
        />
      </Canvas>
    </div>
  );
}

export default TimberTowerScene;
