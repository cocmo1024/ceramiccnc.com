export interface ApplicationHubDecision {
  requirement: string;
  whyItMatters: string;
  rfqEvidence: string;
}

export interface ApplicationHubItem {
  title: string;
  description: string;
  icon?: string;
}

export interface ApplicationHub {
  slug: string;
  navTitle: string;
  title: string;
  metaTitle: string;
  description: string;
  tagline: string;
  summary: string;
  image: string;
  imageAlt: string;
  overview: string[];
  componentFamilies: ApplicationHubItem[];
  decisions: ApplicationHubDecision[];
  materialPaths: ApplicationHubItem[];
  rfqInputs: string[];
  guidePostIds: string[];
  faqs: Array<{ title: string; description: string }>;
}

export const applicationHubs: ApplicationHub[] = [
  {
    slug: 'semiconductor-ceramic-components',
    navTitle: 'Semiconductor ceramics',
    title: 'Precision ceramic components for semiconductor equipment',
    metaTitle: 'Semiconductor Ceramic Components: Machining and RFQ',
    description:
      'RFQ hub for semiconductor ceramic components: wafer handling, vacuum chucks, process rings, plasma insulators, nozzles, AlN plates, cleaning, and inspection.',
    tagline: 'Semiconductor equipment',
    summary:
      'Use this hub to translate a semiconductor-tool ceramic requirement into material, machining, cleanliness, and acceptance decisions before quotation.',
    image: '~/assets/images/ceramic/application-1.webp',
    imageAlt:
      'Precision semiconductor ceramic components including wafer handling parts, vacuum plates, process rings, and insulating hardware',
    overview: [
      'Semiconductor ceramic components are rarely purchased on material name alone. The drawing usually combines wafer-contact geometry, vacuum or gas features, plasma-adjacent edges, thermal interfaces, electrical isolation, or clean assembly requirements. Each functional zone changes the machining and inspection route.',
      'A useful review begins by identifying where the part touches a wafer, seals against another component, controls height or flatness, carries heat, provides insulation, or faces process chemistry. Those zones should drive the datum plan, grinding or lapping scope, edge criteria, cleaning requirement, and evidence package.',
      'This page organizes the existing semiconductor engineering guides by component family. It does not promise that every geometry or tolerance is feasible; final scope depends on the drawing, ceramic grade, blank state, quantity, and agreed acceptance method.',
    ],
    componentFamilies: [
      {
        title: 'Wafer handling and robot interfaces',
        description:
          'End effectors, lift pins, support fingers, contact pads, and alignment features controlled by flatness, contact height, edge chips, particles, and robot datums.',
        icon: 'tabler:affiliate',
      },
      {
        title: 'Vacuum chucks and support plates',
        description:
          'Dense or porous ceramic plates, groove fields, micro-holes, mounting datums, and working faces reviewed for flatness, suction behavior, cleaning, and protected handling.',
        icon: 'tabler:circle-dot',
      },
      {
        title: 'Process rings and chamber hardware',
        description:
          'SiC or alumina rings, lapped annular bands, IDs, ODs, grooves, holes, and process-side edges where geometry, chemistry, and particle control meet.',
        icon: 'tabler:circle-half-2',
      },
      {
        title: 'Plasma and electrical insulators',
        description:
          'Alumina rings, sleeves, spacers, and AlN thermal insulators with creepage paths, bore fits, lapped faces, and plasma-sensitive edge zones.',
        icon: 'tabler:bolt',
      },
      {
        title: 'Nozzles, gas plates, and flow features',
        description:
          'Micro-bores, orifices, hole arrays, slots, and vacuum passages specified by diameter, depth, taper, breakout, position, cleaning, and inspection access.',
        icon: 'tabler:focus-2',
      },
      {
        title: 'Thermal and clean assembly parts',
        description:
          'AlN plates, heat-spreader interfaces, heater-adjacent parts, clean fixtures, and sensor supports controlled by flatness, thickness, Ra, contamination, and packaging.',
        icon: 'tabler:temperature',
      },
    ],
    decisions: [
      {
        requirement: 'Wafer or process contact zones',
        whyItMatters:
          'Contact height, particles, edge chips, and local finish can affect handling yield or process cleanliness.',
        rfqEvidence:
          'Mark contact pads, protected edges, allowable chip zones, finish, and optical acceptance on the drawing.',
      },
      {
        requirement: 'Flatness and datum strategy',
        whyItMatters:
          'Large plates and rings can measure differently when free-state, supported, or clamped in the tool.',
        rfqEvidence:
          'State support condition, datum faces, measurement map, temperature, and any assembly preload assumptions.',
      },
      {
        requirement: 'Vacuum and micro-features',
        whyItMatters:
          'Hole taper, breakout, blocked passages, groove edges, and cleaning residue can change functional behavior.',
        rfqEvidence:
          'Provide hole geometry, flow or vacuum boundary, cleanliness target, and whether functional testing is required.',
      },
      {
        requirement: 'Cleaning and packaging',
        whyItMatters:
          'A dimensionally acceptable ceramic part can still fail incoming inspection because of particles, residue, or transit chips.',
        rfqEvidence:
          'Define final cleaning, handling, bagging, contact protection, labeling, and lot traceability expectations.',
      },
    ],
    materialPaths: [
      {
        title: 'Alumina (Al2O3)',
        description:
          'Common for electrical insulation, chamber hardware, spacers, rings, feedthrough-adjacent parts, and cost-sensitive clean components. State purity and grade.',
      },
      {
        title: 'Silicon carbide (SiC)',
        description:
          'Considered for stiff, wear-resistant, chemically stable wafer-handling and process-side hardware. Blank route and finished feature risk need review.',
      },
      {
        title: 'Aluminum nitride (AlN)',
        description:
          'Used when electrical isolation and thermal transfer must coexist. Thermal faces, thickness, edge condition, and moisture-sensitive handling require clear notes.',
      },
      {
        title: 'Other technical ceramics',
        description:
          'Zirconia, silicon nitride, Macor, BN, porous ceramics, and customer-specified grades may fit specific fixtures, prototypes, thermal, vacuum, or flow functions.',
      },
    ],
    rfqInputs: [
      '2D drawing plus STEP or native CAD, with revision and scale confirmed',
      'Ceramic material, grade, purity, blank source, and fired or green state',
      'Wafer-contact, process-facing, sealing, thermal, and electrical functional zones',
      'Flatness, thickness, bore, hole, groove, edge, and surface-finish requirements by zone',
      'Cleaning, particle, vacuum, flow, outgassing, and protected-packaging requirements',
      'Prototype and production quantity, target timing, inspection reports, and qualification boundary',
    ],
    guidePostIds: [
      'semiconductor-equipment/precision-ceramic-components-semiconductor-equipment',
      'semiconductor-equipment/silicon-carbide-wafer-handling-components-semiconductor-manufacturing',
      'semiconductor-equipment/ceramic-end-effectors-wafer-handling-automation',
      'semiconductor-equipment/machined-ceramic-vacuum-chuck-components-semiconductor-tools',
      'semiconductor-equipment/precision-ceramic-rings-semiconductor-process-chambers',
      'semiconductor-equipment/ceramic-insulators-plasma-etching-deposition-equipment',
      'semiconductor-equipment/precision-ceramic-nozzles-semiconductor-vacuum-equipment',
      'semiconductor-equipment/aluminum-nitride-ceramic-parts-semiconductor-thermal-management',
      'semiconductor-equipment/alumina-ceramic-parts-semiconductor-processing-equipment',
      'high-purity-cleanroom/precision-ceramic-components-cleanroom-high-purity-manufacturing-systems',
    ],
    faqs: [
      {
        title: 'Which ceramic materials are commonly reviewed for semiconductor equipment parts?',
        description:
          'Alumina, silicon carbide, aluminum nitride, silicon nitride, zirconia, Macor, BN, and porous ceramics may be reviewed. The correct route depends on electrical, thermal, chemical, stiffness, wear, cleanliness, blank, and feature requirements.',
      },
      {
        title: 'Can a semiconductor ceramic part be quoted from a STEP file alone?',
        description:
          'A STEP file helps geometry review, but a useful quotation also needs material grade, quantity, functional datums, critical surfaces, edge criteria, cleaning, packaging, inspection method, and application context.',
      },
      {
        title: 'How should flatness be specified for a ceramic chuck or process plate?',
        description:
          'Identify the functional face, datum or support condition, free-state or clamped measurement condition, temperature, mapping method, excluded edge band, and required report. Feasibility is confirmed after drawing and blank review.',
      },
    ],
  },
  {
    slug: 'electrical-thermal-ceramic-components',
    navTitle: 'Electrical and thermal ceramics',
    title: 'Electrical insulation and thermal ceramic components',
    metaTitle: 'Electrical and Thermal Ceramic Components: RFQ Guide',
    description:
      'RFQ hub for alumina insulators, AlN heat spreaders, ceramic feedthrough sleeves, high-voltage spacers, thermal plates, creepage, flatness, finish, and inspection.',
    tagline: 'Electrical and thermal systems',
    summary:
      'Connect electrical isolation, thermal transfer, mechanical assembly, and inspectable ceramic geometry before fixing material or tolerance.',
    image: '~/assets/images/ceramic/application-4.webp',
    imageAlt:
      'Alumina electrical insulators and aluminum nitride thermal ceramic components with precision holes, bores, and flat faces',
    overview: [
      'Electrical and thermal ceramic parts often carry conflicting requirements. A heat spreader may need high thermal conductivity, dielectric isolation, tight thickness, and a flat interface. A feedthrough insulator may need a precision bore, sealing shoulder, creepage path, clean surface, and controlled assembly stress.',
      'The RFQ should separate electrical, thermal, mechanical, and cosmetic zones. This prevents a blanket tolerance or finish note from adding cost to nonfunctional surfaces while leaving the critical interface ambiguous.',
      'Material selection should follow the operating environment and failure mode. Alumina, AlN, silicon nitride, Macor, and other ceramics have different blank availability, machining response, edge sensitivity, thermal behavior, and inspection needs.',
    ],
    componentFamilies: [
      {
        title: 'Alumina standoffs and spacers',
        description:
          'Insulating supports, sleeves, plates, and housings controlled by bore fit, mounting faces, edge radius, creepage, clearance, and cleanliness.',
        icon: 'tabler:bolt',
      },
      {
        title: 'Feedthrough and vacuum insulators',
        description:
          'Ceramic bodies and sleeves where conductor fit, sealing lands, vacuum interfaces, electrical spacing, cleaning, and assembly stress interact.',
        icon: 'tabler:plug-connected',
      },
      {
        title: 'AlN heat spreaders and plates',
        description:
          'Thermal-interface plates and insulating carriers reviewed for grade, thickness, flatness, Ra, holes, edge quality, cleaning, and protected packaging.',
        icon: 'tabler:temperature',
      },
      {
        title: 'High-voltage ceramic geometry',
        description:
          'Ribbed insulators, creepage paths, clearances, slots, lead-ins, and mounting transitions that need realistic radii and measurable chip criteria.',
        icon: 'tabler:wave-sine',
      },
      {
        title: 'Power-module fixtures',
        description:
          'Alumina and other ceramic nests, support plates, locating pins, and inspection fixtures used around SiC or GaN module assembly and test.',
        icon: 'tabler:cpu-2',
      },
      {
        title: 'RF and sensor-adjacent parts',
        description:
          'Insulating plates, spacers, windows, mounts, and sensor supports controlled by dielectric spacing, flatness, position, clean assembly, and documentation.',
        icon: 'tabler:antenna-bars-5',
      },
    ],
    decisions: [
      {
        requirement: 'Electrical isolation path',
        whyItMatters:
          'Creepage, clearance, contamination, chips, and sharp transitions can matter as much as the bulk dielectric property.',
        rfqEvidence:
          'Mark voltage context, conductive neighbors, creepage path, clearance zones, edge radii, and cleaning requirement.',
      },
      {
        requirement: 'Thermal interface',
        whyItMatters:
          'Flatness, thickness, Ra, mounting pressure, and mating materials affect contact more directly than a generic polished-surface note.',
        rfqEvidence:
          'Identify thermal faces, datum scheme, interface material, flatness condition, thickness map, and required measurements.',
      },
      {
        requirement: 'Bores and assembly fits',
        whyItMatters:
          'Press fits, conductor fits, and rigid mounting can put tensile stress into brittle ceramic edges and shoulders.',
        rfqEvidence:
          'Provide mating dimensions, fit intent, assembly method, lead-ins, torque or preload context, and inspection basis.',
      },
      {
        requirement: 'Surface and cleanliness',
        whyItMatters:
          'Residue, handling damage, or ambiguous finish can affect insulation, thermal contact, vacuum use, and customer assembly yield.',
        rfqEvidence:
          'Define functional Ra, visual criteria, cleaning, bagging, contact protection, and certificate or report needs.',
      },
    ],
    materialPaths: [
      {
        title: 'Alumina (Al2O3)',
        description:
          'A common insulation baseline for spacers, sleeves, plates, standoffs, and feedthrough-adjacent parts. Purity, density, and finished faces should be stated.',
      },
      {
        title: 'Aluminum nitride (AlN)',
        description:
          'Chosen where heat transfer and electrical isolation must coexist. Grade, blank route, thermal faces, edge condition, and handling need explicit review.',
      },
      {
        title: 'Silicon nitride and other structural ceramics',
        description:
          'May fit mechanically loaded, thermally cycled, or fixture applications. Electrical and thermal assumptions must be tied to the exact grade.',
      },
      {
        title: 'Macor and machinable ceramics',
        description:
          'Useful for prototypes, laboratory hardware, and low-volume insulating parts when ordinary machining and design iteration matter more than maximum service performance.',
      },
    ],
    rfqInputs: [
      'Drawing and CAD with conductor, thermal, sealing, and mounting interfaces identified',
      'Material grade, purity, thermal or dielectric target, and available blank form',
      'Voltage, creepage, clearance, temperature, thermal cycle, and atmosphere context',
      'Critical flatness, thickness, bore fit, position, edge radius, and surface-finish zones',
      'Mating materials, assembly method, preload or torque context, and allowable contact stress',
      'Cleaning, packaging, inspection report, material certificate, and qualification requirements',
    ],
    guidePostIds: [
      'electrical-insulation/alumina-ceramic-insulators-electrical-electronic-applications',
      'rf-microwave/machined-ceramic-plates-rf-microwave-applications',
      'power-electronics/aluminum-nitride-heat-spreaders-power-electronics',
      'vacuum-electrical-systems/ceramic-feedthrough-insulators-vacuum-electrical-systems',
      'high-voltage-insulation/ceramic-high-voltage-insulators-rfq',
      'power-electronics/ai-data-center-power-electronics-ceramic-machining',
      'power-electronics/alumina-ceramic-inspection-fixtures-sic-power-module-assembly-case-study',
      'semiconductor-equipment/aluminum-nitride-ceramic-parts-semiconductor-thermal-management',
      'industrial-ceramic-machining/aluminum-nitride-ceramic-machining-thermal-management-components',
      'industrial-ceramic-machining/precision-machined-alumina-ceramic-parts-industrial-applications',
      'materials-grade-selection/ceramic-material-selection-cnc-machining',
    ],
    faqs: [
      {
        title: 'When should AlN be reviewed instead of alumina?',
        description:
          'AlN is commonly considered when thermal transfer and electrical isolation must coexist. Alumina may remain the more practical choice when insulation, wear, availability, and cost dominate. The exact grade, geometry, and interface requirements need review.',
      },
      {
        title: 'Can a ceramic insulator be quoted from voltage alone?',
        description:
          'No. Voltage context is only one input. Creepage, clearance, surface condition, contamination, conductor geometry, mounting stress, temperature, material grade, and inspection criteria also affect the part and quotation.',
      },
      {
        title: 'Which surfaces need tight flatness on an AlN heat spreader?',
        description:
          'Usually only the thermal-contact and datum interfaces need the tightest control. The drawing should identify those faces, the support condition, thickness relationship, Ra target, and measurement method before feasibility is confirmed.',
      },
    ],
  },
  {
    slug: 'wear-fluid-control-ceramic-components',
    navTitle: 'Wear and fluid-control ceramics',
    title: 'Wear, pump, valve, and fluid-control ceramic components',
    metaTitle: 'Wear and Fluid-Control Ceramic Components: RFQ Guide',
    description:
      'Machining hub for ceramic bushings, seal faces, valve seats, balls, plungers, sleeves, guide rails, nozzles, SiC trim, corrosive media, wear, and inspection.',
    tagline: 'Wear and fluid systems',
    summary:
      'Map wear mode, media, mating geometry, running surfaces, edge risks, and acceptance evidence before sourcing ceramic pump, valve, or machinery components.',
    image: '~/assets/images/ceramic/application-5.webp',
    imageAlt: 'Wear-resistant ceramic bushings, seal rings, valve components, and silicon carbide fluid-control parts',
    overview: [
      'Wear and fluid-control ceramic parts work at interfaces: a bushing runs against a shaft, a seal face runs against a mating ring, a valve seat closes against a ball or plug, and a nozzle controls abrasive or corrosive flow. Material hardness alone does not define whether the component will work.',
      'The drawing and RFQ should connect the dominant wear or leakage mechanism to the actual geometry. Roundness, concentricity, flatness, Ra, edge integrity, groove shape, port transitions, mating material, and media can all control service behavior and manufacturing cost.',
      'This hub separates component families so buyers can move from a failed or wearing interface to the relevant machining, material, inspection, cleaning, and packaging questions.',
    ],
    componentFamilies: [
      {
        title: 'Bushings, sleeves, and liners',
        description:
          'ID/OD wear parts controlled by bore roundness, straightness, wall stability, alignment, running-surface finish, lead-ins, and counterface behavior.',
        icon: 'tabler:cylinder',
      },
      {
        title: 'Mechanical seal faces',
        description:
          'SiC, alumina, or zirconia rings and seats with lapped bands, flatness, Ra, fit diameters, groove details, edge chips, paired-face context, and protected packaging.',
        icon: 'tabler:circles-relation',
      },
      {
        title: 'Valve seats, balls, plugs, and trim',
        description:
          'Shutoff and throttling components reviewed around contact geometry, sphericity or roundness, lapped zones, port edges, particle exposure, and leakage boundary.',
        icon: 'tabler:adjustments-horizontal',
      },
      {
        title: 'Plungers and metering components',
        description:
          'Sliding ceramic plungers, sleeves, inserts, and dosing parts where OD/ID fit, coaxiality, Ra, fluid cleanliness, and repeatable motion matter.',
        icon: 'tabler:arrows-vertical',
      },
      {
        title: 'Guide rails and wear strips',
        description:
          'Long contact parts with straightness, flatness, slots, mounting holes, edge quality, replacement fit, and packaging risks beyond bulk wear resistance.',
        icon: 'tabler:ruler-2',
      },
      {
        title: 'Nozzles, orifices, and flow inserts',
        description:
          'Abrasive or corrosive flow components controlled by bore geometry, taper, breakout, concentricity, port transitions, cleaning, and optical or flow acceptance.',
        icon: 'tabler:focus-2',
      },
    ],
    decisions: [
      {
        requirement: 'Wear and media definition',
        whyItMatters:
          'Sliding, abrasion, erosion, impact, cavitation, thermal cycling, and chemical attack point to different material and finish decisions.',
        rfqEvidence:
          'State media chemistry, particle size or solids, pressure, speed, temperature, lubrication, cycle, and observed failure mode.',
      },
      {
        requirement: 'Mating component and fit',
        whyItMatters:
          'A ceramic part cannot be reviewed in isolation when contact stress, clearance, leakage, or counterface wear controls function.',
        rfqEvidence:
          'Provide mating material, dimensions, fit class or clearance, assembly method, contact band, and replacement constraints.',
      },
      {
        requirement: 'Functional surface geometry',
        whyItMatters:
          'Roundness, flatness, concentricity, straightness, and Ra are valuable only when tied to the running, guiding, or sealing surface.',
        rfqEvidence:
          'Mark functional zones, datums, lapped bands, running surfaces, port edges, and the intended measurement method.',
      },
      {
        requirement: 'Edge, cleaning, and packaging',
        whyItMatters:
          'Chips at seal lands, bore lead-ins, or port exits can defeat function; residue and transit contact can damage finished surfaces.',
        rfqEvidence:
          'Define edge breaks, allowable chip zones, cleaning, surface protection, individual separation, and inspection evidence.',
      },
    ],
    materialPaths: [
      {
        title: 'Silicon carbide (SiC)',
        description:
          'Often reviewed for seal faces, valve trim, pump sleeves, nozzles, and abrasive or corrosive interfaces. Exact grade, blank route, lapping, and edge risk matter.',
      },
      {
        title: 'Alumina (Al2O3)',
        description:
          'A practical baseline for bushings, liners, guides, seats, and general wear components. Purity, density, impact risk, and finished surfaces should be defined.',
      },
      {
        title: 'Zirconia (ZrO2)',
        description:
          'Considered for balls, plungers, sleeves, pins, and impact-sensitive wear parts where toughness and a smooth finish are useful.',
      },
      {
        title: 'Silicon nitride (Si3N4)',
        description:
          'May fit rollers, shafts, bushings, guides, and thermally cycled mechanical parts where strength, low density, and thermal shock resistance matter.',
      },
    ],
    rfqInputs: [
      'Drawing and CAD with running, guiding, sealing, throttling, and fluid-facing surfaces marked',
      'Material grade or operating conditions needed for material review',
      'Media chemistry, solids, pressure, temperature, speed, cycle, lubrication, and cleaning method',
      'Mating component material, fit, clearance, contact band, leakage boundary, and assembly method',
      'Roundness, flatness, concentricity, straightness, Ra, edge, and groove requirements by function',
      'Quantity, target timing, inspection reports, functional tests, cleaning, and protected packaging',
    ],
    guidePostIds: [
      'wear-components/wear-resistant-ceramic-bushings-industrial-machinery',
      'wear-components/ceramic-guide-rails-high-friction-production-lines',
      'pump-valve-components/precision-ceramic-seal-faces-pumps-rotating-equipment',
      'pump-valve-components/ceramic-valve-components-corrosive-abrasive-fluids',
      'pump-valve-components/precision-ceramic-pump-valve-components-corrosive-fluid-control',
      'lapped-seal-faces/ceramic-lapped-seal-faces-rfq',
      'industrial-ceramic-machining/industrial-ceramic-machining-wear-resistant-components',
      'industrial-ceramic-machining/silicon-carbide-ceramic-machining-harsh-environment-applications',
      'industrial-ceramic-machining/zirconia-ceramic-machining-high-strength-precision-components',
      'industrial-ceramic-machining/silicon-nitride-ceramic-machining-structural-wear-parts',
      'micro-hole-machining/ceramic-micro-hole-machining-rfq',
    ],
    faqs: [
      {
        title: 'Which ceramic is best for abrasive and corrosive fluid service?',
        description:
          'There is no universal best material. SiC, alumina, zirconia, and other ceramics have different wear, corrosion, toughness, blank, finish, and cost tradeoffs. Media, particles, temperature, pressure, geometry, and mating surfaces must be reviewed together.',
      },
      {
        title: 'What information is needed to quote a ceramic seal face or valve seat?',
        description:
          'Provide the drawing, material, mating face, lapped or sealing zone, flatness, Ra, fit dimensions, media, pressure, temperature, edge criteria, quantity, inspection method, and protected-packaging requirement.',
      },
      {
        title: 'Should every surface on a ceramic wear part have a tight finish?',
        description:
          'Usually not. Tight finish should be assigned to running, guiding, sealing, or cleanability-critical zones. Applying the same Ra to nonfunctional relief and exterior surfaces can add unnecessary grinding and inspection cost.',
      },
    ],
  },
  {
    slug: 'automation-vacuum-ceramic-components',
    navTitle: 'Automation and vacuum ceramics',
    title: 'Precision ceramic components for automation, optics, and vacuum',
    metaTitle: 'Automation, Optical & Vacuum Ceramic Components: RFQ',
    description:
      'RFQ hub for ceramic fixtures, locating pins, optical mounts, sensor parts, metrology references, vacuum insulators, Macor prototypes, datums, and inspection.',
    tagline: 'Automation, optics, vacuum, and instruments',
    summary:
      'Organize repeatability, optical references, vacuum, sensor, clean assembly, and small-batch prototype requirements into a measurable ceramic RFQ.',
    image: '~/assets/images/ceramic/application-9.webp',
    imageAlt:
      'Precision ceramic fixture plates, locating pins, sensor supports, and vacuum instrument components on an inspection surface',
    overview: [
      'Automation, optical, vacuum, and instrument ceramic parts are often low-volume but highly interface-driven. A fixture plate may control repeatable location; an optical mount may connect a mechanical datum to an optical axis; a sensor sleeve may control a bore and electrical isolation; a vacuum component may combine sealing, cleanliness, and high-voltage spacing; a Macor prototype may validate geometry before a production ceramic is selected.',
      'The machining review should start from the functional coordinate system. Datums, locating features, contact pads, bores, sealing faces, sensor axes, and protected edges need a clear relationship to the assembly. Precision without an inspection plan is difficult to quote and difficult to accept.',
      'This hub connects fixture, metrology, optical, sensor, vacuum, cleanroom, and prototype guides without treating these parts as a generic miscellaneous category.',
    ],
    componentFamilies: [
      {
        title: 'Fixture plates and locating pins',
        description:
          'Alumina plates, zirconia pins, nests, supports, and tool interfaces controlled by datums, bore position, contact height, edge quality, and repeatability evidence.',
        icon: 'tabler:layout-grid',
      },
      {
        title: 'Metrology and reference components',
        description:
          'Reference plates, alignment sleeves, datum pads, spacers, and inspection nests where stable geometry and a traceable measurement method are the product.',
        icon: 'tabler:ruler-measure',
      },
      {
        title: 'Sensor and measurement parts',
        description:
          'Sleeves, diaphragms, spacers, pins, flow cells, insulating bodies, and holders controlled by bore alignment, thin features, clean surfaces, and assembly fit.',
        icon: 'tabler:gauge',
      },
      {
        title: 'Vacuum and feedthrough hardware',
        description:
          'Insulating sleeves, sealing interfaces, spacers, and feedthrough-adjacent parts where bore fit, creepage, flatness, cleaning, and leak boundaries interact.',
        icon: 'tabler:vacuum-cleaner',
      },
      {
        title: 'Cleanroom handling components',
        description:
          'Guides, support parts, fixtures, and process-adjacent hardware reviewed for particle-sensitive edges, cleaning, material traceability, and protected packaging.',
        icon: 'tabler:sparkles',
      },
      {
        title: 'Optical, laser, and prototype hardware',
        description:
          'Mounts, spacers, apertures, alignment fixtures, threaded Macor supports, and laboratory parts controlled by optical references, clean handling, and low-distortion assembly.',
        icon: 'tabler:tool',
      },
    ],
    decisions: [
      {
        requirement: 'Functional coordinate system',
        whyItMatters:
          'Bore position, locating pins, contact pads, and sensor axes only make sense relative to stable, inspectable datums.',
        rfqEvidence:
          'Identify primary, secondary, and tertiary datums plus the features that set assembly location or repeatability.',
      },
      {
        requirement: 'Contact and mounting conditions',
        whyItMatters:
          'Point loads, press fits, fastener preload, unsupported spans, and thermal mismatch can crack otherwise acceptable ceramic geometry.',
        rfqEvidence:
          'Provide mating materials, support areas, clamping or torque context, fit intent, and allowed edge relief.',
      },
      {
        requirement: 'Vacuum and cleanliness boundary',
        whyItMatters:
          'Sealing faces, surface condition, trapped volumes, residue, and packaging can control vacuum or clean assembly performance.',
        rfqEvidence:
          'Mark sealing surfaces, leak boundary, cleaning or bake context, particle requirement, bagging, and functional test scope.',
      },
      {
        requirement: 'Inspection and repeat orders',
        whyItMatters:
          'Prototype acceptance should establish the measurement and packaging method that future lots can repeat.',
        rfqEvidence:
          'Define CMM, optical, flatness, profile, Ra, key-dimension report, first-article, and lot documentation needs.',
      },
    ],
    materialPaths: [
      {
        title: 'Alumina (Al2O3)',
        description:
          'Common for stable fixtures, insulation, vacuum-adjacent hardware, sensor bodies, spacers, and clean components. Grade and finished interfaces need definition.',
      },
      {
        title: 'Zirconia (ZrO2)',
        description:
          'Useful for locating pins, plungers, sleeves, and small mechanical interfaces where toughness, wear, and finish matter.',
      },
      {
        title: 'Silicon nitride and silicon carbide',
        description:
          'Reviewed for stiff, wear-resistant, thermally cycled, or clean handling components. Material-specific grinding and blank risks should be addressed early.',
      },
      {
        title: 'Macor and other machinable ceramics',
        description:
          'Fit rapid prototypes, laboratory fixtures, insulating mounts, threaded features, and low-volume instrument hardware within grade-specific service limits.',
      },
    ],
    rfqInputs: [
      'Drawing and CAD with datums, locating features, sensor axes, contact pads, and sealing faces marked',
      'Material grade, blank source, operating environment, and prototype-to-production intent',
      'Mating parts, fit, clamp, preload, thermal cycle, vacuum, electrical, and cleanliness context',
      'Critical position, flatness, bore, coaxiality, thickness, Ra, edge, and thin-feature requirements',
      'Inspection method, first-article report, repeat-order controls, traceability, and qualification boundary',
      'Quantity, target timing, cleaning, individual protection, bagging, labeling, and shipping orientation',
    ],
    guidePostIds: [
      'automation-fixtures/precision-ceramic-fixture-plate-locating-pins-case-study',
      'optical-laser-equipment/machined-ceramic-components-optical-laser-equipment',
      'sensor-measurement-devices/precision-ceramic-components-sensors-measurement-devices',
      'vacuum-electrical-systems/ceramic-feedthrough-insulators-vacuum-electrical-systems',
      'high-purity-cleanroom/precision-ceramic-components-cleanroom-high-purity-manufacturing-systems',
      'thin-wall-sleeves/ceramic-thin-wall-sleeve-bore-concentricity-rfq',
      'vacuum-chucks/ceramic-vacuum-chuck-flatness-rfq',
      'industrial-ceramic-machining/macor-machinable-glass-ceramic-parts-applications-design-guide',
      'power-electronics/alumina-ceramic-inspection-fixtures-sic-power-module-assembly-case-study',
      'tolerances-gdt/ceramic-tolerance-capability-map-by-feature-process',
      'surface-finish-functional/ceramic-ssd-surface-finish-specify-control-price',
    ],
    faqs: [
      {
        title: 'What makes a ceramic fixture RFQ quote-ready?',
        description:
          'A quote-ready fixture package identifies the material, datums, locating features, contact pads, mating parts, loads, critical dimensions, edge criteria, quantity, inspection method, and packaging needed to preserve the reference geometry.',
      },
      {
        title: 'When is Macor useful for a ceramic prototype?',
        description:
          'Macor can support rapid conventional machining, threaded features, laboratory fixtures, and geometry validation in suitable environments. It should not be assumed to match alumina, SiC, Si3N4, or AlN service performance.',
      },
      {
        title: 'How should precision ceramic parts be controlled for repeat orders?',
        description:
          'Keep the material grade, blank route, datum scheme, machining and finishing assumptions, inspection method, drawing revision, cleaning, and packaging stable. Record approved changes instead of relying on nominal CAD alone.',
      },
    ],
  },
];

export const getApplicationHub = (slug: string): ApplicationHub | undefined =>
  applicationHubs.find((hub) => hub.slug === slug);
