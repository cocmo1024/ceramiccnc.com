export type CeramicProductCategory = {
  title: string;
  description: string;
  rfqFocus: string;
  icon: string;
};

export type CeramicProductGroup = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  categories: CeramicProductCategory[];
};

export const ceramicProductGroups: CeramicProductGroup[] = [
  {
    id: 'precision-shapes',
    eyebrow: 'Precision shapes',
    title: 'Machined shapes, wear interfaces, and structural parts',
    description:
      'Custom shapes are reviewed from the drawing, material grade, blank route, functional surfaces, quantity, and inspection requirement.',
    categories: [
      {
        title: 'Ceramic rods',
        description: 'Ground rods, stems, spacers, wear members, and insulating shafts.',
        rfqFocus: 'Diameter, length, straightness, end condition, surface finish, and grade.',
        icon: 'tabler:line',
      },
      {
        title: 'Ceramic suction nozzles',
        description: 'Pickup nozzles, vacuum tips, and small handling interfaces for automation equipment.',
        rfqFocus: 'Orifice, concentricity, tip geometry, vacuum path, edge condition, and contamination limits.',
        icon: 'tabler:vacuum-cleaner',
      },
      {
        title: 'Ceramic plungers',
        description: 'Wear-resistant plungers, dosing elements, piston interfaces, and metering rods.',
        rfqFocus: 'Diameter, roundness, straightness, finish, mating bore, media, and leakage expectation.',
        icon: 'tabler:adjustments-horizontal',
      },
      {
        title: 'Ceramic gauges',
        description: 'Gauge blocks, pin gauges, reference pieces, and wear-stable checking elements.',
        rfqFocus: 'Reference dimension, calibration intent, uncertainty, finish, handling, and reporting.',
        icon: 'tabler:ruler-measure',
      },
      {
        title: 'Cermet and metal–ceramic components',
        description:
          'Cermet wear parts and ceramic-to-metal component concepts reviewed around interfaces and joining.',
        rfqFocus: 'Material system, joining route, thermal expansion, load, environment, and acceptance test.',
        icon: 'tabler:layers-intersect',
      },
      {
        title: 'Ceramic tubes and rings',
        description: 'Insulating tubes, seal rings, sleeves, liners, spacers, and vacuum or fluid-control rings.',
        rfqFocus: 'ID/OD, wall, length, roundness, concentricity, end faces, and edge condition.',
        icon: 'tabler:circle-dashed',
      },
      {
        title: 'Ceramic shafts and sleeves',
        description: 'Bearing interfaces, motor shafts, guide sleeves, pump shafts, and wear-resistant bushings.',
        rfqFocus: 'Fit, running surface, coaxiality, roundness, load, lubricant or media, and finish.',
        icon: 'tabler:arrows-horizontal',
      },
      {
        title: 'Ceramic plates and sheets',
        description: 'Precision plates, insulating plates, wear plates, substrates, and lapped reference surfaces.',
        rfqFocus: 'Length, width, thickness, flatness, parallelism, hole pattern, Ra, and edge criteria.',
        icon: 'tabler:square',
      },
      {
        title: 'Ceramic pins and locating elements',
        description: 'Locating pins, alignment pins, support posts, probe interfaces, and wear-resistant stops.',
        rfqFocus: 'Diameter, position, tip profile, datum relationship, retention method, and chip limits.',
        icon: 'tabler:pin',
      },
      {
        title: 'Precision ceramic components',
        description:
          'Multi-feature parts with bores, slots, datums, pockets, seal faces, or inspection-critical geometry.',
        rfqFocus: 'STEP and drawing revision, CTQs, datum plan, functional surfaces, and inspection evidence.',
        icon: 'tabler:settings',
      },
      {
        title: 'Injection-molded ceramic parts',
        description:
          'Small or complex ceramic geometries evaluated for ceramic injection molding and finish machining.',
        rfqFocus: 'Annual volume, tooling ownership, shrinkage allowance, debinding, sintering, and finish stock.',
        icon: 'tabler:tool',
      },
      {
        title: 'Custom ceramic structural parts',
        description:
          'Drawing-defined brackets, arms, fixtures, supports, carriers, and non-standard ceramic structures.',
        rfqFocus:
          'Load path, brittle-risk features, interfaces, blank route, machining access, and proof requirements.',
        icon: 'tabler:components',
      },
    ],
  },
  {
    id: 'fluid-control',
    eyebrow: 'Fluid control',
    title: 'Pump, valve, dispensing, and corrosion-service ceramic parts',
    description:
      'Fluid-control parts are reviewed as mating systems. Media, pressure, fit, sealing, cleaning, and inspection matter as much as the nominal geometry.',
    categories: [
      {
        title: 'Ceramic liquid-filling and dosing pump parts',
        description: 'Pump barrels, plungers, sleeves, valve elements, and metering interfaces for filling equipment.',
        rfqFocus: 'Dose range, media, pressure, fit pair, leakage criterion, cleaning, quantity, and service cycle.',
        icon: 'tabler:droplet',
      },
      {
        title: 'Ceramic dispensing-valve parts',
        description:
          'Valve cores, seats, nozzles, sleeves, and wear interfaces for contact or jet dispensing equipment.',
        rfqFocus: 'Fluid rheology, particle size, shot size, actuation, sealing faces, orifice, and cleaning method.',
        icon: 'tabler:droplet',
      },
      {
        title: 'Petrochemical ceramic components',
        description:
          'Wear and corrosion-service sleeves, valve seats, liners, guides, nozzles, and sealing components.',
        rfqFocus: 'Media chemistry, solids, temperature, pressure, erosion mode, mating parts, and acceptance test.',
        icon: 'tabler:flask-2',
      },
      {
        title: 'Medical and food-equipment ceramic components',
        description:
          'Wear, metering, valve, and cleanable ceramic parts for equipment; regulatory status is project-specific.',
        rfqFocus:
          'Contact media, cleaning or sterilization, documentation, surface condition, traceability, and compliance owner.',
        icon: 'tabler:stethoscope',
      },
    ],
  },
  {
    id: 'automation-electronics',
    eyebrow: 'Automation and electronics',
    title: 'Handling, semiconductor, laser, and appearance-critical components',
    description:
      'These parts are reviewed around contamination, edge quality, repeatable interfaces, thermal or electrical function, and protected packaging.',
    categories: [
      {
        title: 'Ceramic vacuum pickup and suction parts',
        description: 'Vacuum chucks, pickup plates, suction cups, porous interfaces, and wafer-handling parts.',
        rfqFocus: 'Vacuum path, hole pattern, flatness, contact surface, cleanliness, edge criteria, and flow test.',
        icon: 'tabler:vacuum-cleaner',
      },
      {
        title: 'Laser and semiconductor ceramic components',
        description: 'Insulators, carriers, rings, arms, spacers, nozzles, and process-side precision components.',
        rfqFocus:
          'Material purity, plasma or vacuum environment, datums, particles, thermal load, and inspection plan.',
        icon: 'tabler:cpu',
      },
      {
        title: 'Ceramic parts for smart wearables',
        description: 'Small structural, insulating, wear-resistant, or appearance-critical zirconia and alumina parts.',
        rfqFocus: 'Cosmetic surface, color, edge feel, impact risk, assembly method, volume, and approved sample.',
        icon: 'tabler:device-watch',
      },
    ],
  },
  {
    id: 'material-led',
    eyebrow: 'Material-led scope',
    title: 'Material-specific ceramic component routes',
    description:
      'Material selection starts with the operating requirement and available grade data. A family name alone does not define finished-part performance.',
    categories: [
      {
        title: 'Zirconia ceramic components',
        description: 'High-strength, wear-resistant and appearance-critical components in selected zirconia systems.',
        rfqFocus: 'Stabilizer system, grade, color, aging environment, load, finish, and certificate requirement.',
        icon: 'tabler:hexagon',
      },
      {
        title: 'Alumina ceramic components',
        description:
          'Wear, insulation, vacuum, fluid-control, and general precision components in selected alumina grades.',
        rfqFocus: 'Alumina content, grade, electrical or wear duty, purity, blank route, finish, and evidence.',
        icon: 'tabler:triangle',
      },
      {
        title: 'Silicon nitride ceramic components',
        description:
          'Wear, thermal-shock, rolling, guide, and structural components where grade and proof plan matter.',
        rfqFocus: 'Grade, load, impact, temperature cycle, surface integrity, NDT or inspection requirement.',
        icon: 'tabler:hexagon',
      },
      {
        title: 'General structural ceramics by drawing',
        description:
          'Other advanced ceramic structural parts assessed against application, material, geometry, and supply route.',
        rfqFocus: 'Application conditions, candidate grade, CAD, CTQs, quantity, timing, and acceptance evidence.',
        icon: 'tabler:stack-2',
      },
    ],
  },
];

