---
title: 'Ceramic Micro-Hole Machining RFQ Guide: Gas Plates, Vacuum Chucks, Nozzles'
publishDate: 2026-05-07
excerpt: 'How to prepare an RFQ for precision ceramic micro-hole machining, micro-drilling, gas distribution plates, vacuum chucks, nozzles, orifice plates, and inspection evidence.'
category: Engineering Guide
tags:
  ['ceramic-micro-holes', 'micro-drilling', 'gas-distribution-plates', 'vacuum-chucks', 'ceramic-nozzles', 'inspection']
author: 'CERAMIC CNC Engineering'
image: ~/assets/images/ceramic/posts/ceramic-micro-hole-machining-rfq.webp
metadata:
  title: 'Ceramic Micro-Hole Machining RFQ Guide'
  description: 'RFQ guide for ceramic micro-hole machining: alumina, zirconia, SiC, gas plates, vacuum chucks, nozzles, hole quality, taper, breakout, and inspection.'
---

> A ceramic micro-hole RFQ is not defined by diameter alone. It is defined by material, depth, aspect ratio, edge condition, pitch, datum strategy, cleaning needs, and how the hole will be accepted.

Micro-holes appear in precision ceramic parts when flow, vacuum, dispensing, particle control, or optical access matters. The part may look simple in CAD, but the quote can change quickly when the holes are small, dense, deep, close to an edge, or placed on a lapped surface.

This guide is written for engineers and sourcing teams preparing RFQs for alumina, zirconia, silicon carbide, silicon nitride, fused silica, MACOR, and other technical ceramic parts with micro-holes or small orifices. It is not a capability promise. It explains what to send so feasibility, price, timing, and inspection can be reviewed before confirmation.

### Why This Topic Deserves a Dedicated Article

The existing ceramic machining guides cover material selection, DFM, tolerances, surface finish, and semiconductor equipment at a broad level. Micro-holes need their own RFQ logic because the risk is concentrated in a very small feature:

- The hole may control flow or vacuum uniformity.
- The entry and exit edges can create particle, crack, or clogging risk.
- The diameter may be measurable, but taper or breakout may still fail the application.
- Dense arrays can make inspection cost as important as machining cost.
- A drawing can show hundreds of identical holes while hiding one difficult datum or cleaning requirement.

This is why a micro-hole part should not be quoted only from a note such as "0.3 mm holes, typical." The RFQ should define the function and acceptance gate.

### Where Precision Ceramic Micro-Holes Show Up

Micro-hole ceramic components usually appear in applications where ceramic properties and feature quality meet.

| Application area                                   | Ceramic part examples                                                 | RFQ risk to clarify                                                              |
| -------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Semiconductor gas and vacuum hardware              | Gas distribution plates, shower plates, vacuum chucks, suction plates | Hole diameter, pitch, flatness, particle-sensitive edge zones, cleaning          |
| Precision dispensing and microelectronics assembly | Ceramic nozzles, dispenser tips, small orifice inserts                | Bore straightness, tip edge quality, clogging risk, liquid compatibility         |
| Flow restriction and dosing                        | Orifice plates, restrictors, metering inserts, manifolds              | Flow basis, taper, repeatability, functional test versus dimensional inspection  |
| Inspection and beam control                        | Apertures, collimator plates, ceramic masks                           | Roundness, edge burr or chip condition, optical measurement, positional accuracy |
| Vacuum fixtures and porous chuck interfaces        | Vacuum suction cups, chuck segments, support pads                     | Flatness, groove pattern, hole field uniformity, pore or channel behavior        |

