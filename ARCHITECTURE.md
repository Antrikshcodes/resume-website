# Technical Architecture & Engineering Decisions

## Core System Overview
This project is engineered as an ultra-high performance, single-page digital resume website adhering to editorial typography standards and award-winning creative development patterns.

### Architectural Pillars:
1. **Zero Layout Shifts (CLS = 0):** Strict aspect ratio containers and SSR-safe DOM dimensions.
2. **GPU-Accelerated Animations:** Exclusively animating `transform` and `opacity` properties via GSAP and Framer Motion.
3. **Graceful Degradation:** Automatic hardware capability detection (`useWebGLSupport`) switches to an animated SVG fallback on mobile or low-power devices.
4. **Separation of Concerns:** Resume data (`src/data/`) is decoupled from presentation components.

## 3D Gyroscopic Orbital Mechanism
The 3D element in the hero section is inspired by celestial armillary spheres and high-precision mechanical watches:
- **Core:** Metallic icosahedron with high metalness (`0.92`) and low roughness (`0.15`).
- **Inner Wireframe:** Glowing accent sphere providing depth.
- **Gimbals / Rings:** 3 concentric torus geometries rotated across oblique axes, each with distinct rotational velocities.
- **Mouse Dampening:** Spring-interpolated pointer coordinates drive gentle rotation angles without jarring camera movements.