export const ceramicMaterialFamilies = [
  {
    name: 'Alumina (Al₂O₃)',
    grades: '95%, 97%, 99%, 99.5% and application-specific grades',
    review:
      'Purity, dielectric or wear duty, thermal environment, blank form, metallization or joining, and finish requirements.',
  },
  {
    name: 'Zirconia (ZrO₂)',
    grades: 'Yttria-, ceria-, or magnesia-stabilized systems by grade',
    review:
      'Stabilizer system, strength and aging trade-offs, color, wear pair, surface finish, and operating environment.',
  },
  {
    name: 'Zirconia-toughened alumina (ZTA)',
    grades: 'Composition and grade to be confirmed',
    review: 'Wear, toughness, media, part section, finish, and material certificate requirements.',
  },
  {
    name: 'Silicon nitride (Si₃N₄)',
    grades: 'Application-specific dense grades',
    review: 'Load, impact, thermal cycling, wear interface, surface integrity, and inspection evidence.',
  },
  {
    name: 'Silicon carbide (SiC)',
    grades: 'Sintered, reaction-bonded, or other route by project',
    review: 'Chemistry, temperature, stiffness, wear, sealing surface, blank availability, and finishing route.',
  },
  {
    name: 'Aluminum nitride (AlN)',
    grades: 'Thermal-management grades by supplier data',
    review: 'Thermal path, electrical isolation, moisture sensitivity, flatness, finish, and joining requirements.',
  },
  {
    name: 'Boron nitride (BN)',
    grades: 'Machinable and composite grades by application',
    review:
      'Temperature, atmosphere, electrical function, mechanical loading, contamination, and grade-specific limits.',
  },
  {
    name: 'MACOR and machinable glass ceramics',
    grades: 'Specified machinable glass-ceramic grade',
    review: 'Thermal cycle, vacuum or electrical duty, thread and edge design, finish, and material traceability.',
  },
  {
    name: 'Fused silica and selected technical ceramics',
    grades: 'Project-specific',
    review: 'Optical or thermal requirement, purity, geometry, surface condition, handling, and inspection method.',
  },
];

