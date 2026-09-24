import {
  AISAsset,
  BusinessProfile,
  PipelineNode,
  StrategyOption,
} from '../types';

export const INITIAL_PROFILE: BusinessProfile = {
  energyType: 'Crude Oil (Arab Heavy)',
  monthlyRequirementBbl: 1800000, // 1.8M Barrels
  destination: 'Port of Rotterdam / Antwerp Hub (ARA)',
  supplierDependencyPercent: 68,
  currentSupplierName: 'Saudi Aramco & ADNOC (Ras Tanura / Das Island via Hormuz)',
  maxAcceptableCostIncreasePercent: 15,
  requiredDeliveryDays: 21,
  currentInventoryDays: 19,
  dailyBurnRateBbl: 60000,
  targetSafetyStockDays: 22,
};

export const PROFILE_PRESETS: { name: string; profile: BusinessProfile }[] = [
  {
    name: 'Antwerp-Rotterdam Industrial Refining Cluster',
    profile: {
      energyType: 'Crude Oil (Arab Heavy)',
      monthlyRequirementBbl: 1800000,
      destination: 'Port of Rotterdam / Antwerp Hub (ARA)',
      supplierDependencyPercent: 68,
      currentSupplierName: 'Saudi Aramco & ADNOC (Ras Tanura)',
      maxAcceptableCostIncreasePercent: 15,
      requiredDeliveryDays: 21,
      currentInventoryDays: 19,
      dailyBurnRateBbl: 60000,
      targetSafetyStockDays: 22,
    },
  },
  {
    name: 'Singapore / Jurong Island Petrochemical Complex',
    profile: {
      energyType: 'Liquefied Natural Gas (LNG)',
      monthlyRequirementBbl: 1450000,
      destination: 'Singapore / Jurong Island Complex',
      supplierDependencyPercent: 74,
      currentSupplierName: 'QatarEnergy (Ras Laffan via Hormuz)',
      maxAcceptableCostIncreasePercent: 18,
      requiredDeliveryDays: 16,
      currentInventoryDays: 14,
      dailyBurnRateBbl: 48000,
      targetSafetyStockDays: 20,
    },
  },
  {
    name: 'Tokyo Bay / Chiba Energy Corridor',
    profile: {
      energyType: 'Low Sulfur Fuel Oil (VLSFO)',
      monthlyRequirementBbl: 2100000,
      destination: 'Tokyo Bay / Chiba Energy Corridor',
      supplierDependencyPercent: 82,
      currentSupplierName: 'Kuwait Petroleum Corp & ADNOC',
      maxAcceptableCostIncreasePercent: 20,
      requiredDeliveryDays: 25,
      currentInventoryDays: 23,
      dailyBurnRateBbl: 70000,
      targetSafetyStockDays: 28,
    },
  },
];

export const AIS_ASSETS: AISAsset[] = [
  {
    id: 'AIS-9831920',
    name: 'VLCC Titan Explorer',
    type: 'VLCC Crude Carrier (330m)',
    cargo: '2.0M Barrels • Cr-Arab Heavy',
    status: 'Rerouted',
    etaDelta: '+16d ETA',
    origin: 'Ras Tanura (East Coast Saudi Arabia)',
    destination: 'Port of Rotterdam Berth 4',
  },
  {
    id: 'AIS-7729104',
    name: 'LNG Al-Wakrah Vector',
    type: 'Q-Max LNG Carrier (345m)',
    cargo: '174k m³ • Ras Laffan - Rotterdam',
    status: 'Safe Corridor',
    etaDelta: 'On Schedule',
    origin: 'Ras Laffan (Qatar)',
    destination: 'Gate Terminal Rotterdam',
  },
  {
    id: 'AIS-4401821',
    name: 'Suezmax Pacific Valour',
    type: 'Suezmax Tanker (274m)',
    cargo: '1.0M Barrels • Basrah Medium',
    status: 'Diverted',
    etaDelta: '+12.4d ETA',
    origin: 'Basrah Terminal',
    destination: 'Antwerp Integrated Hub',
  },
];

