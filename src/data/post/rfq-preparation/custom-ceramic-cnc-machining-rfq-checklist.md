---
title: 'Custom Ceramic CNC Machining RFQ Checklist: Drawings, Materials, Tolerances, Inspection'
publishDate: 2026-05-03
excerpt: 'How to prepare a custom ceramic CNC machining RFQ with drawings, material grade, quantity, tolerance priorities, surface finish, micro-features, and inspection evidence.'
category: Engineering Guide
tags: ['custom-ceramic-machining', 'rfq-checklist', 'drawing-review', 'inspection', 'tight-tolerances']
author: 'CERAMIC CNC Engineering'
image: ~/assets/images/ceramic/posts/custom-ceramic-cnc-rfq-checklist.webp
metadata:
  title: 'Custom Ceramic CNC Machining RFQ Checklist'
  description: 'RFQ checklist for custom ceramic CNC machining: drawings, CAD, material grade, quantity, tolerances, surface finish, micro-features, and inspection evidence.'
---

> A useful ceramic machining RFQ is not a request for an instant promise. It is a package of geometry, material, quantity, timing, and acceptance requirements that lets the supplier review feasibility before confirming price or schedule.

Custom ceramic CNC machining is different from quoting metal parts. Alumina, zirconia, silicon nitride, silicon carbide, MACOR, and other technical ceramics do not absorb machining stress the way ductile metals do. Edge chips, subsurface damage, grinding allowance, blank quality, and inspection method can decide whether a drawing is practical.

This checklist is written for engineering and procurement teams preparing RFQs for precision ceramic components.

### Start With the Job the Part Must Do

Before tolerance review, clarify why the part uses ceramic instead of metal or plastic. The reason usually controls the machining route.

| Requirement driver      | What it changes in the RFQ                                                         |
| ----------------------- | ---------------------------------------------------------------------------------- |
| Electrical insulation   | Edge radii, creepage geometry, surface cleanliness, and assembly stress            |
| Wear or sealing         | Flatness, Ra, roundness, lapping, and edge chip limits                             |
| Vacuum service          | Surface condition, porosity concerns, cleaning, and leak-critical interfaces       |
| Semiconductor equipment | Particle-sensitive edges, flatness, material traceability, and inspection evidence |
| High temperature        | Material grade, thermal shock risk, wall transitions, and fixture stress           |
| Micro-flow control      | Hole diameter, taper, breakout, depth, and optical or flow inspection              |

If the application driver is missing, the supplier has to guess which dimensions are critical. That creates quote variance and late clarification.

### Minimum RFQ Package

A practical ceramic CNC RFQ should include:

- 2D drawing with revision, units, material note, and critical dimensions.
- STEP, IGES, or native CAD file for geometry review.
- Material family and grade, such as Al2O3 96%, Al2O3 99.5%, Y-TZP zirconia, Si3N4, SiC, MACOR, AlN, BN, or fused silica.
- Blank assumption: customer-supplied blank, supplier-sourced blank, fired blank, green preform, tube, rod, plate, or near-net shape.
- Quantity for prototype and expected repeat demand.
- Target lead time or project timing.
- Functional surfaces, datums, seal faces, bores, micro-holes, slots, and edge zones.
- Surface finish, flatness, parallelism, or roundness only where they are function-critical.
- Inspection evidence required for acceptance.
- Packaging or handling requirements for fragile edges and precision faces.

For a simple spacer, this may be short. For a semiconductor, vacuum, wear, or micro-hole part, this information can be the difference between a useful quote and a chain of follow-up questions.

### Mark Functional Precision, Not Global Precision

One common RFQ problem is applying tight tolerances to every face because the part is important. That usually makes the ceramic route more expensive without improving function.

Better RFQ language:

| Feature type         | What to mark                                                                 |
| -------------------- | ---------------------------------------------------------------------------- |
| Seal face            | Flatness, Ra, datum relationship, edge condition, and inspection method      |
| Precision bore       | Diameter, roundness, cylindricity, datum, and measurement access             |
| Micro-hole           | Diameter, depth, taper, position, entry chip, exit breakout, and inspection  |
| Slot or pocket       | Minimum width, internal radius, wall thickness, allowable edge break         |
| Datum face           | Which face is ground or lapped first and how dependent features reference it |
| Non-critical surface | As-sintered or standard-ground acceptance where function allows              |

Use the [ceramic tolerance capability map](/posts/tolerances-gdt/ceramic-tolerance-capability-map-by-feature-process/) to separate functional precision from general geometry.

### Define Material and Blank State

Ceramic material names are not enough. "Alumina" can mean different purity, density, blank quality, and finishability. "Zirconia" can mean different stabilization systems and toughness behavior. "SiC" can vary widely by route and supplier.

