export const rfqEmail = 'info@szcomo.com';
export const rfqEmailHref = `mailto:${rfqEmail}`;

export const ceramicApplications = [
  {
    id: 'semiconductor-ceramic-components',
    title: 'Semiconductor Ceramic Components',
    image: '~/assets/images/ceramic/application-1.webp',
    alt: 'Precision ceramic CNC machining for semiconductor wafer handling parts',
    description:
      'Semiconductor ceramic parts are judged by dimensional stability, particle control, flatness, edge quality, and repeatable interfaces. Common requests include wafer handling parts, insulating spacers, nozzles, focus-ring-adjacent hardware, and vacuum-side components in Al2O3 and SiC.',
    points: [
      {
        title: 'Risk drivers',
        description:
          'Thin walls, slots, pocket radii, particle-sensitive edges, and contamination-aware finishing determine whether the drawing is buildable.',
      },
      {
        title: 'Process focus',
        description:
          'We plan datum creation, diamond grinding allowance, edge break, and finish-critical surfaces before treating the RFQ as a price-only request.',
      },
      {
        title: 'Acceptance evidence',
        description:
          'CMM, profile checks, key-dimension reports, surface finish notes, and visual edge criteria can be aligned to equipment-level acceptance.',
      },
    ],
  },
  {
    id: 'ceramic-sealing-faces-valve-seats',
    title: 'Ceramic Sealing Faces and Valve Seats',
    image: '~/assets/images/ceramic/application-2.webp',
    alt: 'Ceramic sealing faces and valve seats with flatness and Ra control',
    description:
      'ZrO2 and Al2O3 valve seats, sealing rings, and mating faces are usually reviewed around flatness, parallelism, Ra, edge condition, and the grinding route.',
    points: [
      {
        title: 'Functional surfaces',
        description:
          'Seal lands, lead-in chamfers, mating bands, and reference faces should be marked so precision is applied where it matters.',
      },
      {
        title: 'Failure modes',
        description:
          'Edge chipping, hidden micro-cracks, waviness, and tolerance drift can create leak or wear failures even when nominal size passes.',
      },
      {
        title: 'Inspection path',
        description:
          'Flatness mapping, surface finish readings, CMM datum checks, and chip criteria reduce late acceptance disputes.',
      },
    ],
  },
  {
    id: 'micro-drilling-precision-orifices',
    title: 'Micro-Drilling and Precision Orifices',
    image: '~/assets/images/ceramic/application-3.webp',
    alt: 'Ceramic micro-drilling and precision orifices in alumina and silicon nitride',
    description:
      'Sub-millimeter holes in Al2O3, Si3N4, and SiC are limited by brittle fracture, exit breakout, aspect ratio, taper, and measurable position relative to stable datums.',
    points: [
      {
        title: 'Design constraints',
        description:
          'Diameter, depth, hole-to-edge distance, ligament width, entry and exit support, and allowable taper should be specified together.',
      },
      {
        title: 'Route options',
        description:
          'Diamond drilling, ultrasonic machining, laser drilling, or green-state machining may fit depending on feature size and damage allowance.',
      },
      {
        title: 'Measurable acceptance',
        description:
          'Optical measurement, pin gauges, CMM position evidence, or CT should be selected before the quote is finalized.',
      },
    ],
  },
  {
    id: 'ceramic-insulators-high-voltage-interfaces',
    title: 'Ceramic Insulators and High-Voltage Interfaces',
    image: '~/assets/images/ceramic/application-4.webp',
    alt: 'Ceramic electrical insulators and high-voltage interface parts',
    description:
      'Electrical ceramic parts are performance-limited by edge radius, concentricity, creepage geometry, surface condition, and mating flatness, not by bulk dielectric strength alone.',
    points: [
      {
        title: 'Typical parts',
        description:
          'Alumina standoffs, feedthrough insulators, insulating sleeves, vacuum interface parts, and high-voltage support hardware.',
      },
      {
        title: 'Risk controls',
        description:
          'Sharp transitions, slot corners, chips, and surface contamination can elevate tracking, corona, or assembly stress.',
      },
      {
        title: 'Quote inputs',
        description:
          'Send voltage class, clearance/creepage intent, mating surfaces, temperature range, and inspection or surface requirements.',
      },
    ],
  },
  {
    id: 'wear-parts-seals-bearings-pump-hardware',
    title: 'Wear Parts: Seals, Bearings, and Pump Hardware',
    image: '~/assets/images/ceramic/application-5.webp',
    alt: 'SiC and Si3N4 wear parts for seals, bearings, and pump hardware',
    description:
      'SiC, Si3N4, alumina, and zirconia wear parts need geometry and surface integrity that match the dominant wear mode: abrasion, erosion, impact, thermal cycling, or chemical attack.',
    points: [
      {
        title: 'Running surfaces',
        description:
          'Roundness, flatness, Ra, groove condition, and edge stability often matter more than the nominal outside size.',
      },
      {
        title: 'Material fit',
        description:
          'SiC may fit harsh media and high wear; Si3N4 may help with mechanical reliability and thermal shock; zirconia can reduce chipping risk.',
      },
      {
        title: 'Evidence',
        description:
          'Surface finish, roundness/profile checks, datum-based dimensions, and lot traceability help align wear-life expectations.',
      },
    ],
  },
  {
    id: 'precision-flats-parallels-lapped-surfaces',
    title: 'Precision Flats, Parallels, and Lapped Surfaces',
    image: '~/assets/images/ceramic/application-6.webp',
    alt: 'Precision flatness and lapped ceramic surfaces',
    description:
      'Flatness and parallelism in ceramics require stable datums, controlled removal, and grinding or lapping sequences that avoid warpage and subsurface damage.',
    points: [
      {
        title: 'Typical parts',
        description:
          'Sealing plates, vacuum interfaces, optical-adjacent fixtures, metrology references, and spacer stacks.',
      },
      {
        title: 'Cost trigger',
        description:
          'Tight flatness on multiple faces adds setup, fixture, lapping, cleaning, and repeated measurement time.',
      },
      {
        title: 'Specification guidance',
        description:
          'Apply tight requirements only to functional faces, then define flatness mapping and Ra evidence for those faces.',
      },
    ],
  },
  {
    id: 'slots-pockets-thin-wall-geometry',
    title: 'Slots, Pockets, and Thin-Wall Geometry',
    image: '~/assets/images/ceramic/application-7.webp',
    alt: 'Ceramic slots pockets and thin-wall geometry',
    description:
      'Complex pockets and thin walls are feasible only when the CAD respects tool access, minimum internal radii, wall stability, and brittle-fracture behavior.',
    points: [
      {
        title: 'Geometry limits',
        description:
          'Minimum slot width, radius, wall thickness, step-down, hole proximity, and unsupported length should be reviewed early.',
      },
      {
        title: 'Damage modes',
        description:
          'Corner chipping, wall fracture, micro-cracks, and tolerance drift often appear when sharp CAD features are treated like metal machining.',
      },
      {
        title: 'Drawing notes',
        description:
          'Mark critical dimensions, allowable edge break, and surfaces that can remain as-sintered or standard-ground.',
      },
    ],
  },
  {
    id: 'chemical-resistant-ceramic-hardware',
    title: 'Chemical-Resistant Ceramic Hardware',
    image: '~/assets/images/ceramic/application-8.webp',
    alt: 'Chemical resistant ceramic hardware for corrosive service',
    description:
      'Al2O3, SiC, and selected advanced ceramics can handle corrosive or abrasive media when sealing geometry, surface finish, and edge integrity are specified clearly.',
    points: [
      {
        title: 'Typical components',
        description:
          'Flow components, corrosion-resistant plates, ceramic fixtures, pump parts, and process-contact hardware.',
      },
      {
        title: 'Interface control',
        description:
          'Threads, grooves, seal faces, port transitions, and assembly edges need manufacturable geometry and defined acceptance.',
      },
      {
        title: 'RFQ inputs',
        description:
          'Provide media chemistry, temperature, flow/erosion condition, cleaning method, and critical leak or wear surfaces.',
      },
    ],
  },
  {
    id: 'metrology-fixtures-reference-geometry',
    title: 'Metrology Fixtures and Reference Geometry',
    image: '~/assets/images/ceramic/application-9.webp',
    alt: 'Ceramic metrology fixtures and reference geometry',
    description:
      'Ceramic metrology parts are purchased for stability and repeatability: datums must be meaningful, bores must be coaxial, and flats must remain stable.',
    points: [
      {
        title: 'Typical parts',
        description:
          'Reference plates, gauge blocks, inspection fixtures, precision spacers, datum pads, and alignment bushings.',
      },
      {
        title: 'Measurement first',
        description:
          'If a feature cannot be inspected repeatably, it should not become the acceptance basis for a precision program.',
      },
      {
        title: 'Delivery package',
        description:
          'CMM reports, profile checks, flatness mapping, and protected packaging can document the agreed sign-off evidence.',
      },
    ],
  },
  {
    id: 'vacuum-ceramic-hardware',
    title: 'Vacuum Hardware: Ceramics for Leak-Critical Interfaces',
    image: '~/assets/images/ceramic/application-10.webp',
    alt: 'Vacuum ceramic hardware for leak-critical interfaces',
    description:
      'Vacuum ceramic parts need flatness, edge integrity, cleanliness, density/porosity control, and interface-critical reporting rather than generic dimensional pass/fail.',
    points: [
      {
        title: 'Typical uses',
        description:
          'Insulating spacers, seat faces, ceramic rings, vacuum-adjacent hardware, and leak-critical interface components.',
      },
      {
        title: 'Primary risks',
        description:
          'Micro-chips, gasket compression drift, outgassing surfaces, and hidden micro-cracks can compromise assembly yield.',
      },
      {
        title: 'Acceptance logic',
        description:
          'Define leak target, cleaning/bake requirements, surface finish, and dimension reports for sealing interfaces.',
      },
    ],
  },
  {
    id: 'ceramic-nozzles-jets-flow-restrictors',
    title: 'Nozzles, Jets, and Flow Restrictors',
    image: '~/assets/images/ceramic/application-11.webp',
    alt: 'Ceramic nozzles jets and flow orifices',
    description:
      'Ceramic nozzles are reviewed by erosion resistance, orifice geometry, edge condition, and the flow or inspection evidence required by the application.',
    points: [
      {
        title: 'Feature controls',
        description:
          'Orifice size, roundness, taper, concentricity, inlet chamfer, and exit breakout must be measurable.',
      },
      {
        title: 'Material options',
        description:
          'Alumina, SiC, and zirconia may fit depending on media, erosion, thermal exposure, and chipping risk.',
      },
      {
        title: 'Inspection methods',
        description:
          'Optical measurement, pin gauges, flow checks, or CMM evidence should be chosen according to the feature size.',
      },
    ],
  },
  {
    id: 'thermal-barrier-heat-resistant-fixtures',
    title: 'Thermal Barrier and Heat-Resistant Ceramic Fixtures',
    image: '~/assets/images/ceramic/application-12.webp',
    alt: 'Thermal barrier and heat resistant ceramic fixtures',
    description:
      'Heat-exposed ceramic fixtures need corner relief, wall-thickness control, stable mounting, and material selection matched to thermal cycling.',
    points: [
      {
        title: 'Typical parts',
        description: 'Alumina and silicon-nitride fixtures, spacers, setters, insulating plates, and hot-zone tooling.',
      },
      {
        title: 'Failure modes',
        description:
          'Cracks start at sharp corners, abrupt thickness changes, mounting tension, or uneven stock removal.',
      },
      {
        title: 'What to send',
        description:
          'Provide service temperature, ramp rate, atmosphere, load condition, mounting method, and critical faces.',
      },
    ],
  },
  {
    id: 'precision-bores-coaxiality-alignment',
    title: 'Precision Bores, Coaxiality, and Alignment Features',
    image: '~/assets/images/ceramic/application-13.webp',
    alt: 'Precision ceramic bores coaxiality and alignment features',
    description:
      'Precision bores in ceramics are a grinding and datum-control problem. Coaxiality and roundness depend on how parts are held, finished, and inspected.',
    points: [
      {
        title: 'Typical parts',
        description:
          'Alignment bushings, insulating sleeves, bearing-adjacent components, precision rings, and stack-up-critical hardware.',
      },
      {
        title: 'Constraints',
        description:
          'Minimum bore size, wall thickness around bores, fixturing stability, and re-chucking strategy determine what tolerance can be reviewed.',
      },
      {
        title: 'Inspection',
        description:
          'CMM coaxiality, roundness/profile checks, and datum-based key dimensions should be planned before production.',
      },
    ],
  },
  {
    id: 'ceramic-edge-quality-chamfers-radii',
    title: 'Ceramic Edge Quality: Chamfers, Radii, and Chip Control',
    image: '~/assets/images/ceramic/application-14.webp',
    alt: 'Ceramic edge quality chamfers radii and chip control',
    description:
      'Most ceramic failures start at edges. A controlled chamfer or radius is an engineering feature, not cosmetic finishing.',
    points: [
      {
        title: 'Specify edges',
        description:
          'Handling edges, seal lead-ins, hole exits, slots, and mating corners should have measurable chip or edge-break criteria.',
      },
      {
        title: 'Avoid ambiguity',
        description:
          'Words like "no chips" or "sharp" should be replaced with functional zones, allowable chip size, and inspection method.',
      },
      {
        title: 'Process impact',
        description:
          'Edge finishing interacts with adjacent tolerance and surface finish, so it should be in the RFQ rather than added late.',
      },
    ],
  },
  {
    id: 'prototyping-small-batch-repeat-orders',
    title: 'Prototyping, Small-Batch Production, and Repeat Orders',
    image: '~/assets/images/ceramic/application-15.webp',
    alt: 'Advanced ceramic prototyping and small batch production',
    description:
      'Ceramic prototype and repeat-order programs are easier to evaluate when material grade, datum scheme, finishing route, measurable acceptance, and protected handling are defined early.',
    points: [
      {
        title: 'Prototype value',
        description:
          'Early parts should confirm feature feasibility, edge integrity, inspection method, and assembly fit before repeat orders.',
      },
      {
        title: 'Repeatability plan',
        description:
          'Keep material grade, route, tooling assumptions, finishing sequence, and inspection method stable across lots.',
      },
      {
        title: 'Procurement inputs',
        description:
          'Send prototype quantity, production forecast, target date, CTQs, documentation requirements, and packaging needs.',
      },
    ],
  },
];