export const ceramicCapabilityRoutes = [
  {
    title: 'Blank and forming route review',
    description:
      'Compare purchased stock, pressed preforms, cold isostatic pressing, ceramic injection molding, and customer-supplied blanks.',
    icon: 'tabler:shape',
  },
  {
    title: 'Debinding and sintering planning',
    description:
      'Review shrinkage allowance, distortion risk, support strategy, firing route, and finish-machining stock before tooling is fixed.',
    icon: 'tabler:flame',
  },
  {
    title: 'CNC feature machining',
    description:
      'Machine accessible contours, pockets, slots, datums, holes, threads, and interface features where material and geometry permit.',
    icon: 'tabler:settings',
  },
  {
    title: 'Diamond and surface grinding',
    description:
      'Plan surface, cylindrical, centerless, ID/OD, and form grinding around datums, stock, edge stability, and subsurface-damage risk.',
    icon: 'tabler:disc',
  },
  {
    title: 'Bore finishing and honing',
    description:
      'Review bores, sleeves, plungers, valve fits, concentric interfaces, and measurable internal surface requirements.',
    icon: 'tabler:circle-dot',
  },
  {
    title: 'Lapping and polishing',
    description:
      'Define functional seal faces, datum pads, flatness, parallelism, Ra, waviness, cleanliness, and protection after finishing.',
    icon: 'tabler:sparkles',
  },
  {
    title: 'Cutting, drilling, and micro-features',
    description:
      'Evaluate cutting, precision holes, orifices, slots, thin sections, exit breakout, taper, ligament width, and inspection access.',
    icon: 'tabler:tool',
  },
  {
    title: 'Dimensional and surface inspection',
    description:
      'Align optical, roundness, profile, CMM, flatness, roughness, microscopy, hardness, or key-dimension evidence to the drawing.',
    icon: 'tabler:microscope',
  },
  {
    title: 'Assembly-interface review',
    description:
      'Review ceramic-to-metal interfaces, fits, seals, bonding or joining assumptions, thermal expansion, handling, and mating parts.',
    icon: 'tabler:assembly',
  },
  {
    title: 'Cleaning, packaging, and documentation',
    description:
      'Specify cleaning state, particle or cosmetic criteria, protected packaging, lot traceability, material documents, and reports.',
    icon: 'tabler:package',
  },
];

export const ceramicProductCategoryCount = ceramicProductGroups.reduce(
  (total, group) => total + group.categories.length,
  0
);