For RFQ review, send what you know:

- Exact grade or existing material specification.
- Whether equivalent grade review is allowed.
- Density, purity, color, or certificate expectations.
- Customer-supplied stock size, if applicable.
- Whether machining starts from fired ceramic, green ceramic, tube, rod, plate, or molded blank.
- Whether the finished part must match previous samples or an existing supplier route.

If the exact ceramic grade is unknown, send the operating environment instead: temperature, media, wear mode, insulation need, load direction, assembly method, and failure consequence. Material choice can then be reviewed against function rather than name alone.

### Specify Surface Finish by Face

Surface finish in ceramics should be tied to function. A single Ra value across the full part can force unnecessary lapping, polishing, inspection, and handling risk.

Helpful RFQ examples:

- Seal face A: Ra 0.2 um or better, flatness 0.01 mm, lapped, inspect and report.
- Datum face B: ground finish acceptable, report flatness and parallelism to face A.
- Outside non-contact faces: standard machined or as-sintered acceptable.
- Hole exits: edge chip not to exceed agreed visual criterion in functional zone.

For more detail, use the [ceramic surface finish and subsurface damage guide](/posts/surface-finish-functional/ceramic-ssd-surface-finish-specify-control-price/).

### Micro-Holes Need Extra Detail

Micro-holes and small orifices are high-risk features in brittle materials. A diameter callout alone is not enough.

Include:

- Hole diameter and tolerance.
- Hole depth and aspect ratio.
- Through-hole or blind-hole requirement.
- Position tolerance and datum.
- Minimum distance to edge or adjacent holes.
- Allowable taper.
- Entry and exit edge condition.
- Whether flow, optical, pin gauge, CT, or other inspection is required.

If micro-hole performance controls flow, dosing, vacuum, or spray behavior, state whether dimensional inspection alone is sufficient or whether functional testing is part of customer acceptance.

### Inspection Evidence Should Match Risk

Do not request a full report package by default. Request evidence that proves the features that matter.

| Requirement         | Typical evidence to discuss                                                          |
| ------------------- | ------------------------------------------------------------------------------------ |
| Critical dimensions | CMM or key-dimension report                                                          |
| Micro-holes         | Optical measurement, pin gauge, microscope image, CT when appropriate                |
| Flatness            | Flatness map, optical flat, CMM, or agreed method                                    |
| Surface finish      | Ra measurement with stated location and method                                       |
| Edge quality        | Visual criterion, microscopy, or agreed chip limit                                   |
| Material confidence | CoC, material certificate, density information, or customer-supplied material record |

The inspection method must be physically possible for the feature. If the feature cannot be measured repeatably, it should not become the only acceptance basis.

### Red Flags That Slow a Ceramic Quote

The RFQ usually needs clarification when:

- The drawing says "no chips" without measurable zones or limits.
- Every dimension is tight but functional surfaces are not identified.
- The material is listed only as "ceramic" or "alumina" without grade or use condition.
- Sharp internal corners are modeled as if the part were metal.
- Micro-holes have no entry, exit, depth, taper, or inspection requirement.
- Threads are load-bearing but wall thickness and load direction are unclear.
- Surface finish is applied globally instead of by face.
- Inspection reports are requested without stating which features must be reported.

These are not reasons to reject a project automatically. They are reasons to review the drawing before quoting.

### Practical RFQ Email Template

Use this structure when sending a custom ceramic CNC machining RFQ:

```text
Project:
Material / grade:
Blank source: customer-supplied / supplier-sourced / unknown
Quantity: prototype / batch / annual estimate
Target timing:
Files attached: 2D drawing, STEP/IGES/native CAD
Functional surfaces:
Critical tolerances / GD&T:
Surface finish or flatness requirements:
Micro-holes / slots / thin walls:
Edge or chip criteria:
Inspection evidence required:
Application environment:
Notes or previous supplier route:
```

You can also use the [RFQ checklist page](/rfq/) when preparing files for review.

### FAQ

**Can I send only a STEP file first?**  
Yes, for an initial geometry discussion. A formal quote usually needs a drawing, material requirement, quantity, and acceptance criteria.

**Should I ask for the tightest tolerance possible?**  
No. Ask for the tolerance required by the function. Ceramic cost and risk increase when tight tolerances are applied to non-critical faces.

**Can the supplier choose the ceramic grade?**  
Sometimes, but only after reviewing the application environment and acceptance needs. If the part replaces an existing grade, say whether alternatives are allowed.

**What if I do not know the inspection method?**  
List the feature that must be proven and the failure consequence. The inspection route can then be reviewed with the quote assumptions.
