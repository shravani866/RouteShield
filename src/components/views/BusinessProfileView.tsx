import React from 'react';
import { BusinessProfile, EnergyType, DestinationHub, AppView } from '../../types';
import { PROFILE_PRESETS } from '../../data/mockData';

interface BusinessProfileViewProps {
  profile: BusinessProfile;
  setProfile: React.Dispatch<React.SetStateAction<BusinessProfile>>;
  setCurrentView: (view: AppView) => void;
  onOpenDisclaimer: () => void;
}

const ENERGY_OPTIONS: EnergyType[] = [
  'Crude Oil (Arab Heavy)',
  'Liquefied Natural Gas (LNG)',
  'Low Sulfur Fuel Oil (VLSFO)',
  'Jet Fuel / Kerosene',
  'Ultra-Low Sulfur Diesel (ULSD)',
];

const DESTINATIONS: DestinationHub[] = [
  'Port of Rotterdam / Antwerp Hub (ARA)',
  'Singapore / Jurong Island Complex',
  'Ulsan / South Korea Industrial Belt',
  'Tokyo Bay / Chiba Energy Corridor',
  'Gulf Coast / Houston Refining Complex',
];

export const BusinessProfileView: React.FC<BusinessProfileViewProps> = ({
  profile,
  setProfile,
  setCurrentView,
  onOpenDisclaimer,
}) => {
  const atRiskBarrels = Math.round(
    profile.monthlyRequirementBbl * (profile.supplierDependencyPercent / 100)
  );
  const estimatedCostDeltaMillions = (
    ((atRiskBarrels * 88 * (profile.maxAcceptableCostIncreasePercent / 100)) / 1000000)
  ).toFixed(1);

  return (
    <div className="flex flex-col w-full space-y-4">
      {/* Stage Header Banner */}
      <section className="w-full rounded-xl bg-[#222a3d] p-4 sm:p-5 border border-[#3d494c]/40 relative overflow-hidden shadow-lg">
        <div className="flex items-center justify-between pb-2 border-b border-[#3d494c]/30 flex-wrap gap-2">
          <span className="text-[11px] font-mono text-[#4cd7f6] uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6]"></span>
            STAGE 02 // INPUT SPECIFICATION
          </span>
          <button
            onClick={onOpenDisclaimer}
            className="text-[10px] font-mono text-[#ffb95f] px-2 py-0.5 rounded bg-[#e79400]/20 border border-[#ffb95f]/30 hover:bg-[#e79400]/30 transition-colors"
          >
            SAMPLE DATA // ILLUSTRATIVE
          </button>
        </div>

        <div className="mt-2.5">
          <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#dae2fd] tracking-tight">
            Enterprise Procurement Profile
          </h2>
          <p className="text-[13px] text-[#bcc9cd] mt-0.5 leading-relaxed">
            Configure your refinery or utility demand profile to calibrate RouteShield's contingency
            algorithms against the Strait of Hormuz bottleneck.
          </p>
        </div>

        {/* Quick Industry Presets */}
        <div className="mt-4 pt-3 border-t border-[#3d494c]/30">
          <span className="text-[11px] font-mono text-[#bcc9cd] block mb-2">
            SELECT BENCHMARK INDUSTRY PRESET:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {PROFILE_PRESETS.map((preset) => (
              <button
                key={preset.name}
                onClick={() => setProfile(preset.profile)}
                className={`p-2.5 rounded-lg text-left text-[12px] font-mono transition-all border ${
                  profile.destination === preset.profile.destination &&
                  profile.energyType === preset.profile.energyType
                    ? 'bg-[#171f33] border-[#4cd7f6] text-[#4cd7f6] shadow-md'
                    : 'bg-[#131b2e] border-[#222a3d] text-[#bcc9cd] hover:border-[#3d494c] hover:text-[#dae2fd]'
                }`}
              >
                <div className="font-semibold truncate">{preset.name}</div>
                <div className="text-[10px] text-[#869397] truncate mt-0.5">
                  {preset.profile.energyType} • {(preset.profile.monthlyRequirementBbl / 1000000).toFixed(1)}M bbl
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Configuration Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Input Parameters (2 Cols) */}
        <div className="lg:col-span-2 space-y-4">
          {/* Energy Type Selector */}
          <div className="bg-[#171f33] border border-[#3d494c]/40 rounded-xl p-4 space-y-2.5 shadow-sm">
            <label className="text-[12px] font-mono text-[#dae2fd] uppercase tracking-wider flex items-center justify-between">
              <span>1. Energy Commodity Type</span>
              <span className="text-[#4cd7f6] font-semibold">{profile.energyType}</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ENERGY_OPTIONS.map((type) => (
                <button
                  key={type}
                  onClick={() => setProfile({ ...profile, energyType: type })}
                  className={`p-2.5 rounded-lg text-left text-[12px] transition-colors border flex items-center justify-between ${
                    profile.energyType === type
                      ? 'bg-[#06b6d4]/15 border-[#4cd7f6] text-[#4cd7f6] font-semibold'
                      : 'bg-[#131b2e] border-[#222a3d] text-[#bcc9cd] hover:border-[#3d494c]'
                  }`}
                >
                  <span className="truncate">{type}</span>
                  {profile.energyType === type && (
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Monthly Requirement & Destination */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Monthly Requirement Slider */}
            <div className="bg-[#171f33] border border-[#3d494c]/40 rounded-xl p-4 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <label className="text-[12px] font-mono text-[#dae2fd] uppercase tracking-wider">
                  2. Monthly Requirement
                </label>
                <span className="text-[13px] font-mono text-[#4cd7f6] font-bold tabular-nums">
                  {(profile.monthlyRequirementBbl / 1000000).toFixed(2)}M Barrels
                </span>
              </div>
              <input
                type="range"
                min={500000}
                max={5000000}
                step={50000}
                value={profile.monthlyRequirementBbl}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    monthlyRequirementBbl: Number(e.target.value),
                    dailyBurnRateBbl: Math.round(Number(e.target.value) / 30),
                  })
                }
                className="w-full accent-[#4cd7f6] bg-[#0b1326] h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#869397]">
                <span>0.5M bbl</span>
                <span>Burn: {Math.round(profile.monthlyRequirementBbl / 30).toLocaleString()} bpd</span>
                <span>5.0M bbl</span>
              </div>
            </div>

            {/* Destination Hub Selector */}
            <div className="bg-[#171f33] border border-[#3d494c]/40 rounded-xl p-4 space-y-3 shadow-sm">
              <label className="text-[12px] font-mono text-[#dae2fd] uppercase tracking-wider block">
                3. Destination Port / Hub
              </label>
              <select
                value={profile.destination}
                onChange={(e) =>
                  setProfile({ ...profile, destination: e.target.value as DestinationHub })
                }
                className="w-full bg-[#131b2e] border border-[#222a3d] text-[#dae2fd] rounded-lg p-2.5 text-[12px] font-mono focus:border-[#4cd7f6] focus:outline-none"
              >
                {DESTINATIONS.map((dest) => (
                  <option key={dest} value={dest} className="bg-[#171f33]">
                    {dest}
                  </option>
                ))}
              </select>
              <div className="text-[11px] text-[#869397] font-mono">
                Berth reservation and storage pipeline linked to selected port.
              </div>
            </div>
          </div>

          {/* Supplier Dependency & Maximum Cost Increase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Hormuz Dependency Slider */}
            <div className="bg-[#171f33] border border-[#3d494c]/40 rounded-xl p-4 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <label className="text-[12px] font-mono text-[#dae2fd] uppercase tracking-wider">
                  4. Current Hormuz Dependency
                </label>
                <span className="text-[13px] font-mono text-[#ffb4ab] font-bold tabular-nums">
                  {profile.supplierDependencyPercent}%
                </span>
              </div>
              <input
                type="range"
                min={20}
                max={100}
                step={1}
                value={profile.supplierDependencyPercent}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    supplierDependencyPercent: Number(e.target.value),
                  })
                }
                className="w-full accent-[#ffb4ab] bg-[#0b1326] h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#869397]">
                <span>20% Low Exposure</span>
                <span className="text-[#ffb4ab]">
                  {atRiskBarrels.toLocaleString()} bbl at risk
                </span>
                <span>100% Critical</span>
              </div>
            </div>

            {/* Max Acceptable Cost Increase */}
            <div className="bg-[#171f33] border border-[#3d494c]/40 rounded-xl p-4 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <label className="text-[12px] font-mono text-[#dae2fd] uppercase tracking-wider">
                  5. Max Acceptable Cost Surge
                </label>
                <span className="text-[13px] font-mono text-[#ffb95f] font-bold tabular-nums">
                  +{profile.maxAcceptableCostIncreasePercent}%
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={40}
                step={1}
                value={profile.maxAcceptableCostIncreasePercent}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    maxAcceptableCostIncreasePercent: Number(e.target.value),
                  })
                }
                className="w-full accent-[#ffb95f] bg-[#0b1326] h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#869397]">
                <span>+5% Budget Strict</span>
                <span className="text-[#ffb95f]">
                  +${((88 * profile.maxAcceptableCostIncreasePercent) / 100).toFixed(2)}/bbl
                </span>
                <span>+40% Emergency</span>
              </div>
            </div>
          </div>

          {/* Delivery Timeframe & Current Inventory */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Required Timeframe */}
            <div className="bg-[#171f33] border border-[#3d494c]/40 rounded-xl p-4 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <label className="text-[12px] font-mono text-[#dae2fd] uppercase tracking-wider">
                  6. Delivery Timeframe Ceiling
                </label>
                <span className="text-[13px] font-mono text-[#4edea3] font-bold tabular-nums">
                  {profile.requiredDeliveryDays} Days
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={45}
                step={1}
                value={profile.requiredDeliveryDays}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    requiredDeliveryDays: Number(e.target.value),
                  })
                }
                className="w-full accent-[#4edea3] bg-[#0b1326] h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#869397]">
                <span>10d Rapid Need</span>
                <span>Allowed Transit Window</span>
                <span>45d Flexible</span>
              </div>
            </div>

            {/* Current Inventory Stock */}
            <div className="bg-[#171f33] border border-[#3d494c]/40 rounded-xl p-4 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <label className="text-[12px] font-mono text-[#dae2fd] uppercase tracking-wider">
                  7. Current Inventory Buffer
                </label>
                <span className="text-[13px] font-mono text-[#ffb95f] font-bold tabular-nums">
                  {profile.currentInventoryDays} Days
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={40}
                step={1}
                value={profile.currentInventoryDays}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    currentInventoryDays: Number(e.target.value),
                  })
                }
                className="w-full accent-[#ffb95f] bg-[#0b1326] h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#869397]">
                <span>5d Emergency</span>
                <span className="text-[#ffb95f]">Depletion: D-{profile.currentInventoryDays}</span>
                <span>40d Cushioned</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Exposure Calculation Card (1 Col) */}
        <div className="space-y-4">
          <div className="rounded-xl bg-[#222a3d] border border-[#4cd7f6]/30 p-5 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-2 border-b border-[#3d494c]/30">
              <span className="text-[12px] font-mono text-[#4cd7f6] uppercase tracking-wider font-semibold">
                Calibrated Exposure Summary
              </span>
              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#ffb95f]/20 text-[#ffb95f]">
                SAMPLE DATA
              </span>
            </div>

            <div className="space-y-3 text-[13px]">
              <div className="flex items-center justify-between">
                <span className="text-[#bcc9cd]">Immediate At-Risk Cargo</span>
                <span className="font-mono text-[#ffb4ab] font-bold">
                  {atRiskBarrels.toLocaleString()} bbl
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#bcc9cd]">Daily Refinery Burn</span>
                <span className="font-mono text-[#dae2fd]">
                  {Math.round(profile.monthlyRequirementBbl / 30).toLocaleString()} bpd
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#bcc9cd]">Days to Production Halt</span>
                <span className="font-mono text-[#ffb95f] font-bold">
                  {profile.currentInventoryDays} Days
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#bcc9cd]">Max Allowable Cost Delta</span>
                <span className="font-mono text-[#4edea3] font-bold">
                  +${estimatedCostDeltaMillions}M / mo
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#3d494c]/30 rounded-lg bg-[#171f33] p-3 text-[11px] text-[#bcc9cd] font-mono">
              <div className="flex items-center gap-1.5 text-[#4edea3] font-semibold mb-1">
                <span className="material-symbols-outlined text-[14px]">tune</span>
                Routing Constraints Calibrated
              </div>
              Targeting alternatives with delivery &le; {profile.requiredDeliveryDays} days and cost increase &le; {profile.maxAcceptableCostIncreasePercent}%.
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => setCurrentView('analysis')}
              className="w-full py-3.5 px-4 rounded-xl bg-[#4cd7f6] text-[#003640] font-semibold text-[14px] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(76,215,246,0.3)] hover:bg-[#acedff] active:scale-[0.98] transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">psychology</span>
              <span>Generate Contingency Plan</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

          <div className="rounded-xl bg-[#131b2e] border border-[#222a3d] p-4 text-[12px] text-[#869397] font-mono space-y-1.5">
            <div className="flex items-center gap-1.5 text-[#ffb95f]">
              <span className="material-symbols-outlined text-[16px]">info</span>
              <span>Decision Support Constraint Check</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              RouteShield AI cross-references your profile against active tanker positions, available
              berth windows in {profile.destination.split('/')[0]}, and spot supplier differentials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
