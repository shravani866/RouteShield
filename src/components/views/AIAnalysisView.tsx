import React, { useState, useEffect } from 'react';
import { BusinessProfile, AppView } from '../../types';
import { CANDIDATE_STRATEGIES } from '../../data/mockData';

interface AIAnalysisViewProps {
  profile: BusinessProfile;
  setCurrentView: (view: AppView) => void;
  onOpenDisclaimer: () => void;
}

export const AIAnalysisView: React.FC<AIAnalysisViewProps> = ({
  profile,
  setCurrentView,
  onOpenDisclaimer,
}) => {
  const [analysisProgress, setAnalysisProgress] = useState(100);
  const [isSolving, setIsSolving] = useState(false);
  const [activeTab, setActiveTab] = useState<'synthesis' | 'solver-log'>('synthesis');

  const solverSteps = [
    'Ingesting real-time AIS vessel telemetry around Strait of Hormuz bottleneck...',
    'Recalculating Cape of Good Hope transit curves (+14.2d delta, 11.4k nm)...',
    'Verifying North Sea (Equinor) & West Africa offload terminal capacity...',
    'Solving bunker burn profiles & VLSFO crack-spread hedging variance...',
    'Optimizing Port of Rotterdam Berth 4 slot availability & Vopak storage reserve...',
    'Synthesizing 3 candidate contingency vectors matching executive constraints.',
  ];

  const handleRerun = () => {
    setIsSolving(true);
    setAnalysisProgress(15);
    setTimeout(() => setAnalysisProgress(40), 400);
    setTimeout(() => setAnalysisProgress(75), 800);
    setTimeout(() => {
      setAnalysisProgress(100);
      setIsSolving(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full space-y-4">
      {/* Header Banner */}
      <section className="w-full rounded-xl bg-[#222a3d] p-4 sm:p-5 border border-[#3d494c]/40 relative overflow-hidden shadow-lg">
        <div className="flex items-center justify-between pb-2 border-b border-[#3d494c]/30 flex-wrap gap-2">
          <span className="text-[11px] font-mono text-[#4cd7f6] uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse"></span>
            STAGE 03 // COGNITIVE AI SYNTHESIS
          </span>
          <button
            onClick={onOpenDisclaimer}
            className="text-[10px] font-mono text-[#ffb95f] px-2 py-0.5 rounded bg-[#e79400]/20 border border-[#ffb95f]/30 hover:bg-[#e79400]/30 transition-colors"
          >
            SAMPLE DATA // ILLUSTRATIVE
          </button>
        </div>

        <div className="mt-3 flex items-start justify-between flex-wrap gap-3">
          <div>
            <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#dae2fd] tracking-tight">
              RouteShield AI Analysis Engine
            </h2>
            <p className="text-[13px] text-[#bcc9cd] mt-0.5 leading-relaxed max-w-3xl">
              Cross-referencing {profile.energyType} demand with global maritime choke points, spot charter
              capacities, and terminal berth queue locks.
            </p>
          </div>

          <button
            onClick={handleRerun}
            disabled={isSolving}
            className="px-3.5 py-2 rounded-xl bg-[#171f33] border border-[#4cd7f6]/40 text-[#4cd7f6] hover:bg-[#222a3d] text-[12px] font-mono flex items-center gap-1.5 transition-colors"
          >
            <span className={`material-symbols-outlined text-[16px] ${isSolving ? 'animate-spin' : ''}`}>
              refresh
            </span>
            <span>{isSolving ? 'Solving...' : 'Re-Run AI Drill'}</span>
          </button>
        </div>

        {/* Solver Progress Bar */}
        <div className="mt-4 pt-3 border-t border-[#3d494c]/30">
          <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
            <span className="text-[#4edea3] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]"></span>
              {isSolving ? 'Executing Stochastic Multi-Corridor Solver...' : 'Solver Complete: 3 Vectors Optimized'}
            </span>
            <span className="text-[#4cd7f6] font-bold">{analysisProgress}% Complete</span>
          </div>
          <div className="w-full h-2 rounded-full bg-[#0b1326] overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#06b6d4] via-[#4cd7f6] to-[#4edea3] transition-all duration-300 rounded-full"
              style={{ width: `${analysisProgress}%` }}
            ></div>
          </div>
        </div>
      </section>

      {/* 7 Required Analytical Dimensions Grid */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6]"></span>
            <h3 className="text-[15px] font-semibold text-[#dae2fd]">
              7-Factor Comprehensive Analysis Matrix
            </h3>
          </div>
          <span className="text-[11px] font-mono text-[#869397]">
            Calibrated to: {profile.destination.split('/')[0]}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Factor 1: Supply Requirements */}
          <div className="rounded-xl bg-[#171f33] border border-[#3d494c]/40 p-4 space-y-2 shadow-sm">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#4cd7f6]">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">inventory_2</span>
                01. SUPPLY REQUIREMENTS
              </span>
              <span className="text-[#4edea3]">VERIFIED</span>
            </div>
            <div className="text-[15px] font-semibold text-[#dae2fd] font-mono">
              {(profile.monthlyRequirementBbl / 1000000).toFixed(2)}M Barrels / Mo
            </div>
            <p className="text-[12px] text-[#bcc9cd] leading-relaxed">
              Refinery baseline requires <strong>{Math.round(profile.monthlyRequirementBbl / 30).toLocaleString()} bpd</strong> continuous intake. Current safety inventory is <strong>{profile.currentInventoryDays} days</strong>.
            </p>
          </div>

          {/* Factor 2: Alternative Routes */}
          <div className="rounded-xl bg-[#171f33] border border-[#3d494c]/40 p-4 space-y-2 shadow-sm">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#4cd7f6]">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">alt_route</span>
                02. ALTERNATIVE ROUTES
              </span>
              <span className="text-[#ffb95f]">3 CORRIDORS</span>
            </div>
            <div className="text-[15px] font-semibold text-[#dae2fd]">
              Cape Bypass & Atlantic Direct
            </div>
            <p className="text-[12px] text-[#bcc9cd] leading-relaxed">
              Route 1: Cape of Good Hope (+14.2d / 11.4k nm). Route 2: Short-haul Atlantic direct (+4.2d). Route 3: Trans-Arabian East-West pipeline to Yanbu offload.
            </p>
          </div>

          {/* Factor 3: Supplier Dependency */}
          <div className="rounded-xl bg-[#171f33] border border-[#3d494c]/40 p-4 space-y-2 shadow-sm">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#4cd7f6]">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">hub</span>
                03. SUPPLIER DEPENDENCY
              </span>
              <span className="text-[#ffb4ab]">EXPOSED</span>
            </div>
            <div className="text-[15px] font-semibold text-[#dae2fd]">
              {profile.supplierDependencyPercent}% Hormuz Reliance
            </div>
            <p className="text-[12px] text-[#bcc9cd] leading-relaxed">
              Single-point vulnerability through Ras Tanura & Das Island. Model recommends diversifying to 45% North Sea (Equinor) + 55% West Africa to achieve 0% chokepoint exposure.
            </p>
          </div>

          {/* Factor 4: Transportation Constraints */}
          <div className="rounded-xl bg-[#171f33] border border-[#3d494c]/40 p-4 space-y-2 shadow-sm">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#4cd7f6]">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">directions_boat</span>
                04. TRANSPORT CONSTRAINTS
              </span>
              <span className="text-[#ffb95f]">ACTIVE RESTRICTIONS</span>
            </div>
            <div className="text-[15px] font-semibold text-[#dae2fd]">
              Suez Draft & VLCC Charter Tightness
            </div>
            <p className="text-[12px] text-[#bcc9cd] leading-relaxed">
              VLCC tonnage availability down 18% globally. Suez Canal imposes draught limitations for fully laden supertankers; Atlantic short-haul tankers have higher slot liquidity.
            </p>
          </div>

          {/* Factor 5: Cost Assumptions */}
          <div className="rounded-xl bg-[#171f33] border border-[#3d494c]/40 p-4 space-y-2 shadow-sm">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#4cd7f6]">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">payments</span>
                05. COST ASSUMPTIONS
              </span>
              <span className="text-[#ffb95f]">SPOT VOLATILITY</span>
            </div>
            <div className="text-[15px] font-semibold text-[#dae2fd] font-mono">
              +$3.9M to +$8.4M Expected Delta
            </div>
            <p className="text-[12px] text-[#bcc9cd] leading-relaxed">
              Bunker fuel surcharge +$42/ton; spot tanker charter rates surge +$38k/day; marine war risk insurance +1.2%. Mitigated via forward fuel derivatives.
            </p>
          </div>

          {/* Factor 6: Delivery Timeline */}
          <div className="rounded-xl bg-[#171f33] border border-[#3d494c]/40 p-4 space-y-2 shadow-sm">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#4cd7f6]">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">schedule</span>
                06. DELIVERY TIMELINE
              </span>
              <span className="text-[#4edea3]">BUFFER FIT</span>
            </div>
            <div className="text-[15px] font-semibold text-[#dae2fd] font-mono">
              +4.2 to +14.2 Days Delta
            </div>
            <p className="text-[12px] text-[#bcc9cd] leading-relaxed">
              Cape bypass (+14.2d) cuts buffer dangerously close to the 19-day safety floor. Atlantic corridor (+4.2d) maintains full operational margin.
            </p>
          </div>

          {/* Factor 7: Risk Factors (Spans 3 cols on large screens) */}
          <div className="md:col-span-2 lg:col-span-3 rounded-xl bg-[#171f33] border border-[#ffb4ab]/30 p-4 space-y-2 shadow-sm">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#ffb4ab]">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">warning</span>
                07. COMPOUND RISK FACTORS & CRITICAL SENSITIVITY
              </span>
              <span className="px-2 py-0.5 rounded bg-[#93000a]/20 text-[#ffb4ab]">HIGH SENSITIVITY</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-[12px]">
              <div className="p-2.5 rounded bg-[#131b2e] border border-[#222a3d]">
                <div className="font-semibold text-[#dae2fd]">Bunker Fuel Volatility</div>
                <div className="text-[#bcc9cd] mt-0.5">±8.4% variance across bunkering ports. Requires crack spread hedges.</div>
              </div>
              <div className="p-2.5 rounded bg-[#131b2e] border border-[#222a3d]">
                <div className="font-semibold text-[#dae2fd]">North Sea Weather Ghyres</div>
                <div className="text-[#bcc9cd] mt-0.5">Winter gales can delay tanker loading by 48-72 hours at Norwegian offshore buoys.</div>
              </div>
              <div className="p-2.5 rounded bg-[#131b2e] border border-[#222a3d]">
                <div className="font-semibold text-[#dae2fd]">Rotterdam Berth Congestion</div>
                <div className="text-[#bcc9cd] mt-0.5">Slot lock-in priority needed at Berth 4 with T-Minus 36h port authority sync.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Candidate Strategies Preview */}
      <section className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span>
            <h3 className="text-[16px] font-semibold text-[#dae2fd]">
              Candidate Strategies Synthesized (3 Vectors)
            </h3>
          </div>
          <span className="text-[11px] font-mono text-[#4edea3]">Ready for Trade-Off Evaluation</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {CANDIDATE_STRATEGIES.map((strat) => (
            <div
              key={strat.id}
              className={`rounded-xl p-4 flex flex-col justify-between border transition-all ${
                strat.isRecommended
                  ? 'bg-[#171f33] border-[#4cd7f6] shadow-[0_0_16px_rgba(76,215,246,0.15)] relative'
                  : 'bg-[#171f33] border-[#3d494c]/40 hover:border-[#3d494c]'
              }`}
            >
              {strat.isRecommended && (
                <div className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-[#4cd7f6] text-[#003640] text-[10px] font-mono font-bold uppercase tracking-wider shadow">
                  Recommended Vector
                </div>
              )}

              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#bcc9cd]">
                  <span className="uppercase">{strat.tag}</span>
                  <span
                    className={`font-semibold ${
                      strat.riskLevel === 'Low'
                        ? 'text-[#4edea3]'
                        : strat.riskLevel === 'Medium'
                        ? 'text-[#ffb95f]'
                        : 'text-[#ffb4ab]'
                    }`}
                  >
                    Risk: {strat.riskLevel} ({strat.riskScore}/100)
                  </span>
                </div>

                <h4 className="text-[16px] font-semibold text-[#dae2fd]">{strat.title}</h4>
                <p className="text-[12px] text-[#bcc9cd] leading-relaxed">{strat.summary}</p>

                {/* Key Metrics Chips */}
                <div className="grid grid-cols-3 gap-1 pt-2 text-center font-mono">
                  <div className="p-1.5 rounded bg-[#131b2e] border border-[#222a3d]">
                    <div className="text-[10px] text-[#869397]">Coverage</div>
                    <div className="text-[13px] font-bold text-[#4edea3]">
                      {strat.supplyCoveragePercent}%
                    </div>
                  </div>
                  <div className="p-1.5 rounded bg-[#131b2e] border border-[#222a3d]">
                    <div className="text-[10px] text-[#869397]">Cost Delta</div>
                    <div className="text-[13px] font-bold text-[#ffb95f]">
                      +{strat.costImpactPercent}%
                    </div>
                  </div>
                  <div className="p-1.5 rounded bg-[#131b2e] border border-[#222a3d]">
                    <div className="text-[10px] text-[#869397]">Delivery</div>
                    <div className="text-[13px] font-bold text-[#4cd7f6]">
                      +{strat.deliveryTimeDaysDelta}d
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#222a3d] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#869397]">Sample Scenario</span>
                <span className="text-[12px] font-mono text-[#4cd7f6] flex items-center gap-1">
                  Inspect in Matrix <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Strategy Comparison */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={() => setCurrentView('comparison')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#4cd7f6] text-[#003640] font-semibold text-[14px] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(76,215,246,0.3)] hover:bg-[#acedff] transition-all"
          >
            <span>Proceed to Strategy Comparison Matrix</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </section>
    </div>
  );
};
