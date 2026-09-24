import React, { useState, useMemo } from 'react';
import { SimulationParameters, SimulationOutcome, AppView, BusinessProfile } from '../../types';

interface WhatIfSimulatorViewProps {
  profile: BusinessProfile;
  setCurrentView: (view: AppView) => void;
  onOpenDisclaimer: () => void;
}

export const WhatIfSimulatorView: React.FC<WhatIfSimulatorViewProps> = ({
  profile,
  setCurrentView,
  onOpenDisclaimer,
}) => {
  const [params, setParams] = useState<SimulationParameters>({
    disruptionDurationDays: 45,
    energySpotPriceDollars: 88,
    supplierCapacityPercent: 85,
    currentInventoryDays: profile.currentInventoryDays,
    weatherSeverity: 'normal',
    suezStatus: 'restricted',
  });

  // Dynamic recalculation of outcomes based on controls
  const outcome: SimulationOutcome = useMemo(() => {
    const weatherPenaltyDays = params.weatherSeverity === 'stormy' ? 3.5 : params.weatherSeverity === 'moderate' ? 1.5 : 0;
    const suezPenaltyDays = params.suezStatus === 'closed' ? 12 : params.suezStatus === 'restricted' ? 4 : 0;
    const effectiveDelay = 4.2 + weatherPenaltyDays + (suezPenaltyDays * 0.3);

    // Days until stockout
    const dailyDepletionFactor = (100 - params.supplierCapacityPercent) / 100;
    const effectiveStockoutDays = Math.max(
      2,
      Math.round(params.currentInventoryDays / (dailyDepletionFactor > 0.1 ? dailyDepletionFactor * 1.6 : 0.4))
    );

    // Cost calculation
    const priceSurgeFactor = Math.max(0, (params.energySpotPriceDollars - 75) / 75);
    const durationCostFactor = params.disruptionDurationDays / 30;
    const capacityTightnessFactor = Math.max(0.2, (100 - params.supplierCapacityPercent) / 50);

    const projectedDeficit = Number(
      (
        ((profile.monthlyRequirementBbl * (params.energySpotPriceDollars * 0.12 * priceSurgeFactor + 4.2)) /
          1000000) *
        durationCostFactor *
        (1 + capacityTightnessFactor * 0.4)
      ).toFixed(2)
    );

    const costDeltaPercent = Number(
      ((projectedDeficit / ((profile.monthlyRequirementBbl * params.energySpotPriceDollars) / 1000000)) * 100).toFixed(1)
    );

    const dailySurgeRate = Math.round((projectedDeficit * 1000000) / params.disruptionDurationDays);

    // Risk scoring
    let rawScore =
      (params.disruptionDurationDays / 90) * 40 +
      ((params.energySpotPriceDollars - 60) / 80) * 25 +
      ((120 - params.supplierCapacityPercent) / 80) * 20 +
      ((45 - params.currentInventoryDays) / 40) * 15;
    
    if (params.weatherSeverity === 'stormy') rawScore += 8;
    if (params.suezStatus === 'closed') rawScore += 12;

    const riskScore = Math.min(99, Math.max(18, Math.round(rawScore)));
    const riskCategory =
      riskScore >= 75
        ? 'Critical Threat'
        : riskScore >= 55
        ? 'High'
        : riskScore >= 35
        ? 'Elevated'
        : 'Nominal';

    let recommendedVector = 'Strategy C: Hybrid Diversification Protocol S-74';
    let contingencyTriggerAction = 'Execute Atlantic short-haul off-take & lock 300k bbl Vopak buffer';

    if (params.currentInventoryDays <= 10) {
      recommendedVector = 'Emergency Spot Tanker Charter Vector (Immediate Yanbu Pipeline Offload)';
      contingencyTriggerAction = 'Emergency inventory alert: Trigger immediate ARA terminal spot borrow';
    } else if (params.disruptionDurationDays > 60) {
      recommendedVector = 'Strategy C + Long-Term North Sea Forward Offtake Expansion';
      contingencyTriggerAction = 'Prolonged disruption: Convert 14-day forward option into 90-day bilateral contract';
    } else if (params.energySpotPriceDollars > 110) {
      recommendedVector = 'Strategy C + Enhanced Financial Crack Spread Hedging';
      contingencyTriggerAction = 'Price shock threshold breached: Enforce double-sided put/call fuel options';
    }

    return {
      projectedDeficitMillions: projectedDeficit,
      daysToStockout: effectiveStockoutDays,
      costDeltaPercent,
      dailySurgeRateDollars: dailySurgeRate,
      riskScore,
      riskCategory,
      recommendedVector,
      contingencyTriggerAction,
    };
  }, [params, profile]);

  const handleReset = () => {
    setParams({
      disruptionDurationDays: 45,
      energySpotPriceDollars: 88,
      supplierCapacityPercent: 85,
      currentInventoryDays: 19,
      weatherSeverity: 'normal',
      suezStatus: 'restricted',
    });
  };

  return (
    <div className="flex flex-col w-full space-y-4">
      {/* Header Banner */}
      <section className="w-full rounded-xl bg-[#222a3d] p-4 sm:p-5 border border-[#3d494c]/40 relative overflow-hidden shadow-lg">
        <div className="flex items-center justify-between pb-2 border-b border-[#3d494c]/30 flex-wrap gap-2">
          <span className="text-[11px] font-mono text-[#4cd7f6] uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse"></span>
            STAGE 06 // DYNAMIC WHAT-IF SIMULATOR
          </span>
          <button
            onClick={onOpenDisclaimer}
            className="text-[10px] font-mono text-[#ffb95f] px-2 py-0.5 rounded bg-[#e79400]/20 border border-[#ffb95f]/30 hover:bg-[#e79400]/30 transition-colors"
          >
            SAMPLE DATA // STOCHASTIC MODEL
          </button>
        </div>

        <div className="mt-3 flex items-start justify-between flex-wrap gap-3">
          <div>
            <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#dae2fd] tracking-tight">
              Disruption Stress-Testing Simulator
            </h2>
            <p className="text-[13px] text-[#bcc9cd] mt-0.5 leading-relaxed max-w-3xl">
              Adjust levers in real-time to simulate prolonged blockage scenarios, price shocks,
              and supply capacity constraints. All outputs recalculate instantly.
            </p>
          </div>

          <button
            onClick={handleReset}
            className="px-3.5 py-1.5 rounded-lg bg-[#171f33] border border-[#2d3449] text-[#bcc9cd] hover:text-[#4cd7f6] text-[12px] font-mono flex items-center gap-1.5 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">restart_alt</span>
            <span>Reset to Baseline</span>
          </button>
        </div>
      </section>

      {/* Main Grid: Controls (Left 2 cols) & Dynamic Outcomes (Right 1 col) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Controls Column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="rounded-xl bg-[#171f33] border border-[#3d494c]/40 p-4 sm:p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#222a3d]">
              <span className="text-[12px] font-mono text-[#dae2fd] uppercase tracking-wider font-semibold">
                Scenario Control Levers
              </span>
              <span className="text-[11px] font-mono text-[#4cd7f6]">Real-time Parametric Model</span>
            </div>

            {/* Slider 1: Disruption Duration */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[12px] font-mono">
                <span className="text-[#dae2fd]">1. Prolonged Disruption Duration</span>
                <span className="text-[#ffb95f] font-bold tabular-nums">
                  {params.disruptionDurationDays} Days
                </span>
              </div>
              <input
                type="range"
                min={15}
                max={90}
                step={1}
                value={params.disruptionDurationDays}
                onChange={(e) =>
                  setParams({ ...params, disruptionDurationDays: Number(e.target.value) })
                }
                className="w-full accent-[#ffb95f] bg-[#0b1326] h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#869397]">
                <span>15 Days (Short Closure)</span>
                <span>Baseline: 45 Days</span>
                <span>90 Days (Prolonged Black Swan)</span>
              </div>
            </div>

            {/* Slider 2: Energy Price */}
            <div className="space-y-2 pt-2 border-t border-[#222a3d]">
              <div className="flex justify-between items-center text-[12px] font-mono">
                <span className="text-[#dae2fd]">2. Brent / Arab Heavy Spot Price</span>
                <span className="text-[#4cd7f6] font-bold tabular-nums">
                  ${params.energySpotPriceDollars} / bbl
                </span>
              </div>
              <input
                type="range"
                min={60}
                max={140}
                step={1}
                value={params.energySpotPriceDollars}
                onChange={(e) =>
                  setParams({ ...params, energySpotPriceDollars: Number(e.target.value) })
                }
                className="w-full accent-[#4cd7f6] bg-[#0b1326] h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#869397]">
                <span>$60 (Subdued)</span>
                <span>Current: $88</span>
                <span>$140 (Historic Spike)</span>
              </div>
            </div>

            {/* Slider 3: Supplier Capacity */}
            <div className="space-y-2 pt-2 border-t border-[#222a3d]">
              <div className="flex justify-between items-center text-[12px] font-mono">
                <span className="text-[#dae2fd]">3. Available Supplier Capacity</span>
                <span className="text-[#4edea3] font-bold tabular-nums">
                  {params.supplierCapacityPercent}% Nominal
                </span>
              </div>
              <input
                type="range"
                min={40}
                max={120}
                step={5}
                value={params.supplierCapacityPercent}
                onChange={(e) =>
                  setParams({ ...params, supplierCapacityPercent: Number(e.target.value) })
                }
                className="w-full accent-[#4edea3] bg-[#0b1326] h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#869397]">
                <span>40% Severe Rationing</span>
                <span>85% Current Allocation</span>
                <span>120% Surplus Offtake</span>
              </div>
            </div>

            {/* Slider 4: Inventory Level */}
            <div className="space-y-2 pt-2 border-t border-[#222a3d]">
              <div className="flex justify-between items-center text-[12px] font-mono">
                <span className="text-[#dae2fd]">4. Starting Inventory Level</span>
                <span className="text-[#ffb4ab] font-bold tabular-nums">
                  {params.currentInventoryDays} Days
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={45}
                step={1}
                value={params.currentInventoryDays}
                onChange={(e) =>
                  setParams({ ...params, currentInventoryDays: Number(e.target.value) })
                }
                className="w-full accent-[#ffb4ab] bg-[#0b1326] h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#869397]">
                <span>5 Days (Immediate Depletion)</span>
                <span>Baseline: 19 Days</span>
                <span>45 Days (Full Tanker Storage)</span>
              </div>
            </div>

            {/* Bonus Scenario Friction Levers */}
            <div className="pt-3 border-t border-[#222a3d] grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Weather Severity */}
              <div className="p-3 rounded-lg bg-[#131b2e] border border-[#222a3d] space-y-1.5">
                <span className="text-[11px] font-mono text-[#bcc9cd] block">Weather Severity (Cape / North Sea)</span>
                <div className="grid grid-cols-3 gap-1">
                  {(['normal', 'moderate', 'stormy'] as const).map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setParams({ ...params, weatherSeverity: lvl })}
                      className={`py-1 px-1.5 rounded text-[11px] font-mono capitalize transition-colors ${
                        params.weatherSeverity === lvl
                          ? 'bg-[#4cd7f6] text-[#003640] font-semibold'
                          : 'bg-[#171f33] text-[#bcc9cd] hover:text-[#dae2fd]'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Suez Status */}
              <div className="p-3 rounded-lg bg-[#131b2e] border border-[#222a3d] space-y-1.5">
                <span className="text-[11px] font-mono text-[#bcc9cd] block">Suez Secondary Corridor</span>
                <div className="grid grid-cols-3 gap-1">
                  {(['open', 'restricted', 'closed'] as const).map((st) => (
                    <button
                      key={st}
                      onClick={() => setParams({ ...params, suezStatus: st })}
                      className={`py-1 px-1.5 rounded text-[11px] font-mono capitalize transition-colors ${
                        params.suezStatus === st
                          ? 'bg-[#4cd7f6] text-[#003640] font-semibold'
                          : 'bg-[#171f33] text-[#bcc9cd] hover:text-[#dae2fd]'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Recalculated Outcomes Column */}
        <div className="space-y-4">
          <div className="rounded-xl bg-[#222a3d] border border-[#4cd7f6]/40 p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#3d494c]/30">
              <span className="text-[12px] font-mono text-[#4cd7f6] uppercase tracking-wider font-semibold">
                Simulated Outcome Vectors
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#e79400]/20 text-[#ffb95f]">
                ILLUSTRATIVE SCENARIO
              </span>
            </div>

            {/* Recalculated Metric 1: Deficit */}
            <div className="p-3 rounded-xl bg-[#171f33] border border-[#3d494c]/30 space-y-1">
              <div className="text-[11px] font-mono text-[#bcc9cd]">Projected Enterprise Deficit</div>
              <div className="text-[26px] font-bold text-[#dae2fd] font-mono tabular-nums">
                +${outcome.projectedDeficitMillions}M
              </div>
              <div className="text-[11px] font-mono text-[#ffb95f]">
                +{outcome.costDeltaPercent}% Over Baseline Budget
              </div>
            </div>

            {/* Recalculated Metric 2: Stockout Date */}
            <div className="p-3 rounded-xl bg-[#171f33] border border-[#3d494c]/30 space-y-1">
              <div className="text-[11px] font-mono text-[#bcc9cd]">Estimated Stockout Runway</div>
              <div className="text-[26px] font-bold text-[#ffb4ab] font-mono tabular-nums">
                {outcome.daysToStockout} Days Left
              </div>
              <div className="text-[11px] font-mono text-[#869397]">
                Daily Surge: ${outcome.dailySurgeRateDollars.toLocaleString()} / day
              </div>
            </div>

            {/* Recalculated Metric 3: Threat Score */}
            <div className="p-3 rounded-xl bg-[#171f33] border border-[#3d494c]/30 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#bcc9cd]">Threat Index</span>
                <span
                  className={`text-[11px] font-mono font-bold ${
                    outcome.riskCategory === 'Critical Threat'
                      ? 'text-[#ffb4ab]'
                      : outcome.riskCategory === 'High'
                      ? 'text-[#ffb95f]'
                      : 'text-[#4edea3]'
                  }`}
                >
                  {outcome.riskCategory}
                </span>
              </div>
              <div className="text-[26px] font-bold text-[#dae2fd] font-mono tabular-nums">
                {outcome.riskScore} <span className="text-[14px] text-[#869397]">/ 100</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#0b1326] overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    outcome.riskScore > 70
                      ? 'bg-[#ffb4ab]'
                      : outcome.riskScore > 45
                      ? 'bg-[#ffb95f]'
                      : 'bg-[#4edea3]'
                  }`}
                  style={{ width: `${outcome.riskScore}%` }}
                ></div>
              </div>
            </div>

            {/* Dynamic AI Recommendation Shift */}
            <div className="p-3 rounded-xl bg-[#131b2e] border border-[#4edea3]/30 space-y-1 text-[12px]">
              <div className="text-[#4edea3] font-mono font-semibold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">psychology</span>
                Dynamic Recommendation Trigger:
              </div>
              <div className="text-[#dae2fd] font-medium">{outcome.recommendedVector}</div>
              <p className="text-[11px] text-[#bcc9cd] font-mono mt-1">
                {outcome.contingencyTriggerAction}
              </p>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => setCurrentView('decision')}
              className="w-full py-3.5 px-4 rounded-xl bg-[#4cd7f6] text-[#003640] font-semibold text-[14px] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(76,215,246,0.3)] hover:bg-[#acedff] transition-all"
            >
              <span>Commit Simulated Plan to Decision</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
