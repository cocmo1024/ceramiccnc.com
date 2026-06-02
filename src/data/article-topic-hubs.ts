export interface ArticleTopicHub {
  id: string;
  title: string;
  description: string;
  postIds: string[];
}

export const articleTopicHubs: ArticleTopicHub[] = [
  {
    id: 'rfq-foundation',
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
    title: 'Semiconductor equipment ceramic components',
    description:
      'Wafer handling, vacuum, process chamber, plasma, and AlN thermal-management ceramic RFQs where cleanliness, flatness, edge quality, and inspection evidence matter.',
    postIds: [
      'semiconductor-equipment/ai-semiconductor-equipment-ceramic-parts',
      'semiconductor-equipment/precision-ceramic-components-semiconductor-equipment',
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
    title: 'Material-specific ceramic machining guides',
    description:
      'Compare common RFQ routes for alumina, zirconia, silicon nitride, silicon carbide, AlN, Macor, and boron nitride before locking a drawing.',
    postIds: [
      'materials-grade-selection/ceramic-material-selection-cnc-machining',
      'industrial-ceramic-machining/precision-machined-alumina-ceramic-parts-industrial-applications',
      'industrial-ceramic-machining/zirconia-ceramic-machining-high-strength-precision-components',
      'industrial-ceramic-machining/silicon-nitride-ceramic-machining-structural-wear-parts',
      'industrial-ceramic-machining/silicon-carbide-ceramic-machining-harsh-environment-applications',
      'industrial-ceramic-machining/aluminum-nitride-ceramic-machining-thermal-management-components',
      'industrial-ceramic-machining/macor-machinable-glass-ceramic-parts-applications-design-guide',
      'industrial-ceramic-machining/boron-nitride-ceramic-machining-high-temperature-insulation-parts',
    ],
  },
  {
    id: 'precision-features-inspection',
    title: 'Precision features, surfaces, and inspection evidence',
    description:
      'Use this path for drawings controlled by micro-holes, thin walls, lapped faces, flatness, edge chips, vacuum features, creepage paths, or measurable acceptance gates.',
    postIds: [
      'design-rules-dfm/ceramic-dfm-design-rules',
      'design-rules-dfm/ceramic-cnc-machining-design-rules-advanced-ceramic-parts',
      'tolerances-gdt/ceramic-tolerance-capability-map-by-feature-process',
      'surface-finish-functional/ceramic-ssd-surface-finish-specify-control-price',
      'sensor-measurement-devices/precision-ceramic-components-sensors-measurement-devices',
      'pump-valve-components/precision-ceramic-pump-valve-components-corrosive-fluid-control',
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
    title: 'Industrial application and procurement paths',
    description:
      'Application-focused RFQ paths for wear parts, power electronics, vacuum hardware, sealing faces, high-voltage insulation, and repeatable industrial ceramic procurement.',
    postIds: [
      'industrial-ceramic-machining/industrial-ceramic-machining-wear-resistant-components',
      'sensor-measurement-devices/precision-ceramic-components-sensors-measurement-devices',
      'pump-valve-components/precision-ceramic-pump-valve-components-corrosive-fluid-control',
      'high-purity-cleanroom/precision-ceramic-components-cleanroom-high-purity-manufacturing-systems',
      'power-electronics/ai-data-center-power-electronics-ceramic-machining',
      'lapped-seal-faces/ceramic-lapped-seal-faces-rfq',
      'vacuum-chucks/ceramic-vacuum-chuck-flatness-rfq',
      'high-voltage-insulation/ceramic-high-voltage-insulators-rfq',
      'micro-hole-machining/ceramic-micro-hole-machining-rfq',
      'thin-wall-sleeves/ceramic-thin-wall-sleeve-bore-concentricity-rfq',
      'rfq-preparation/custom-ceramic-cnc-machining-rfq-checklist',
    ],
  },
];

export const getArticleTopicHubsForPost = (postId: string, maxHubs = 2): ArticleTopicHub[] => {
  const matchingHubs = articleTopicHubs.filter((hub) => hub.postIds.includes(postId));
  const coreHub = articleTopicHubs.find((hub) => hub.id === 'rfq-foundation');
  const orderedHubs = [...matchingHubs.filter((hub) => hub.id !== 'rfq-foundation'), ...(coreHub ? [coreHub] : [])];

  return Array.from(new Map(orderedHubs.map((hub) => [hub.id, hub])).values()).slice(0, maxHubs);
};
