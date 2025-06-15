---
layout:  /src/layouts/ProjectLayout.astro
title: 'Elastic-solids for Unity'
pubDate: 2022-07-20
description: "Elastic-solid object for Unity using TetGen."
languages: [csharp, unity]
image:
  url: "/images/projects/ElasticSolid/icon.png"
  alt: "Elastic Solid"
github: "https://github.com/gaeqs/ElasticSolid"
---

## Introduction

This set of scripts can be used to generate elastic solids in Unity.

The script requires a .node, .ele and .face files that can be generated using TetGen and a mesh wrapping the mesh you want to use. The script is prepared to do this job automatically using a modified version of TetGen.
Unfortunately, I cannot share the modified TetGen due to licensing issues.

<video muted loop controls preload="metadata">
  <source src="/images/projects/ElasticSolid/video_1.mp4" type="video/mp4">
</video>


## Features

- Basic forces (Gravity, Spring).
- Volume-based force that prevents the mesh from being deformed.
- Custom TetGen parser.
- Automatic spring generator.
- Substeps.
- Damping force.
- Wing force.
- Penalty collisions (normal and implicit modes).
- Fixers with mobility options.
- Optimized code.