[Kyocera describes ceramic dispenser nozzles](https://global.kyocera.com/prdct/semicon/search_application/detail/d_nozzle.html) for controlled liquid dispensing in microelectronic assembly, where tip quality affects dispensing stability. [Ceratec describes ceramic vacuum wafer chucks](https://ceratec.nl/en/products/structural-parts/vacuum-wafer-chuck/) for semiconductor wafer positioning, with ceramic flatness as a key performance factor. These are useful signals: the search intent is often not "ceramic material" in the abstract, but a specific functional interface that must be machined, cleaned, and inspected.

### What Counts as a Micro-Hole in an RFQ

For sourcing, "micro-hole" should be treated as a review category rather than a fixed universal size. A hole becomes a micro-hole RFQ problem when the diameter, depth, edge condition, or inspection method is difficult enough to affect feasibility.

Useful RFQ boundaries:

- Diameter: state the nominal size and tolerance, for example 0.2 mm, 0.3 mm, 0.5 mm, or another target.
- Thickness or depth: state the full material thickness through the hole.
- Aspect ratio: depth divided by diameter; high aspect ratio raises taper, breakout, and cleaning risk.
- Through or blind: blind holes and intersecting holes require separate review.
- Hole count: one prototype hole is different from a 900-hole array.
- Pitch and edge distance: close spacing can cause chipping or local strength issues.
- Functional basis: flow, vacuum, optical aperture, dispensing, alignment, or only venting.

[Ladd Research defines microholes as generally 10 to 350 microns](https://www.laddresearch.com/microholes) in its aperture context and notes that aspect ratio affects how holes are produced. That definition is not a universal ceramic CNC promise, but it shows why diameter alone is not enough for an RFQ.

### The RFQ Data That Matters Most

Send these details before expecting a meaningful quote:

| RFQ input                         | Why it matters                                                                                         |
| --------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 2D drawing and STEP file          | Shows hole count, datum scheme, wall thickness, and adjacent features                                  |
| Material family and grade         | Alumina, zirconia, SiC, Si3N4, fused silica, MACOR, and AlN behave differently                         |
| Blank state                       | Fired ceramic, green preform, customer-supplied blank, plate, tube, or near-net form changes the route |
| Hole diameter and tolerance       | Sets process review and inspection method                                                              |
| Hole depth or part thickness      | Controls aspect ratio and exit risk                                                                    |
| Pitch, pattern, and edge distance | Affects strength, chipping, fixture support, and inspection time                                       |
| Entry and exit edge condition     | Defines allowable chip, radius, chamfer, or breakout                                                   |
| Taper allowance                   | Important for flow, vacuum, optical aperture, and pin fit                                              |
| Functional surface                | Clarifies whether the hole field sits on a lapped seal face, datum face, or non-critical surface       |
| Inspection evidence               | Optical measurement, microscopy, pin gauge, flow test, CT, section review, or sampling plan            |

If flow or vacuum performance is the true acceptance gate, state that clearly. Dimensional inspection and functional flow testing are different quotations.

### Hole Quality Is More Than Diameter

Many weak RFQs specify a hole diameter but do not define the defects that matter. For brittle ceramics, a useful drawing separates at least six quality questions:

1. **Diameter**: measured at entry, exit, midpoint, or by functional gauge?
2. **Taper**: is a conical hole acceptable, or must the bore be nearly straight?
3. **Breakout**: what chip size is allowed at the exit face?
4. **Position**: is true position needed to a datum, or is pattern uniformity more important?
5. **Surface condition**: is the internal wall functional, or only the opening?
6. **Cleanliness**: are loose particles, residues, or blocked holes part of acceptance?

For a ceramic gas plate, a hole field with consistent flow may matter more than reporting every individual diameter. For a ceramic aperture, diameter and edge quality may matter more than total hole count. For a vacuum chuck, flatness and suction distribution may decide whether the micro-hole pattern is useful.

### Material Review for Micro-Hole Parts

Material choice should follow the environment and hole function.

| Material direction           | Common RFQ reason                                             | Micro-hole caution                                                           |
| ---------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Alumina Al2O3                | Insulation, wear, general technical ceramic parts, gas plates | Grade and fired state affect edge quality and finishability                  |
| Zirconia ZrO2                | Tougher small nozzles, wear parts, thin precision tips        | Dimensional stability and grinding route need review                         |
| Silicon carbide SiC          | Semiconductor, wear, plasma or thermal exposure               | Hardness and finish requirements can dominate cost                           |
| Silicon nitride Si3N4        | Wear, thermal shock, structural ceramic hardware              | Feature geometry and edge risk must be reviewed early                        |
| Fused silica or quartz       | Optical, thermal, or clean process applications               | Chipping, thermal history, and surface requirements matter                   |
| MACOR or machinable ceramics | Prototype fixtures and insulating trials                      | Service limits must be checked before treating it as a production substitute |

Use the [ceramic material selection guide](/posts/materials-grade-selection/ceramic-material-selection-cnc-machining/) if the material is not fixed yet. If the material is fixed by an existing tool or drawing, state whether equivalent grade review is allowed.

### Process Route Questions Before Quoting

The final route may involve CNC machining, diamond grinding, micro-drilling, lapping, green machining before firing, laser processing, ultrasonic assistance, or a mixed process. The supplier cannot choose the route responsibly without understanding the application.

The review usually asks:

- Can the blank be supported without cracking during micro-hole processing?
- Are the holes made before or after final lapping?
- Does final lapping risk closing or rounding hole entries?
- Is the hole field close to a seal land, groove, thin wall, or outer edge?
- Does the drawing allow entry and exit edge relief?
- Can debris be removed from the hole geometry?
- Can the specified inspection method actually see the defect being controlled?

For route comparison, use the [green machining versus hard machining guide](/posts/process-routes-control/green-machining-vs-hard-machining/) when the part may be made from a pre-sintered or fired blank.

### Inspection Options for Ceramic Micro-Holes

Inspection should match the failure mode. Asking for every method on every hole is often unnecessary and expensive. Asking for the wrong method can be worse.

| Requirement             | Inspection evidence to discuss                                       | Limitation                                              |
| ----------------------- | -------------------------------------------------------------------- | ------------------------------------------------------- |
| Hole diameter           | Optical measurement, microscope image, pin gauge when appropriate    | Pin gauges may miss taper or edge chips                 |
| Hole position           | Optical coordinate measurement, CMM where access allows              | Dense arrays can make full inspection slow              |
| Entry and exit chips    | Microscopy, visual standard, agreed chip limit by zone               | "No chips" is not measurable without a criterion        |
| Taper or bore shape     | Optical section, CT, sectioned sample, special metrology             | Full CT or section review may not fit every budget      |
| Flow or vacuum behavior | Flow test, pressure drop, vacuum distribution, customer fixture test | Functional test needs fixture and acceptance definition |
| Cleanliness or blockage | Optical review, air flow check, cleaning protocol, sample inspection | Cleaning acceptance must be stated before production    |

For general inspection planning, use the [ceramic tolerance capability map](/posts/tolerances-gdt/ceramic-tolerance-capability-map-by-feature-process/) and the [ceramic surface finish and SSD guide](/posts/surface-finish-functional/ceramic-ssd-surface-finish-specify-control-price/).

### Cost Drivers Buyers Should Expect

The expensive part of a micro-hole RFQ is often not the outer profile. The real cost drivers are:

- Hole count and array density.
- Depth-to-diameter ratio.
- Exit breakout control.
- Tight position tolerance across a lapped or ground datum.
- Hole field on a large flatness-critical plate.
- Very close pitch or short distance to an edge.
- Required cleaning, packaging, and particle control.
- Full inspection versus sampling.
- Material hardness and blank quality.
- Prototype route changes before production acceptance is fixed.

This is why two drawings with the same outside size and material can price very differently. A 50-hole vent pattern and a 1,000-hole functional gas plate are not the same machining problem.

### Red Flags in Micro-Hole Drawings

Review the drawing before sending it if you see:

- Hole diameter without depth or material thickness.
- Dense hole pattern with no pitch tolerance or datum.
- "No chips" without a measurable chip zone and limit.
- Micro-holes placed too close to a sharp edge.
- Global Ra requirement applied to faces that do not affect the holes.
- Holes crossing internal channels without section detail.
- Blind holes with no bottom condition or cleaning requirement.
- Flow requirement but no pressure, medium, or test condition.
- Full inspection requested without explaining the acceptance risk.
- Ceramic grade written only as "ceramic" or "alumina" with no grade or service environment.

Use the [ceramic DFM design rules](/posts/design-rules-dfm/ceramic-dfm-design-rules/) to catch these issues before the RFQ becomes a price-only comparison.

### Practical RFQ Template for Micro-Hole Ceramic Parts

Use this structure when sending the project:

```text
Project / application:
Part type: gas plate / vacuum chuck / nozzle / orifice / manifold / other
Material and grade:
Blank source: customer-supplied / supplier-sourced / unknown
Quantity: prototype / batch / annual estimate
Target timing:
Files attached: 2D drawing, STEP/IGES/native CAD
Hole diameter and tolerance:
Hole depth or part thickness:
Hole count, pitch, and pattern:
Through hole / blind hole / intersecting channel:
Entry and exit edge requirement:
Taper or bore-shape requirement:
Functional surfaces and datums:
Surface finish, flatness, or lapping needs:
Inspection evidence: optical / pin / flow / CT / sampling / other
Cleaning, packaging, or particle requirement:
Previous supplier route or sample requirement:
```

You can also start from the [RFQ checklist page](/rfq/) and add the micro-hole details above.

### FAQ

**Can ceramic micro-holes be quoted from a STEP file only?**  
A STEP file can start geometry review, but a useful quote normally needs material, hole tolerance, depth, entry and exit edge condition, quantity, and inspection requirements.

**Is smaller always more expensive?**  
Not always. Diameter matters, but depth, aspect ratio, material, hole count, pitch, breakout limit, and inspection method often decide the quote.

**Should I specify every hole for full inspection?**  
Only if the application requires it and the method is realistic. Sampling, flow testing, or zone-based inspection may be more practical for dense arrays, depending on acceptance risk.

**Can a ceramic micro-hole be perfectly burr-free like metal machining language suggests?**  
Ceramics do not form metal burrs in the same way, but they can chip, micro-crack, or break out at entry and exit edges. Specify the edge condition and inspection method rather than using vague language.

**What should I send first if I am unsure about feasibility?**  
Send the drawing, CAD file, material or grade target, hole size, thickness, quantity, target timing, and how the holes will be judged in use. The route can then be reviewed before feasibility, price, or delivery is confirmed.

> RFQ note: This guide is for preparation and feasibility review. Send drawings, CAD, material grade, quantity, target timing, and acceptance requirements before treating tolerance, price, inspection plan, or delivery as confirmed.