export const ceramicCapabilities = [
  {
    title: 'Post-sinter CNC machining',
    description:
      'Contour machining, slotting, pocketing, and datum preparation on fired ceramics where accessible features can be controlled.',
    icon: 'tabler:settings',
  },
  {
    title: 'Diamond grinding and lapping',
    description:
      'Flatness, parallelism, sealing faces, bores, and precision interfaces planned with allowance and controlled removal.',
    icon: 'tabler:diamond',
  },
  {
    title: 'Micro-drilling and orifices',
    description:
      'Small holes and flow features reviewed for aspect ratio, taper, breakout, position, and inspection access.',
    icon: 'tabler:target-arrow',
  },
  {
    title: 'Edge break and chip control',
    description:
      'Chamfers, radii, visual criteria, and measurable chip limits defined for handling and functional edges.',
    icon: 'tabler:corner-down-right',
  },
  {
    title: 'Surface finish planning',
    description:
      'Ra targets, lapped surfaces, polished areas, and surface integrity risks tied to functional faces only.',
    icon: 'tabler:ruler-measure',
  },
  {
    title: 'Inspection evidence',
    description:
      'CMM, optical checks, profile, surface finish, key-dimension reports, CT, and acceptance packets selected by risk.',
    icon: 'tabler:clipboard-check',
  },
];

