import React from 'react';
import { StrategyOption, BusinessProfile, AppView } from '../../types';
import { CANDIDATE_STRATEGIES } from '../../data/mockData';

interface StrategyComparisonViewProps {
  selectedStrategy: StrategyOption;
  setSelectedStrategy: (strat: StrategyOption) => void;
  profile: BusinessProfile;
  setCurrentView: (view: AppView) => void;
  onOpenDisclaimer: () => void;
}

export const StrategyComparisonView: React.FC<StrategyComparisonViewProps> = ({
  selectedStrategy,
  setSelectedStrategy,
  profile,
  setCurrentView,
  onOpenDisclaimer,
}) => {
  return (
    <div className="flex flex-col w-full space-y-4">
      {/* Header Banner */}
      <section className="w-full rounded-xl bg-[#222a3d] p-4 sm:p-5 border border-[#3d494c]/40 relative overflow-hidden shadow-lg">
        <div className="flex items-center justify-between pb-2 border-b border-[#3d494c]/30 flex-wrap gap-2">
          <span className="text-[11px] font-mono text-[#4cd7f6] uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6]"></span>
            STAGE 04 // MULTI-OBJECTIVE TRADE-OFF COMPARISON
          </span>
          <button
            onClick={onOpenDisclaimer}
            className="text-[10px] font-mono text-[#ffb95f] px-2 py-0.5 rounded bg-[#e79400]/20 border border-[#ffb95f]/30 hover:bg-[#e79400]/30 transition-colors"
          >
            SAMPLE DATA // ILLUSTRATIVE
          </button>
        </div>

        <div className="mt-3">
          <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#dae2fd] tracking-tight">
            Contingency Strategy Evaluation
          </h2>
          <p className="text-[13px] text-[#bcc9cd] mt-0.5 leading-relaxed max-w-3xl">
            Evaluate multidimensional friction between freight costs, transit delay deviations, and
            residual geopolitical exposure. Select the optimal contingency strategy for executive
            sign-off.
          </p>
        </div>
      </section>

      {/* 3 Strategy Selectable Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {CANDIDATE_STRATEGIES.map((strat) => {
          const isSelected = selectedStrategy.id === strat.id;

          return (
            <div
              key={strat.id}
              onClick={() => setSelectedStrategy(strat)}
              className={`cursor-pointer rounded-2xl p-5 flex flex-col justify-between border-2 transition-all relative ${
                isSelected
                  ? 'bg-[#171f33] border-[#4cd7f6] shadow-[0_0_24px_rgba(76,215,246,0.25)] scale-[1.01]'
                  : 'bg-[#131b2e] border-[#222a3d] hover:border-[#3d494c] opacity-90 hover:opacity-100'
              }`}
            >
              {/* Badges */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono text-[#4cd7f6] uppercase tracking-wider font-semibold">
                  {strat.tag}
                </span>
                {strat.isRecommended && (
                  <span className="px-2 py-0.5 rounded-full bg-[#4edea3]/20 border border-[#4edea3]/40 text-[#4edea3] text-[10px] font-mono font-bold uppercase tracking-wider">
                    AI Recommended
                  </span>
                )}
              </div>

              {/* Title & Summary */}
              <div className="space-y-2">
                <h3 className="text-[18px] font-bold text-[#dae2fd]">{strat.title}</h3>
                <p className="text-[12px] text-[#bcc9cd] leading-relaxed">{strat.summary}</p>
              </div>

              {/* 4 Quantitative Comparison Metrics */}
              <div className="mt-4 pt-3 border-t border-[#222a3d] space-y-2.5">
                {/* 1. Supply Coverage */}
                <div>
                  <div className="flex justify-between text-[11px] font-mono mb-1">
                    <span className="text-[#bcc9cd]">Supply Coverage</span>
                    <span className="text-[#4edea3] font-bold tabular-nums">
                      {strat.supplyCoveragePercent}% (Sample)
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#0b1326] overflow-hidden">
                    <div
                      className="h-full bg-[#4edea3] rounded-full"
                      style={{ width: `${strat.supplyCoveragePercent}%` }}
                    ></div>
                  </div>
                </div>

                {/* 2. Cost Impact */}
                <div>
                  <div className="flex justify-between text-[11px] font-mono mb-1">
                    <span className="text-[#bcc9cd]">Cost Impact</span>
                    <span className="text-[#ffb95f] font-bold tabular-nums">
                      +${strat.costImpactDollarsMillions}M (+{strat.costImpactPercent}%)
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#0b1326] overflow-hidden">
                    <div
                      className="h-full bg-[#ffb95f] rounded-full"
                      style={{ width: `${Math.min(100, strat.costImpactPercent * 3.5)}%` }}
                    ></div>
                  </div>
                </div>

                {/* 3. Delivery Time */}
                <div>
                  <div className="flex justify-between text-[11px] font-mono mb-1">
                    <span className="text-[#bcc9cd]">Delivery Delay</span>
                    <span className="text-[#4cd7f6] font-bold tabular-nums">
                      +{strat.deliveryTimeDaysDelta} Days
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#0b1326] overflow-hidden">
                    <div
                      className="h-full bg-[#4cd7f6] rounded-full"
                      style={{ width: `${Math.min(100, (strat.deliveryTimeDaysDelta / 20) * 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* 4. Risk Level */}
                <div>
                  <div className="flex justify-between text-[11px] font-mono mb-1">
                    <span className="text-[#bcc9cd]">Composite Risk</span>
                    <span
                      className={`font-bold tabular-nums ${
                        strat.riskLevel === 'Low'
                          ? 'text-[#4edea3]'
                          : strat.riskLevel === 'Medium'
                          ? 'text-[#ffb95f]'
                          : 'text-[#ffb4ab]'
                      }`}
                    >
                      {strat.riskLevel} ({strat.riskScore}/100)
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#0b1326] overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        strat.riskLevel === 'Low'
                          ? 'bg-[#4edea3]'
                          : strat.riskLevel === 'Medium'
                          ? 'bg-[#ffb95f]'
                          : 'bg-[#ffb4ab]'
                      }`}
                      style={{ width: `${strat.riskScore}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="mt-4 pt-3 border-t border-[#222a3d] space-y-1.5 text-[11px]">
                <div className="text-[#4edea3] font-mono flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">check</span>
                  <span>{strat.pros[0]}</span>
                </div>
                <div className="text-[#ffb4ab] font-mono flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">close</span>
                  <span>{strat.cons[0]}</span>
                </div>
              </div>

              {/* Select Action Radio / Button */}
              <div className="mt-5 pt-3 border-t border-[#222a3d]">
                <button
                  type="button"
                  className={`w-full py-2.5 px-3 rounded-xl font-mono text-[12px] font-semibold flex items-center justify-center gap-2 transition-all ${
                    isSelected
                      ? 'bg-[#4cd7f6] text-[#003640] shadow-[0_0_12px_rgba(76,215,246,0.4)]'
                      : 'bg-[#222a3d] text-[#bcc9cd] hover:text-[#dae2fd]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {isSelected ? 'check_circle' : 'radio_button_unchecked'}
                  </span>
                  <span>{isSelected ? 'Strategy Selected (Active)' : 'Select This Strategy'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Side-by-Side Detailed Comparison Table */}
      <section className="rounded-xl bg-[#171f33] border border-[#3d494c]/40 p-4 sm:p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-[#222a3d]">
          <h3 className="text-[15px] font-semibold text-[#dae2fd] flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4cd7f6] text-[18px]">table_chart</span>
            Multi-Criteria Decision Matrix
          </h3>
          <span className="text-[11px] font-mono text-[#ffb95f]">SAMPLE DATA // BENCHMARKS</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-[12px] font-mono">
            <thead>
              <tr className="border-b border-[#222a3d] text-[#869397]">
                <th className="py-2.5 px-3">EVALUATION METRIC</th>
                <th className="py-2.5 px-3 text-[#ffb95f]">A: CAPE BYPASS</th>
                <th className="py-2.5 px-3 text-[#ffb4ab]">B: SUPPLIER DIVERSIFICATION</th>
                <th className="py-2.5 px-3 text-[#4edea3]">C: HYBRID STRATEGY (REC)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#222a3d] text-[#dae2fd]">
              <tr>
                <td className="py-2.5 px-3 text-[#bcc9cd]">Supply Volume Coverage</td>
                <td className="py-2.5 px-3">92%</td>
                <td className="py-2.5 px-3">78%</td>
                <td className="py-2.5 px-3 text-[#4edea3] font-bold">98% (Optimal)</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 text-[#bcc9cd]">Projected Monthly Deficit</td>
                <td className="py-2.5 px-3">+$6.8M (+18.5%)</td>
                <td className="py-2.5 px-3 text-[#ffb4ab]">+$8.4M (+24.0%)</td>
                <td className="py-2.5 px-3 text-[#4edea3] font-bold">+$3.9M (+11.2%)</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 text-[#bcc9cd]">Delivery Delay vs. Schedule</td>
                <td className="py-2.5 px-3 text-[#ffb4ab]">+14.2 Days (Buffer Risk)</td>
                <td className="py-2.5 px-3">+4.0 Days</td>
                <td className="py-2.5 px-3 text-[#4edea3] font-bold">+4.2 Days (Safe)</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 text-[#bcc9cd]">Composite Risk Vulnerability</td>
                <td className="py-2.5 px-3">58 / 100 (Medium)</td>
                <td className="py-2.5 px-3 text-[#ffb4ab]">66 / 100 (High)</td>
                <td className="py-2.5 px-3 text-[#4edea3] font-bold">34 / 100 (Low)</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 text-[#bcc9cd]">Chokepoint Residual Risk</td>
                <td className="py-2.5 px-3">Cape Weather / Bunker Points</td>
                <td className="py-2.5 px-3">North Sea Winter Gales</td>
                <td className="py-2.5 px-3 text-[#4edea3] font-bold">Zero Chokepoint (Atlantic)</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 text-[#bcc9cd]">Refinery Compatibility</td>
                <td className="py-2.5 px-3">100% Native Spec</td>
                <td className="py-2.5 px-3">92% Blend Adjust Needed</td>
                <td className="py-2.5 px-3 text-[#4edea3] font-bold">96% Dual Blend Optimal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Selected Action Sticky Hub */}
      <section className="rounded-xl bg-[#222a3d] border border-[#4cd7f6]/40 p-4 sm:p-5 flex items-center justify-between flex-wrap gap-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#4cd7f6]/20 text-[#4cd7f6] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[24px]">task_alt</span>
          </div>
          <div>
            <div className="text-[11px] font-mono text-[#869397] uppercase tracking-wider">
              Currently Selected Strategy for Directive:
            </div>
            <div className="text-[16px] font-bold text-[#dae2fd]">{selectedStrategy.title}</div>
            <div className="text-[12px] text-[#bcc9cd] font-mono">
              Coverage: {selectedStrategy.supplyCoveragePercent}% • Cost Delta: +
              {selectedStrategy.costImpactPercent}% • Delay: +{selectedStrategy.deliveryTimeDaysDelta}d
            </div>
          </div>
        </div>

        <button
          onClick={() => setCurrentView('plan')}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#4cd7f6] text-[#003640] font-semibold text-[14px] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(76,215,246,0.3)] hover:bg-[#acedff] transition-all"
        >
          <span>View Plan Details & Execution Vectors</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </section>
    </div>
  );
};
