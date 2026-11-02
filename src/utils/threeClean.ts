import * as THREE from 'three';
export const disposeObject = (obj: THREE.Object3D) => { obj.traverse((child) => { if ((child as any).geometry) (child as any).geometry.dispose(); }); };