export const ceramicMaterials = [
  {
    title: 'Alumina Al2O3',
    description:
      'Common baseline for insulation, wear, chemical stability, and cost-sensitive precision parts. Specify purity, density, and functional faces.',
    icon: 'tabler:hexagon-letter-a',
  },
  {
    title: 'Zirconia ZrO2',
    description:
      'Selected for higher toughness and reduced chipping risk in some sealing, wear, and impact-sensitive mechanical parts.',
    icon: 'tabler:hexagon-letter-z',
  },
  {
    title: 'Silicon Nitride Si3N4',
    description:
      'A strong candidate for bearing, wear, and thermally cycled parts where mechanical reliability and thermal shock resistance matter.',
    icon: 'tabler:hexagon-letter-s',
  },
  {
    title: 'Silicon Carbide SiC',
    description:
      'Used for extreme wear, chemical resistance, high-temperature stability, seals, nozzles, and harsh process hardware.',
    icon: 'tabler:shield-check',
  },
  {
    title: 'MACOR and machinable ceramics',
    description:
      'Useful for prototypes, insulating fixtures, and precision lab hardware when machinability and low-volume iteration matter.',
    icon: 'tabler:tool',
  },
  {
    title: 'AlN, BN, fused silica, and others',
    description:
      'Reviewed when thermal conductivity, dielectric behavior, vacuum compatibility, or optical/thermal properties drive the material choice.',
    icon: 'tabler:atom',
  },
];

