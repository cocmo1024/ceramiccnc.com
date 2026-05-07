---
title: 'Ceramic Lapped Seal Faces RFQ Guide: Flatness, Ra, Leak Risk'
publishDate: 2026-05-07
excerpt: 'RFQ guide for lapped ceramic seal faces, valve seats, vacuum interfaces, gasket lands, flatness, Ra, edge condition, subsurface damage, and leak-test expectations.'
category: Engineering Guide
tags: ['lapped-seal-faces', 'surface-finish', 'flatness', 'vacuum-ceramics', 'inspection']
author: 'CERAMIC CNC Engineering'
image: ~/assets/images/ceramic/posts/ceramic-ssd-surface-finish-specify-control-price-1.webp
metadata:
  title: 'Ceramic Lapped Seal Faces RFQ Guide'
  description: 'Prepare RFQs for lapped ceramic seal faces, vacuum interfaces, valve seats, gasket lands, flatness, Ra, edge break, subsurface damage, and inspection.'
---

> A ceramic seal face RFQ should define the sealing function, mating material, flatness, Ra, edge condition, lapping scope, and inspection method. "Polish all surfaces" usually overprices the wrong areas and still may not protect the actual leak path.

Lapped ceramic seal faces appear on vacuum interfaces, valve seats, metering parts, pump components, semiconductor process hardware, wear plates, and precision fixtures. The critical feature may be a narrow ring, a flat gasket land, a valve contact face, or a datum pad that controls assembly.

The useful first question is:

**Which face seals, and how will leakage or contact failure be judged?**

If the answer is unclear, the quote may focus on cosmetic polish instead of functional flatness, edge quality, and surface integrity.

### Seal Face RFQs Are Not Generic Surface Finish RFQs

Ceramic surface finish has already been covered at a broad level in the [surface finish and SSD guide](/posts/surface-finish-functional/ceramic-ssd-surface-finish-specify-control-price/). Seal faces need a narrower RFQ logic because the cost and risk sit on a specific interface.

Seal faces may require:

- Flatness over the actual contact area.
- Ra or surface texture control.
- Waviness control when contact width is large.
- Edge break without damaging the seal line.
- Subsurface damage control after grinding or lapping.
- Cleanliness and packaging protection.
- Leak testing or mating-part confirmation.

A drawing that only says "Ra 0.2 all over" does not tell the supplier which surface is actually responsible for sealing.

### Define The Seal Type First

Different sealing methods need different machining language.

| Seal type                  | RFQ focus                                                                         |
| -------------------------- | --------------------------------------------------------------------------------- |
| O-ring groove              | Groove width, depth, corner radius, surface finish, edge break, compression logic |
| Flat gasket land           | Flatness, parallelism, surface texture, land width, no nicks in contact zone      |
| Valve seat                 | Concentricity, seat angle or flatness, edge condition, wear surface finish        |
| Vacuum face                | Flatness, Ra, scratch limit, cleaning, leak target, handling protection           |
| Ceramic-to-metal contact   | Mating material, load, surface finish, thermal cycling, chip risk                 |
| Ceramic-to-ceramic contact | Flatness pair, lapping sequence, contact pattern, particle risk                   |

The same ceramic part can have several surface classes. Mark the seal face clearly.

### RFQ Inputs That Change Cost

| Input                | Why it matters                                                                 |
| -------------------- | ------------------------------------------------------------------------------ |
| Material and grade   | Alumina, zirconia, SiC, Si3N4, AlN, and MACOR finish differently               |
| Blank state          | Fired ceramic, preform, customer blank, or near-net body affects stock removal |
| Seal face location   | Determines fixture access and lapping setup                                    |
| Flatness requirement | Often the main cost driver                                                     |
| Ra or finish target  | Changes grinding, lapping, polishing, and inspection                           |
| Contact width        | Narrow seal ring and broad face are different problems                         |
| Edge condition       | Controls chip risk near the actual seal line                                   |
| Mating component     | O-ring, gasket, metal face, ceramic face, valve part, or customer fixture      |
| Inspection evidence  | Flatness map, Ra report, visual standard, leak test, or contact pattern        |

Send the mating requirement if possible. A ceramic land that seals against elastomer does not need the same specification as a ceramic valve seat or a vacuum metal gasket interface.

### Flatness, Parallelism, And Surface Texture

Do not specify these as separate numbers without a function. A seal face may need:

- Flatness on the contact land.
- Parallelism to a mounting datum.
- Ra on the sealing surface.
- No scratches across the sealing path.
- Edge break outside the sealing path.
- Local flatness around bolt or clamp regions.

If the part is clamped, state the clamping method and load direction if known. If the seal is static, dynamic, vacuum, fluid, or gas, say so.

### Edge Break Is Not A Cosmetic Detail

Sharp ceramic edges can chip during handling or assembly. But too much chamfer near a seal line can reduce contact width or create a leak path.

Specify:

- Which edges need protection.
- Maximum chip size or visual standard.
- Whether chamfer or radius is allowed.
- Which edge must remain outside the sealing path.
- Whether lapping occurs before or after edge break.

This is especially important for valve seats, thin rings, O-ring lands, and vacuum gasket faces.

### Inspection And Acceptance

Match evidence to function:

| Requirement       | Evidence to discuss                                                  |
| ----------------- | -------------------------------------------------------------------- |
| Flatness          | Flatness report, CMM, optical flat, interferometry, or agreed method |
| Ra                | Surface roughness report on named face                               |
| Waviness          | Method and length scale if contact width makes it relevant           |
| Edge quality      | Visual standard, microscope image, max chip size                     |
| Leak behavior     | Leak test method, pressure, medium, fixture, acceptance limit        |
| Surface integrity | SSD control method, process route, sample review if critical         |
| Handling          | Packaging, protective film, clean handling notes                     |

Do not request a leak test without defining pressure, medium, fixture, or acceptance. If the customer will test in its own assembly, state that and ask for machining and inspection evidence that supports the test.

### Common RFQ Mistakes

Avoid:

- Global polishing notes on non-functional faces.
- Flatness without contact area or datum.
- Ra targets without saying which face is measured.
- Seal lands crossing holes, grooves, or chips without allowed edge condition.
- Lapping a face after features are already too close to the edge.
- Ignoring subsurface damage on high-stress or thermal-cycling interfaces.
- Asking for "no scratches" without defining the seal path and visual standard.
- Treating MACOR prototype finish as equivalent to production alumina, SiC, or Si3N4 behavior.

### Practical RFQ Checklist

Send:

1. Drawing and CAD file.
2. Ceramic material and grade.
3. Seal type and mating component.
4. Marked seal face or seal land.
5. Flatness, parallelism, Ra, and visual requirements by face.
6. Edge break and chip allowance near the seal path.
7. Leak, pressure, or contact test requirement if applicable.
8. Quantity, target lead time, and prototype or production intent.
9. Inspection report, packaging, and clean handling needs.

Use the [tolerance capability map](/posts/tolerances-gdt/ceramic-tolerance-capability-map-by-feature-process/) for dimension planning and the [RFQ checklist](/posts/rfq-preparation/custom-ceramic-cnc-machining-rfq-checklist/) for the full file package.
