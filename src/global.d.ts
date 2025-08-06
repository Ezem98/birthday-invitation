export {};

declare module "*.glb";
declare module "*.png";

declare module "meshline" {
  export class MeshLineGeometry extends THREE.BufferGeometry {
    setPoints(points: THREE.Vector3[]): void;
  }
  export class MeshLineMaterial extends THREE.Material {
    color?: THREE.ColorRepresentation;
    lineWidth?: number;
    resolution?: [number, number];
    useMap?: boolean;
    map?: THREE.Texture;
    repeat?: [number, number];
    depthTest?: boolean;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: unknown;
      meshLineMaterial: {
        color?: string;
        lineWidth?: number;
        resolution?: [number, number];
        useMap?: boolean;
        map?: unknown;
        repeat?: [number, number];
        depthTest?: boolean;
      };
    }
  }
}