export const ceramicFaqItems = [
  {
    title: 'What information should be included in a ceramic CNC RFQ?',
    description:
      'Send material and grade, drawing revision, STEP or IGES files, functional datums, GD&T, critical faces, quantity, lead time, surface finish, inspection scope, and application constraints such as temperature, media, wear, vacuum, or insulation.',
  },
  {
    title: 'How can I reduce quote back-and-forth?',
    description:
      'Mark the functional faces and datums, define surface finish per face, list micro-holes or thin-wall features, state edge condition, and specify how each critical requirement will be inspected.',
  },
  {
    title: 'What are the main cost drivers in ceramic CNC machining?',
    description:
      'Cost is usually driven by diamond grinding or lapping time, micro-features, tight GD&T across multiple faces, low Ra requirements, brittle failure risk, inspection time, and blank availability.',
  },
  {
    title: 'When does green machining reduce cost or lead time?',
    description:
      'Green machining can reduce shaping cost before sintering when geometry is complex and final tolerances are moderate. Tight seal faces, bearing fits, or datum faces usually still need post-sinter finishing.',
  },
  {
    title: 'When should a drawing use as-sintered dimensions?',
    description:
      'Use as-sintered dimensions for non-critical surfaces and moderate tolerance features. Use post-sinter grinding or lapping for seal faces, bearing interfaces, flatness, parallelism, and measurable datums.',
  },
  {
    title: 'What lead time should be planned?',
    description:
      'Lead time is estimated after review of blank sourcing, preform or sintering route, post-sinter grinding, lapping, polishing, micro-hole work, and metrology scope. Inspection often controls schedule for tight parts.',
  },
  {
    title: 'How should quotes from different suppliers be compared?',
    description:
      'Normalize material grade, route, datum scheme, tolerance map, Ra per functional face, inspection method, documentation, and packaging requirements. Low quotes often exclude finishing or evidence.',
  },
  {
    title: 'Which ceramics are commonly machined?',
    description:
      'Common precision ceramics include alumina, zirconia, silicon nitride, silicon carbide, aluminum nitride, boron nitride, fused silica, and selected machinable glass ceramics.',
  },
  {
    title: 'How do I choose between alumina and zirconia?',
    description:
      'Alumina is often used for insulation, wear resistance, and cost efficiency. Zirconia is often chosen when toughness and reduced chipping risk matter more.',
  },
  {
    title: 'When is silicon nitride a strong candidate?',
    description:
      'Silicon nitride fits bearing, wear, and thermally cycled parts where strength retention, shock resistance, and lower chipping risk are important.',
  },
  {
    title: 'When should SiC be considered?',
    description:
      'SiC fits extreme wear, high temperature, and chemical service, but it is very hard to finish. Apply tight tolerances and low Ra only where function requires them.',
  },
  {
    title: 'What counts as a micro-hole in ceramics?',
    description:
      'A micro-hole is any small-diameter or high-aspect-ratio hole where diameter, depth, edge integrity, breakout, taper, and position become yield-limiting.',
  },
  {
    title: 'What causes chipping around micro-holes?',
    description:
      'Entry and exit fracture, tool wear, local thermal shock, poor support, aggressive feed, and missing edge-break rules can all create chips or cracks.',
  },
  {
    title: 'What tolerances are realistic?',
    description:
      'Tolerance feasibility depends on material, size, geometry, and process route. Tight values may be feasible on accessible, finished faces, but price and risk rise sharply when multiple faces require precision without stable datums.',
  },
  {
    title: 'How should surface finish be specified?',
    description:
      'Surface finish should be reviewed per functional face. Ground surfaces fit many wear and datum needs; lapping can improve flatness and Ra; polishing is used only where very low Ra or sensitive surfaces justify it.',
  },
  {
    title: 'How should datums be defined?',
    description:
      'Define datums on stable, finished, inspectable features. Avoid using rough as-sintered surfaces as primary datums for tight grinding relationships.',
  },
  {
    title: 'Can ceramics be threaded?',
    description:
      'Threads may be feasible after review of material, size, wall thickness, and load direction, but they are fragile and expensive. For load-bearing joints, consider inserts, brazing, metallization, or compression-dominant clamping.',
  },
  {
    title: 'Can sharp internal corners be machined?',
    description:
      'Internal corners are limited by tool geometry and stress concentration. Use radii where possible and define chip criteria if a sharp transition is function-critical.',
  },
  {
    title: 'What inspection methods are common?',
    description:
      'CMM, optical measurement, microscopy, pin gauges, profilometry, flatness mapping, density checks, leak checks, and CT may be used depending on feature size and risk.',
  },
  {
    title: 'What can CT scanning prove?',
    description:
      'CT can validate internal geometry and detect defects above the scan resolution threshold. It cannot prove that no defects exist below that threshold.',
  },
  {
    title: 'What should acceptance criteria include?',
    description:
      'Tie tolerances to datums, define maximum allowable edge chip size by zone, specify Ra per face, state crack criteria, and select inspection method and sampling plan.',
  },
  {
    title: 'How should packaging be specified?',
    description:
      'Use individual cushioning, protected edges, face separators, and controlled orientation for fragile parts. Avoid loose packing for precision faces and micro-features.',
  },
  {
    title: 'What if the exact ceramic grade is not known?',
    description:
      'Send the failure mode and environment: temperature, media chemistry, wear, insulation, thermal conductivity, load type, dimensional stability, and inspection needs.',
  },
  {
    title: 'How do I avoid over-specification?',
    description:
      'Apply tight tolerance, Ra, and geometric controls only on functional interfaces such as seal lands, bearing fits, datum faces, alignment features, and inspected bores.',
  },
];