export const CANDIDATE_STRATEGIES: StrategyOption[] = [
  {
    id: 'strategy-a',
    title: 'Cape of Good Hope Bypass',
    subtitle: 'Alternative Maritime Route Vector',
    tag: 'Alternative Route',
    isRecommended: false,
    supplyCoveragePercent: 92,
    costImpactDollarsMillions: 6.8,
    costImpactPercent: 18.5,
    deliveryTimeDaysDelta: 14.2,
    riskScore: 58,
    riskLevel: 'Medium',
    summary:
      'Reroutes existing Persian Gulf contracted crude via the southern tip of Africa around the Cape of Good Hope, completely bypassing Hormuz & Bab-el-Mandeb risk zones.',
    routeDescription: 'Persian Gulf / Red Sea Bypass → Cape of Good Hope → Atlantic Corridor → ARA Hub (11,400 nm)',
    supplierMix: '100% Existing Gulf suppliers via off-terminal Yanbu / Fujairah bypass offload',
    transitDeltaText: '+14.2 Days Transit Delta',
    primaryMitigation: 'Long transit fuel burn risk mitigated by speed optimization and Cape bunker stops.',
    pros: [
      'Preserves long-term supplier contractual pricing agreements',
      'No need to execute rapid spot contracts with new regional producers',
      'Proven navigation lane with established deepwater tanker support',
    ],
    cons: [
      '+14.2 days transit delay exceeds the current 19-day inventory window without immediate rationing',
      'High bunker fuel burn adds +$420k-$650k per VLCC voyage',
      'Ties up global tanker fleet capacity, increasing charter spot rates',
    ],
  },
  {
    id: 'strategy-b',
    title: 'North Sea & West Africa Direct',
    subtitle: 'Rapid Supplier Diversification Vector',
    tag: 'Supplier Diversification',
    isRecommended: false,
    supplyCoveragePercent: 78,
    costImpactDollarsMillions: 8.4,
    costImpactPercent: 24.0,
    deliveryTimeDaysDelta: 4.0,
    riskScore: 66,
    riskLevel: 'High',
    summary:
      'Terminates Hormuz-dependent deliveries and immediately executes off-take spot purchases from Equinor (North Sea Johan Sverdrup) and West Africa (Bonny Light / Forcados).',
    routeDescription: 'North Sea & Gulf of Guinea → Short-haul Atlantic direct → Port of Rotterdam',
    supplierMix: '50% Equinor (North Sea) + 50% West Africa Terminals (Nigeria/Angola)',
    transitDeltaText: '+4.0 Days Transit Delta',
    primaryMitigation: 'Short transit distance eliminates chokepoint exposure entirely.',
    pros: [
      'Rapid delivery (only +4 days delta), preserving refinery production run-rates',
      'Bypasses all maritime chokepoints (Hormuz, Suez, Bab-el-Mandeb, Malacca)',
      'High crude quality compatibility with existing Antwerp refining specs',
    ],
    cons: [
      'Heavy spot premium (+24.0% cost increase) during panic procurement surge',
      'Covers only 78% of monthly requirements due to tight North Sea pipeline allocation',
      'High commercial counterparty competition from rival European refiners',
    ],
  },
  {
    id: 'strategy-c',
    title: 'Hybrid Diversification Protocol S-74',
    subtitle: 'Recommended Multi-Vector Optimization Matrix',
    tag: 'Hybrid Strategy',
    isRecommended: true,
    supplyCoveragePercent: 98,
    costImpactDollarsMillions: 3.9,
    costImpactPercent: 11.2,
    deliveryTimeDaysDelta: 4.2,
    riskScore: 34,
    riskLevel: 'Low',
    summary:
      'Optimized multi-vector balance: secures 45% North Sea contracted crude + 55% West Africa terminals via Atlantic corridor, combined with a leased 300k bbl Vopak buffer and forward crack spread hedging.',
    routeDescription: 'Atlantic Corridor bypassing Mediterranean/Hormuz with staggered discharge schedules',
    supplierMix: 'Equinor (North Sea 45%) & West Africa Terminals (55%) + Vopak Eurotank Buffer',
    transitDeltaText: '+4.2 Days Transit Delta',
    primaryMitigation: 'Split origin hedge + Eurotank leased reserve absorbs delivery variances.',
    pros: [
      'Maximum supply coverage (98%) while keeping cost increase at +11.2% (under the 15% ceiling)',
      'Minimal delivery delay (+4.2 days), comfortably inside the 19-day inventory buffer',
      'Lowest composite risk score (34/100) with double-origin redundancy',
      'Locks in sub-$2M freight premiums if off-take is executed within 48h',
    ],
    cons: [
      'Requires dual-terminal logistics coordination at Rotterdam Berth 4 and Vopak Eurotank',
      'Demands proactive financial hedging for bunker volatility (±8.4%)',
    ],
  },
];

