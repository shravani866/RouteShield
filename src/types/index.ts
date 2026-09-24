export type AppView =
  | 'dashboard'
  | 'profile'
  | 'analysis'
  | 'comparison'
  | 'plan'
  | 'simulator'
  | 'decision'
  | 'architecture'
  | 'business-model'
  | 'protocol'
  | 'dossier'
   | 'demo';
export type EnergyType =
  | 'Crude Oil (Arab Heavy)'
  | 'Liquefied Natural Gas (LNG)'
  | 'Low Sulfur Fuel Oil (VLSFO)'
  | 'Jet Fuel / Kerosene'
  | 'Ultra-Low Sulfur Diesel (ULSD)';

export type DestinationHub =
  | 'Port of Rotterdam / Antwerp Hub (ARA)'
  | 'Singapore / Jurong Island Complex'
  | 'Ulsan / South Korea Industrial Belt'
  | 'Tokyo Bay / Chiba Energy Corridor'
  | 'Gulf Coast / Houston Refining Complex';

export interface BusinessProfile {
  energyType: EnergyType;
  monthlyRequirementBbl: number; // in Barrels or units
  destination: DestinationHub;
  supplierDependencyPercent: number; // e.g. 68% Hormuz
  currentSupplierName: string;
  maxAcceptableCostIncreasePercent: number; // e.g. 15%
  requiredDeliveryDays: number; // e.g. 21 days
  currentInventoryDays: number; // e.g. 19 days
  dailyBurnRateBbl: number; // e.g. 60,000 bpd
  targetSafetyStockDays: number; // e.g. 22 days
}

export interface StrategyOption {
  id: 'strategy-a' | 'strategy-b' | 'strategy-c';
  title: string;
  subtitle: string;
  tag: string;
  isRecommended?: boolean;
  supplyCoveragePercent: number; // e.g. 98%
  costImpactDollarsMillions: number; // e.g. +$3.9M
  costImpactPercent: number; // e.g. +11.2%
  deliveryTimeDaysDelta: number; // e.g. +4.2 days
  riskScore: number; // 0-100, e.g. 34
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  summary: string;
  routeDescription: string;
  supplierMix: string;
  transitDeltaText: string;
  primaryMitigation: string;
  pros: string[];
  cons: string[];
}

export interface SimulationParameters {
  disruptionDurationDays: number; // 15 to 90
  energySpotPriceDollars: number; // 60 to 140
  supplierCapacityPercent: number; // 40 to 120
  currentInventoryDays: number; // 5 to 45
  weatherSeverity: 'normal' | 'moderate' | 'stormy';
  suezStatus: 'open' | 'restricted' | 'closed';
}

export interface SimulationOutcome {
  projectedDeficitMillions: number;
  daysToStockout: number;
  costDeltaPercent: number;
  dailySurgeRateDollars: number;
  riskScore: number;
  riskCategory: 'Nominal' | 'Elevated' | 'High' | 'Critical Threat';
  recommendedVector: string;
  contingencyTriggerAction: string;
}

export interface AISAsset {
  id: string;
  name: string;
  type: string;
  cargo: string;
  status: 'Rerouted' | 'Safe Corridor' | 'Queued' | 'Diverted';
  etaDelta: string;
  origin: string;
  destination: string;
}

export interface PipelineNode {
  step: string;
  role: 'SUPPLIER' | 'ROUTE' | 'PORT' | 'STORAGE' | 'FACTORY' | 'CUSTOMER';
  title: string;
  subtitle: string;
  statusBadge: string;
  metricBadge: string;
  iconName: string;
}

export interface DecisionRecord {
  strategyId: string;
  strategyTitle: string;
  approverName: string;
  approverRole: string;
  timestamp: string;
  auditHash: string;
  checklistVerified: boolean[];
  status: 'DRAFT' | 'AUTHORIZED_PENDING_DISPATCH' | 'DISPATCHED_TO_ERP';
  notes: string;
}
