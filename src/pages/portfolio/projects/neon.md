---
layout:  /src/layouts/ProjectLayout.astro
title: 'Neon'
pubDate: 2024-07-20
description: 'Neon is a C++20 multiplatform graphics engine easy to integrate in graphic applications.'
languages: [cpp, vulkan]
image:
  url: "/images/projects/Neon/image_1.png"
  alt: "Neon"
github: "https://github.com/gaeqs/Neon"
---

_Neon_ is a _C++20_ multiplatform graphics engine
easy to integrate in graphic applications.

_Neon_ takes advantage of several C++20 features, such as concepts,
advanced template specifications or new std features.
_Neon_ also uses its own mathematics library:
[Rush](/portfolio/projects/rush).

To manage complex scenes, _Neon_ implements an advanced scene hierarchy
with a fast component system that encourages spatial locality and
instancing rendering. _Neon_ also supports advance rendering techniques,
such as mesh shaders.

## How to start

To start using Neon, you can explore the
[examples](https://github.com/gaeqs/Neon?tab=readme-ov-file) provided
by the project. Currently, the project contains the following examples:

- test1: basic instancing rendering. Basic usage of models and textures.
  Deferred shading. Models are load asynchronously.
- testPBR: basic PBR rendering. Supports bloom and SSAO.
- testCloth: cloth simulation using Eigen.
- testLine: basic line rendering, using Bezier curves.
- testOctree: octree rendering and usage.
- testAsyncUpdate: test1 fork that uses the task engine to update models
  asynchronously.
- testGeometryShader: basic geometry shader that renders a lot of spheres.
- testMeshShader: basic mesh shader that implements an instancing algorithm
  for models.

To enable examples, you must set to true CMake parameter _NEON_TESTS_.