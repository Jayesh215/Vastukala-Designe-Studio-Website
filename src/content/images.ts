/**
 * Image registry.
 *
 * Every photograph used on the site is referenced from here by name, so imagery
 * can be replaced in one place. To use your own photography, drop files into
 * `public/images/` and change the value to e.g. "/images/aranya-house-hero.jpg".
 *
 * Remote hosts must be allow-listed in `next.config.ts` under images.remotePatterns.
 */

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2000&q=80`;

export const images = {
  // Architecture / exteriors
  villaPool: unsplash("photo-1613490493576-7fde63acd811"),
  houseDusk: unsplash("photo-1512917774080-9991f1c4c750"),
  whiteHouse: unsplash("photo-1580587771525-78b9dba3b914"),
  houseFront: unsplash("photo-1600596542815-ffad4c1539a9"),
  courtyard: unsplash("photo-1600047509807-ba8f99d2cdde"),
  exteriorEvening: unsplash("photo-1600573472550-8090b5e0745e"),
  exteriorGarden: unsplash("photo-1600573472592-401b489a3cdc"),
  hillsideHome: unsplash("photo-1497604401993-f2e922e5cb0a"),
  facadeWhite: unsplash("photo-1487958449943-2429e8be8625"),
  facadeConcrete: unsplash("photo-1449157291145-7efd050a4d0e"),
  facadeLines: unsplash("photo-1518005020951-eccb494ad742"),
  facadeGeometry: unsplash("photo-1486406146926-c627a92ad1ab"),
  facadeStone: unsplash("photo-1524230572899-a752b3835840"),
  facadeDetail: unsplash("photo-1565182999561-18d7dc61c393"),

  // Living spaces
  livingLight: unsplash("photo-1600585154340-be6161a56a0c"),
  livingWarm: unsplash("photo-1600607687939-ce8a6c25118c"),
  livingOpen: unsplash("photo-1600607687920-4e2a09cf159d"),
  livingSofa: unsplash("photo-1600566753190-17f0baa2a6c3"),
  livingNeutral: unsplash("photo-1600566753086-00f18fb6b3ea"),
  livingTall: unsplash("photo-1600585154526-990dced4db0d"),
  livingDining: unsplash("photo-1600210492486-724fe5c67fb0"),
  livingTextures: unsplash("photo-1600121848594-d8644e57abab"),
  livingCalm: unsplash("photo-1560448204-e02f11c3d0e2"),
  livingWide: unsplash("photo-1600585153490-76fb20a32601"),
  minimalRoom: unsplash("photo-1618221195710-dd6b41faaea6"),
  minimalCorner: unsplash("photo-1618221118493-9cfa1a1c00da"),
  minimalLounge: unsplash("photo-1524758631624-e2822e304c36"),
  armchairDetail: unsplash("photo-1493809842364-78817add7ffb"),
  staircase: unsplash("photo-1616486338812-3dadae4b4ace"),

  // Kitchens & bathrooms
  kitchenIsland: unsplash("photo-1545324418-cc1a3fa10c00"),
  kitchenWood: unsplash("photo-1556909212-d5b604d0c90d"),
  kitchenWhite: unsplash("photo-1556911220-bff31c812dba"),
  kitchenModern: unsplash("photo-1631679706909-1844bbd07221"),
  kitchenCompact: unsplash("photo-1628744876497-eb30460be9f6"),
  bathroomStone: unsplash("photo-1584622650111-993a426fbf0a"),

  // Bedrooms
  bedroomLinen: unsplash("photo-1522771739844-6a9f6d5f14af"),
  bedroomSoft: unsplash("photo-1505693416388-ac5ce068fe85"),
  bedroomWarm: unsplash("photo-1586023492125-27b2c045efd7"),
  bedroomWindow: unsplash("photo-1615529182904-14819c35db37"),

  // Workplace & commercial
  officeMeeting: unsplash("photo-1567538096630-e0c55bd6374c"),
  officeOpen: unsplash("photo-1497366754035-f200968a6e72"),
  officeDesks: unsplash("photo-1497366811353-6870744d04b2"),
  officeLounge: unsplash("photo-1554995207-c18c203602cb"),
  retailStore: unsplash("photo-1567767292278-a4f21aa2d36e"),
  cafeInterior: unsplash("photo-1594026112284-02bb6f3352fe"),
  hospitalityLobby: unsplash("photo-1583847268964-b28dc8f51f92"),

  // Drawings & technical
  drawings: unsplash("photo-1503387762-592deb58ef4e"),
} as const;

export type ImageKey = keyof typeof images;