export const PIPELINE_NODES: PipelineNode[] = [
  {
    step: '01',
    role: 'SUPPLIER',
    title: 'Equinor (North Sea 45%) & West Africa Terminals (55%)',
    subtitle: 'Split Origin Hedge Active • Verified Counterparties',
    statusBadge: 'Verified',
    metricBadge: 'Split Origin Hedge Active',
    iconName: 'factory',
  },
  {
    step: '02',
    role: 'ROUTE',
    title: 'Atlantic Corridor bypassing Mediterranean/Hormuz',
    subtitle: 'Bypass Hormuz • Transit Delta: +4.2 Days',
    statusBadge: 'Bypass Hormuz',
    metricBadge: '+4.2 Days Transit Delta',
    iconName: 'directions_boat',
  },
  {
    step: '03',
    role: 'PORT',
    title: 'Port of Rotterdam Deepwater Berth 4',
    subtitle: 'Berth Queue • Window: Slot Lock Prioritized',
    statusBadge: 'Berth Queue',
    metricBadge: 'Window: Slot Lock Prioritized',
    iconName: 'anchor',
  },
  {
    step: '04',
    role: 'STORAGE',
    title: 'Vopak Terminal Eurotank (Leased 300k bbl reserve)',
    subtitle: 'Leased Buffer • Capacity Utilized: 84%',
    statusBadge: 'Leased Buffer',
    metricBadge: 'Capacity Utilized: 84%',
    iconName: 'inventory_2',
  },
  {
    step: '05',
    role: 'FACTORY',
    title: 'Antwerp Integrated Refining Complex',
    subtitle: 'Throughput Steady • Refining Run-Rate: 215 kbpd',
    statusBadge: 'Throughput Steady',
    metricBadge: 'Refining Run-Rate: 215 kbpd',
    iconName: 'precision_manufacturing',
  },
  {
    step: '06',
    role: 'CUSTOMER',
    title: 'Tier-1 Industrial Energy Distribution',
    subtitle: 'End Destination • SLA Guarantee 99.8%',
    statusBadge: 'End Destination',
    metricBadge: 'SLA Guarantee 99.8%',
    iconName: 'local_shipping',
  },
];

export const PROTOCOL_STEPS = [
  {
    phase: '01',
    title: 'Monitor Disruption',
    badge: 'Automated 24/7',
    phaseName: 'PHASE 01: SENSORY',
    latency: 'Latency: <1.2s',
    description:
      'Early warning radar detects Hormuz chokepoint degradation and transit slowdowns. Real-time satellite AIS correlates carrier decelerations with kinetic risk indicators.',
  },
  {
    phase: '02',
    title: 'Assess Exposure',
    badge: 'Instantaneous',
    phaseName: 'PHASE 02: BALANCE SHEET',
    latency: '4.8M Barrels At-Risk',
    description:
      'Cross-references enterprise monthly fuel demand against active tanker positions, in-transit barrels, and downstream refinery replenishment inventories.',
  },
  {
    phase: '03',
    title: 'Generate Scenarios',
    badge: 'AI Powered',
    phaseName: 'PHASE 03: SYNTHESIS',
    latency: '1,024 Iterations',
    description:
      'Simulates alternative routing options, Cape bypass times, and spot supply volumes. Computes dynamic bunker burn profiles and secondary port transshipment slots.',
  },
  {
    phase: '04',
    title: 'Compare Alternatives',
    badge: 'Multi-Criteria',
    phaseName: 'PHASE 04: EVALUATION',
    latency: 'Trade-off Matrix: 3 Paths',
    description:
      'Evaluates cost impact, delivery latency, and residual geopolitical exposure across Suez transit queues, West African terminals, and direct Atlantic diversions.',
  },
  {
    phase: '05',
    title: 'Select Strategy',
    badge: 'Executive Sign-off',
    phaseName: 'PHASE 05: GOVERNANCE',
    latency: 'Dual-Key Consensus',
    description:
      'Procurement and risk leadership lock in optimal hybrid diversification plan, executing real-time cryptographic authorization with commercial brokers.',
  },
  {
    phase: '06',
    title: 'Create Contingency Plan',
    badge: 'Automated Dispatch',
    phaseName: 'PHASE 06: LOGISTICS',
    latency: 'Electronic Bill of Lading',
    description:
      'Compiles full supplier-to-terminal itinerary with binding SLA buffers, re-chartering manifests, maritime insurance endorsements, and port priority berths.',
  },
  {
    phase: '07',
    title: 'Monitor Continuously',
    badge: 'Live Feedback Loop',
    phaseName: 'PHASE 07: SURVEILLANCE',
    latency: 'Constant Re-evaluation',
    description:
      'Tracks real-time tanker positions and automatically adjusts for weather or port congestion, feeding anomaly telematics back into global demand engines.',
  },
];
