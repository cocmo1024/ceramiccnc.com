export interface ArticleTopicHub {
  id: string;
  href: string;
  title: string;
  description: string;
  postIds: string[];
}

export const articleTopicHubs: ArticleTopicHub[] = [
  {
    id: 'rfq-foundation',
    href: '/rfq/',
    title: 'RFQ and ceramic machining fundamentals',
    description:
      'Start here when a buyer needs to turn a ceramic drawing into a quote-ready package with material, tolerance, surface, process, and inspection assumptions clear.',
    postIds: [
      'feasibility-process-choice/ceramic-machining-guide',
      'industrial-ceramic-machining/precision-ceramic-machining-high-performance-industrial-components',
      'rfq-preparation/custom-ceramic-cnc-machining-rfq-checklist',
      'materials-grade-selection/ceramic-material-selection-cnc-machining',
      'design-rules-dfm/ceramic-cnc-machining-design-rules-advanced-ceramic-parts',
      'tolerances-gdt/ceramic-tolerance-capability-map-by-feature-process',
      'surface-finish-functional/ceramic-ssd-surface-finish-specify-control-price',
      'process-routes-control/green-machining-vs-hard-machining',
    ],
  },
  {
    id: 'semiconductor-equipment',
    href: '/applications/semiconductor-ceramic-components/',
    title: 'Semiconductor equipment ceramic components',
    description:
      'Wafer handling, vacuum, process chamber, plasma, and AlN thermal-management ceramic RFQs where cleanliness, flatness, edge quality, and inspection evidence matter.',
    postIds: [
      'semiconductor-equipment/ai-semiconductor-equipment-ceramic-parts',
      'semiconductor-equipment/precision-ceramic-components-semiconductor-equipment',
      'semiconductor-equipment/alumina-ceramic-parts-semiconductor-processing-equipment',
      'semiconductor-equipment/silicon-carbide-wafer-handling-components-semiconductor-manufacturing',
      'semiconductor-equipment/ceramic-end-effectors-wafer-handling-automation',
      'semiconductor-equipment/machined-ceramic-vacuum-chuck-components-semiconductor-tools',
      'semiconductor-equipment/precision-ceramic-nozzles-semiconductor-vacuum-equipment',
      'semiconductor-equipment/precision-ceramic-rings-semiconductor-process-chambers',
      'semiconductor-equipment/ceramic-insulators-plasma-etching-deposition-equipment',
      'semiconductor-equipment/aluminum-nitride-ceramic-parts-semiconductor-thermal-management',
      'high-purity-cleanroom/precision-ceramic-components-cleanroom-high-purity-manufacturing-systems',
    ],
  },
  {
    id: 'material-selection',
    href: '/materials/',
    title: 'Material-specific ceramic machining guides',
    description:
      'Compare common RFQ routes for alumina, zirconia, silicon nitride, silicon carbide, AlN, Macor, and boron nitride before locking a drawing.',
    postIds: [
      'materials-grade-selection/ceramic-material-selection-cnc-machining',
      'industrial-ceramic-machining/precision-machined-alumina-ceramic-parts-industrial-applications',
      'electrical-insulation/alumina-ceramic-insulators-electrical-electronic-applications',
      'rf-microwave/machined-ceramic-plates-rf-microwave-applications',
      'vacuum-electrical-systems/ceramic-feedthrough-insulators-vacuum-electrical-systems',
      'semiconductor-equipment/alumina-ceramic-parts-semiconductor-processing-equipment',
      'industrial-ceramic-machining/zirconia-ceramic-machining-high-strength-precision-components',
      'industrial-ceramic-machining/silicon-nitride-ceramic-machining-structural-wear-parts',
      'industrial-ceramic-machining/silicon-carbide-ceramic-machining-harsh-environment-applications',
      'industrial-ceramic-machining/aluminum-nitride-ceramic-machining-thermal-management-components',
      'power-electronics/aluminum-nitride-heat-spreaders-power-electronics',
      'industrial-ceramic-machining/macor-machinable-glass-ceramic-parts-applications-design-guide',
      'optical-laser-equipment/machined-ceramic-components-optical-laser-equipment',
      'industrial-ceramic-machining/boron-nitride-ceramic-machining-high-temperature-insulation-parts',
    ],
  },
  {
    id: 'precision-features-inspection',
    href: '/capabilities/',
    title: 'Precision features, surfaces, and inspection evidence',
    description:
      'Use this path for drawings controlled by micro-holes, thin walls, lapped faces, flatness, edge chips, vacuum features, creepage paths, or measurable acceptance gates.',
    postIds: [
      'design-rules-dfm/ceramic-dfm-design-rules',
      'design-rules-dfm/ceramic-cnc-machining-design-rules-advanced-ceramic-parts',
      'tolerances-gdt/ceramic-tolerance-capability-map-by-feature-process',
      'surface-finish-functional/ceramic-ssd-surface-finish-specify-control-price',
      'automation-fixtures/precision-ceramic-fixture-plate-locating-pins-case-study',
      'power-electronics/alumina-ceramic-inspection-fixtures-sic-power-module-assembly-case-study',
      'power-electronics/aluminum-nitride-heat-spreaders-power-electronics',
      'semiconductor-equipment/ceramic-insulators-plasma-etching-deposition-equipment',
      'electrical-insulation/alumina-ceramic-insulators-electrical-electronic-applications',
      'rf-microwave/machined-ceramic-plates-rf-microwave-applications',
      'vacuum-electrical-systems/ceramic-feedthrough-insulators-vacuum-electrical-systems',
      'semiconductor-equipment/alumina-ceramic-parts-semiconductor-processing-equipment',
      'semiconductor-equipment/aluminum-nitride-ceramic-parts-semiconductor-thermal-management',
      'sensor-measurement-devices/precision-ceramic-components-sensors-measurement-devices',
      'optical-laser-equipment/machined-ceramic-components-optical-laser-equipment',
      'pump-valve-components/precision-ceramic-pump-valve-components-corrosive-fluid-control',
      'pump-valve-components/ceramic-valve-components-corrosive-abrasive-fluids',
      'pump-valve-components/precision-ceramic-seal-faces-pumps-rotating-equipment',
      'high-purity-cleanroom/precision-ceramic-components-cleanroom-high-purity-manufacturing-systems',
      'micro-hole-machining/ceramic-micro-hole-machining-rfq',
      'semiconductor-equipment/precision-ceramic-nozzles-semiconductor-vacuum-equipment',
      'thin-wall-sleeves/ceramic-thin-wall-sleeve-bore-concentricity-rfq',
      'lapped-seal-faces/ceramic-lapped-seal-faces-rfq',
      'vacuum-chucks/ceramic-vacuum-chuck-flatness-rfq',
      'high-voltage-insulation/ceramic-high-voltage-insulators-rfq',
    ],
  },
  {
    id: 'industrial-applications',
    href: '/applications/',
    title: 'Industrial application and procurement paths',
    description:
      'Application-focused RFQ paths for wear parts, power electronics, vacuum hardware, sealing faces, high-voltage insulation, and repeatable industrial ceramic procurement.',
    postIds: [
      'industrial-ceramic-machining/industrial-ceramic-machining-wear-resistant-components',
      'wear-components/wear-resistant-ceramic-bushings-industrial-machinery',
      'wear-components/ceramic-guide-rails-high-friction-production-lines',
      'automation-fixtures/precision-ceramic-fixture-plate-locating-pins-case-study',
      'power-electronics/alumina-ceramic-inspection-fixtures-sic-power-module-assembly-case-study',
      'sensor-measurement-devices/precision-ceramic-components-sensors-measurement-devices',
      'pump-valve-components/precision-ceramic-pump-valve-components-corrosive-fluid-control',
      'pump-valve-components/ceramic-valve-components-corrosive-abrasive-fluids',
      'pump-valve-components/precision-ceramic-seal-faces-pumps-rotating-equipment',
      'high-purity-cleanroom/precision-ceramic-components-cleanroom-high-purity-manufacturing-systems',
      'power-electronics/ai-data-center-power-electronics-ceramic-machining',
      'power-electronics/aluminum-nitride-heat-spreaders-power-electronics',
      'semiconductor-equipment/ceramic-insulators-plasma-etching-deposition-equipment',
      'electrical-insulation/alumina-ceramic-insulators-electrical-electronic-applications',
      'rf-microwave/machined-ceramic-plates-rf-microwave-applications',
      'vacuum-electrical-systems/ceramic-feedthrough-insulators-vacuum-electrical-systems',
      'semiconductor-equipment/aluminum-nitride-ceramic-parts-semiconductor-thermal-management',
      'lapped-seal-faces/ceramic-lapped-seal-faces-rfq',
      'vacuum-chucks/ceramic-vacuum-chuck-flatness-rfq',
      'high-voltage-insulation/ceramic-high-voltage-insulators-rfq',
      'micro-hole-machining/ceramic-micro-hole-machining-rfq',
      'thin-wall-sleeves/ceramic-thin-wall-sleeve-bore-concentricity-rfq',
      'rfq-preparation/custom-ceramic-cnc-machining-rfq-checklist',
    ],
  },
  {
    id: 'power-electrical-thermal',
    href: '/applications/electrical-thermal-ceramic-components/',
    title: 'Power electronics, electrical insulation, and thermal parts',
    description:
      'Use this path for AlN, alumina, Si3N4, SiC, creepage, clearance, heat-spreader, fixture, and high-voltage ceramic RFQs driven by electrical or thermal constraints.',
    postIds: [
      'power-electronics/ai-data-center-power-electronics-ceramic-machining',
      'power-electronics/aluminum-nitride-heat-spreaders-power-electronics',
      'power-electronics/alumina-ceramic-inspection-fixtures-sic-power-module-assembly-case-study',
      'electrical-insulation/alumina-ceramic-insulators-electrical-electronic-applications',
      'rf-microwave/machined-ceramic-plates-rf-microwave-applications',
      'vacuum-electrical-systems/ceramic-feedthrough-insulators-vacuum-electrical-systems',
      'semiconductor-equipment/aluminum-nitride-ceramic-parts-semiconductor-thermal-management',
      'industrial-ceramic-machining/aluminum-nitride-ceramic-machining-thermal-management-components',
      'high-voltage-insulation/ceramic-high-voltage-insulators-rfq',
      'industrial-ceramic-machining/precision-machined-alumina-ceramic-parts-industrial-applications',
      'industrial-ceramic-machining/silicon-nitride-ceramic-machining-structural-wear-parts',
      'materials-grade-selection/ceramic-material-selection-cnc-machining',
      'rfq-preparation/custom-ceramic-cnc-machining-rfq-checklist',
    ],
  },
  {
    id: 'wear-fluid-chemical',
    href: '/applications/wear-fluid-control-ceramic-components/',
    title: 'Wear, pump, valve, fluid, and chemical ceramic parts',
    description:
      'Component searches for bushings, seal faces, nozzles, sleeves, valve parts, pump hardware, abrasive media, and corrosive-fluid ceramic machining decisions.',
    postIds: [
      'industrial-ceramic-machining/industrial-ceramic-machining-wear-resistant-components',
      'wear-components/wear-resistant-ceramic-bushings-industrial-machinery',
      'wear-components/ceramic-guide-rails-high-friction-production-lines',
      'pump-valve-components/precision-ceramic-pump-valve-components-corrosive-fluid-control',
      'pump-valve-components/ceramic-valve-components-corrosive-abrasive-fluids',
      'pump-valve-components/precision-ceramic-seal-faces-pumps-rotating-equipment',
      'lapped-seal-faces/ceramic-lapped-seal-faces-rfq',
      'industrial-ceramic-machining/silicon-carbide-ceramic-machining-harsh-environment-applications',
      'industrial-ceramic-machining/silicon-nitride-ceramic-machining-structural-wear-parts',
      'industrial-ceramic-machining/zirconia-ceramic-machining-high-strength-precision-components',
      'micro-hole-machining/ceramic-micro-hole-machining-rfq',
      'semiconductor-equipment/precision-ceramic-nozzles-semiconductor-vacuum-equipment',
      'surface-finish-functional/ceramic-ssd-surface-finish-specify-control-price',
    ],
  },
  {
    id: 'automation-fixtures-metrology',
    href: '/applications/automation-vacuum-ceramic-components/',
    title: 'Automation, fixtures, locating features, and metrology',
    description:
      'Precision fixture plates, locating pins, inspection nests, sensor holders, robotic handling parts, datum surfaces, and repeatable production tooling RFQs.',
    postIds: [
      'automation-fixtures/precision-ceramic-fixture-plate-locating-pins-case-study',
      'wear-components/wear-resistant-ceramic-bushings-industrial-machinery',
      'wear-components/ceramic-guide-rails-high-friction-production-lines',
      'power-electronics/alumina-ceramic-inspection-fixtures-sic-power-module-assembly-case-study',
      'sensor-measurement-devices/precision-ceramic-components-sensors-measurement-devices',
      'semiconductor-equipment/ceramic-end-effectors-wafer-handling-automation',
      'tolerances-gdt/ceramic-tolerance-capability-map-by-feature-process',
      'design-rules-dfm/ceramic-cnc-machining-design-rules-advanced-ceramic-parts',
      'thin-wall-sleeves/ceramic-thin-wall-sleeve-bore-concentricity-rfq',
      'surface-finish-functional/ceramic-ssd-surface-finish-specify-control-price',
      'rfq-preparation/custom-ceramic-cnc-machining-rfq-checklist',
    ],
  },
  {
    id: 'vacuum-optical-lab',
    href: '/applications/automation-vacuum-ceramic-components/',
    title: 'Vacuum, optical, cleanroom, sensor, and laboratory paths',
    description:
      'High-purity and small-batch precision ceramic RFQs where vacuum compatibility, clean packaging, lapped faces, bores, sensor geometry, or optical-adjacent mounting surfaces matter.',
    postIds: [
      'high-purity-cleanroom/precision-ceramic-components-cleanroom-high-purity-manufacturing-systems',
      'vacuum-chucks/ceramic-vacuum-chuck-flatness-rfq',
      'vacuum-electrical-systems/ceramic-feedthrough-insulators-vacuum-electrical-systems',
      'high-voltage-insulation/ceramic-high-voltage-insulators-rfq',
      'sensor-measurement-devices/precision-ceramic-components-sensors-measurement-devices',
      'optical-laser-equipment/machined-ceramic-components-optical-laser-equipment',
      'industrial-ceramic-machining/macor-machinable-glass-ceramic-parts-applications-design-guide',
      'industrial-ceramic-machining/boron-nitride-ceramic-machining-high-temperature-insulation-parts',
      'lapped-seal-faces/ceramic-lapped-seal-faces-rfq',
      'micro-hole-machining/ceramic-micro-hole-machining-rfq',
      'materials-grade-selection/ceramic-material-selection-cnc-machining',
    ],
  },
];

export const getArticleTopicHubsForPost = (postId: string, maxHubs = 2): ArticleTopicHub[] => {
  const priority = [
    'semiconductor-equipment',
    'power-electrical-thermal',
    'wear-fluid-chemical',
    'automation-fixtures-metrology',
    'vacuum-optical-lab',
    'material-selection',
    'precision-features-inspection',
    'industrial-applications',
  ];
  const matchingHubs = articleTopicHubs
    .filter((hub) => hub.postIds.includes(postId))
    .sort((a, b) => priority.indexOf(a.id) - priority.indexOf(b.id));
  const coreHub = articleTopicHubs.find((hub) => hub.id === 'rfq-foundation');
  const orderedHubs = [...matchingHubs.filter((hub) => hub.id !== 'rfq-foundation'), ...(coreHub ? [coreHub] : [])];

  return Array.from(new Map(orderedHubs.map((hub) => [hub.id, hub])).values()).slice(0, maxHubs);
};
