---
title: Scripting with bpy (Blender Python)
date: 2023-11-03
tag: Engineering
excerpt: Automation inside Blender's Python API — where the film and code habits overlap.
image: /images/film-char.png
---

Blender's `bpy` module turns the editor into a programmable studio. For my film tooling I use it to generate shot layouts, batch-render previsualization, and prototype facial-replacement tracking.

## Why it matters

The same impulse that drives security automation drives filmmaking tooling: repetitive work should be scripted so the human time goes to the creative or analytical decision.

## Snippet

```python
import bpy

for obj in bpy.context.scene.objects:
    if obj.type == 'MESH':
        print(obj.name, len(obj.data.vertices))
```

Small scripts like this become the backbone of larger pipelines.