export const engineeringArticles = [
  {
    title: 'Ceramic Tolerance Capability Map: Practical Tolerance Ranges by Feature and Process',
    href: '/posts/tolerances-gdt/ceramic-tolerance-capability-map-by-feature-process/',
    date: '2026-02-01',
    image: '~/assets/images/ceramic/posts/a2600901e3cadfc40baf87a52e0db90f-300-300-0.webp',
    description:
      'Feature-by-feature tolerance guidance for as-sintered, green-machined, ground, and lapped ceramic routes.',
  },
  {
    title: 'Ceramic Surface Finish and Subsurface Damage: How to Specify, Control, and Price It',
    href: '/posts/surface-finish-functional/ceramic-ssd-surface-finish-specify-control-price/',
    date: '2026-01-25',
    image: '~/assets/images/ceramic/posts/18c0031ae97f067c467b9ff9d796faae-300-300-0.webp',
    description:
      'How Ra, lapping, polishing, microscopy, and process validation affect ceramic surface integrity and cost.',
  },
  {
    title: 'Ceramic DFM Design Rules: A Go/No-Go Handbook for Machinable Features',
    href: '/posts/design-rules-dfm/ceramic-dfm-design-rules/',
    date: '2026-01-18',
    image: '~/assets/images/ceramic/posts/b6348580a5801370b727338ab283357b-300-300-0.webp',
    description:
      'Practical design rules for holes, slots, walls, edges, internal radii, datums, and inspection access.',
  },
  {
    title: 'Green Machining vs Hard Machining: Cost and Risk Control in Ceramics',
    href: '/posts/process-routes-control/green-machining-vs-hard-machining/',
    date: '2026-01-07',
    image: '~/assets/images/ceramic/posts/9d578d87f9f2bead1bfcff56df255185-300-300-0.webp',
    description:
      'When to machine before sintering, when to grind after firing, and how to plan datum and tolerance risk.',
  },
  {
    title: 'Ceramic AM Preforms: When CNC Finishing Still Controls Acceptance',
    href: '/posts/engineering-guide/ceramic-additive-manufacturing-components-2026/',
    date: '2026-01-06',
    image: '~/assets/images/ceramic/hero-ceramic-cnc.webp',
    description:
      'Where ceramic AM can create difficult preforms, and why sintering, CNC finishing, density evidence, and inspection still decide acceptance.',
  },
  {
    title: 'Ceramic Machining and Diamond Grinding Guide for Buyers',
    href: '/posts/feasibility-process-choice/ceramic-machining-guide/',
    date: '2026-01-03',
    image: '~/assets/images/ceramic/posts/744265b0487821dd43016f724d1e24cc-300-300-0.webp',
    description: 'How capability, cost, lead time, and acceptance are reviewed before quoting precision ceramic parts.',
  },
];
