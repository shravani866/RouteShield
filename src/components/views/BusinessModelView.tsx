import React, { useState } from 'react';
import { AppView } from '../../types';

interface BusinessModelViewProps {
  setCurrentView: (view: AppView) => void;
  onOpenDisclaimer: () => void;
}

export const BusinessModelView: React.FC<BusinessModelViewProps> = ({
  setCurrentView,
  onOpenDisclaimer,
}) => {
  const [activeCorridor, setActiveCorridor] = useState<'red-sea' | 'panama' | 'hormuz'>('hormuz');
  const [isLaunchingPilot, setIsLaunchingPilot] = useState(false);
  const [pilotLaunched, setPilotLaunched] = useState(false);

  const handleLaunchPilot = () => {
    setIsLaunchingPilot(true);
    setTimeout(() => {
      setIsLaunchingPilot(false);
      setPilotLaunched(true);
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full space-y-4">
      {/* Executive Strategic Brief Header Card */}
      <section className="relative overflow-hidden rounded-xl bg-[#222a3d] p-5 border border-[#3d494c]/40 shadow-md">
        <div className="absolute -right-8 -top-8 w-48 h-48 rounded-full bg-[#4cd7f6]/10 blur-2xl pointer-events-none"></div>

        <div className="flex items-center justify-between pb-2 border-b border-[#3d494c]/30 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#4cd7f6]/15 text-[#4cd7f6] text-[11px] font-mono border border-[#4cd7f6]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6] animate-pulse"></span>
              SCALE ARCHITECTURE
            </span>
            <span className="text-[11px] font-mono text-[#bcc9cd]">FY25-27 BLUEPRINT</span>
          </div>
          <button
            onClick={onOpenDisclaimer}
            className="text-[10px] font-mono text-[#ffb95f] px-2 py-0.5 rounded bg-[#e79400]/20 border border-[#ffb95f]/30"
          >
            SAMPLE DATA // COMMERCIAL
          </button>
        </div>

        <h1 className="text-[20px] sm:text-[26px] font-semibold text-[#dae2fd] tracking-tight mt-3">
          Commercial Strategy & Market Viability
        </h1>
        <p className="text-[13px] text-[#bcc9cd] mt-1 leading-relaxed max-w-3xl">
          Go-to-market model for critical energy infrastructure resilience and multi-modal freight continuity.
        </p>

        {/* Top 2 KPI Cards */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl bg-[#171f33] border border-[#222a3d] p-3.5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#4cd7f6]/10 text-[#4cd7f6] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">verified_user</span>
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-mono text-[#869397] uppercase tracking-wider">TAM FOCUS</div>
              <div className="text-[17px] font-bold text-[#dae2fd] font-mono truncate">
                $42.8B Critical Logistics
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-[#171f33] border border-[#222a3d] p-3.5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#4edea3]/15 text-[#4edea3] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">query_stats</span>
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-mono text-[#869397] uppercase tracking-wider">TARGET NDR</div>
              <div className="text-[17px] font-bold text-[#4edea3] font-mono truncate">
                138% Year-over-Year
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Target Customers */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6]"></span>
            <h2 className="text-[16px] font-semibold text-[#dae2fd]">Target Customer Segments</h2>
          </div>
          <span className="text-[11px] font-mono text-[#4cd7f6] uppercase">Segment Quotas</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Customer 1 */}
          <div className="rounded-xl bg-[#171f33] border border-[#3d494c]/40 p-4 flex items-start gap-3.5 shadow-sm hover:border-[#4cd7f6] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#222a3d] text-[#4cd7f6] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px]">factory</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-[14px] font-semibold text-[#dae2fd] truncate">
                  Energy-Intensive Manufacturers
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-[#4cd7f6]/10 text-[#4cd7f6] text-[10px] font-mono font-semibold shrink-0">
                  Primary ICP
                </span>
              </div>
              <p className="text-[12px] text-[#bcc9cd] mt-0.5 leading-relaxed">
                Continuous blast furnaces, petrochemical crackers, steel, and high-heat glass operators with zero-downtime tolerance.
              </p>
              <div className="mt-2 text-[11px] font-mono text-[#4edea3] flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px]">schedule</span>
                <span>$180k/hr downtime exposure</span>
              </div>
            </div>
          </div>

          {/* Customer 2 */}
          <div className="rounded-xl bg-[#171f33] border border-[#3d494c]/40 p-4 flex items-start gap-3.5 shadow-sm hover:border-[#4edea3] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#222a3d] text-[#4edea3] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px]">directions_boat</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-[14px] font-semibold text-[#dae2fd] truncate">
                  Logistics & Maritime Fleets
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-[#4edea3]/10 text-[#4edea3] text-[10px] font-mono font-semibold shrink-0">
                  Scale Vector
                </span>
              </div>
              <p className="text-[12px] text-[#bcc9cd] mt-0.5 leading-relaxed">
                Crude/LNG tanker operators, ultra-large container charterers, and tactical naval freight navigators.
              </p>
              <div className="mt-2 text-[11px] font-mono text-[#4edea3] flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px]">route</span>
                <span>Suez/Panama canal optimization</span>
              </div>
            </div>
          </div>

          {/* Customer 3 */}
          <div className="rounded-xl bg-[#171f33] border border-[#3d494c]/40 p-4 flex items-start gap-3.5 shadow-sm hover:border-[#ffb95f] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#222a3d] text-[#ffb95f] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px]">swap_horiz</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-[14px] font-semibold text-[#dae2fd] truncate">
                  Import / Export Enterprises
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-[#ffb95f]/10 text-[#ffb95f] text-[10px] font-mono font-semibold shrink-0">
                  High Margin
                </span>
              </div>
              <p className="text-[12px] text-[#bcc9cd] mt-0.5 leading-relaxed">
                Commodity trading desks, national electrical utilities, and cross-border strategic grain corridors.
              </p>
              <div className="mt-2 text-[11px] font-mono text-[#4edea3] flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px]">trending_up</span>
                <span>Real-time spatial arbitrage</span>
              </div>
            </div>
          </div>

          {/* Customer 4 */}
          <div className="rounded-xl bg-[#171f33] border border-[#3d494c]/40 p-4 flex items-start gap-3.5 shadow-sm hover:border-[#4cd7f6] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#222a3d] text-[#4cd7f6] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px]">hub</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-[14px] font-semibold text-[#dae2fd] truncate">
                  Enterprise Procurement Teams
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-[#4cd7f6]/10 text-[#4cd7f6] text-[10px] font-mono font-semibold shrink-0">
                  Corporate Core
                </span>
              </div>
              <p className="text-[12px] text-[#bcc9cd] mt-0.5 leading-relaxed">
                Fortune 500 Chief Supply Chain Officers and procurement directors balancing multi-region tier-1 sourcing resilience.
              </p>
              <div className="mt-2 text-[11px] font-mono text-[#4edea3] flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px]">shield</span>
                <span>Strategic hedge execution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Business Model & Monetization */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6]"></span>
            <h2 className="text-[16px] font-semibold text-[#dae2fd]">Monetization Engine</h2>
          </div>
          <span className="text-[11px] font-mono text-[#bcc9cd]">ACV $140K - $850K</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Tier 1 */}
          <div className="rounded-xl bg-[#171f33] border border-[#3d494c]/40 p-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-[#4cd7f6] uppercase tracking-wider font-semibold">
                  TIER I • CORE REVENUE
                </span>
                <span className="text-[18px] font-bold text-[#4cd7f6] font-mono">$120K</span>
              </div>
              <h3 className="text-[15px] font-semibold text-[#dae2fd]">SaaS Platform Subscription</h3>
              <p className="text-[12px] text-[#bcc9cd] leading-relaxed">
                Tiered annual platform licensing per corporate entity. Real-time corridor telemetry, chokepoint threat radars, and standard reroute analytics.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#222a3d] flex justify-between text-[11px] font-mono text-[#869397]">
              <span>Unlimited seats / division</span>
              <span className="text-[#4edea3]">99.98% SLA</span>
            </div>
          </div>

          {/* Tier 2 */}
          <div className="rounded-xl bg-[#222a3d] border-2 border-[#4edea3] p-4 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-[#4edea3] uppercase tracking-wider font-semibold">
                  TIER II • EXPANSION
                </span>
                <span className="text-[18px] font-bold text-[#4edea3] font-mono">$350K+</span>
              </div>
              <h3 className="text-[15px] font-semibold text-[#dae2fd]">Enterprise Integration Plans</h3>
              <p className="text-[12px] text-[#bcc9cd] leading-relaxed">
                Dedicated bidirectional API integrations with SAP S/4HANA, Oracle ERP, and bespoke vessel telemetry feeds. Automated purchase reroutes and dynamic insurance dispatch.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#3d494c]/40 flex flex-wrap gap-1 text-[10px] font-mono text-[#dae2fd]">
              <span className="px-1.5 py-0.5 rounded bg-[#171f33]">REST/gRPC</span>
              <span className="px-1.5 py-0.5 rounded bg-[#171f33]">Custom TMS</span>
              <span className="px-1.5 py-0.5 rounded bg-[#171f33]">Single VPC</span>
            </div>
          </div>

          {/* Tier 3 */}
          <div className="rounded-xl bg-[#171f33] border border-[#3d494c]/40 p-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-[#ffb95f] uppercase tracking-wider font-semibold">
                  TIER III • HIGH IMPACT
                </span>
                <span className="text-[18px] font-bold text-[#ffb95f] font-mono">$180K+</span>
              </div>
              <h3 className="text-[15px] font-semibold text-[#dae2fd]">Custom Simulation Pods</h3>
              <p className="text-[12px] text-[#bcc9cd] leading-relaxed">
                Scenario stress-testing advisory, military-grade black-swan war gaming, and bespoke private simulation pods operated by senior maritime intelligence directors.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#222a3d] flex justify-between text-[11px] font-mono text-[#869397]">
              <span>War-gaming reports</span>
              <span className="text-[#ffb95f]">Dedicated Analyst</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Interactive Component: Global Corridor Threat Radar */}
      <section className="rounded-xl bg-[#171f33] border border-[#3d494c]/40 overflow-hidden shadow-md flex flex-col p-4 sm:p-5 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-[#222a3d] flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4cd7f6] text-[20px]">public</span>
            <span className="text-[13px] font-mono text-[#dae2fd] font-semibold uppercase">
              Global Corridor Threat Radar
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#4edea3] bg-[#00a572]/20 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 border border-[#4edea3]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-ping"></span>
            LIVE SIMULATION
          </span>
        </div>

        {/* SVG Threat Radar */}
        <div className="rounded-xl bg-[#060e20] border border-[#222a3d] p-4 relative flex flex-col items-center">
          <svg className="w-full h-44 text-[#4cd7f6]" fill="none" viewBox="0 0 320 160">
            <circle cx="160" cy="80" r="28" stroke="currentColor" strokeDasharray="2 3" strokeOpacity="0.2" />
            <circle cx="160" cy="80" r="56" stroke="currentColor" strokeDasharray="4 4" strokeOpacity="0.25" />
            <circle cx="160" cy="80" r="76" stroke="currentColor" strokeOpacity="0.15" />
            <line stroke="currentColor" strokeOpacity="0.2" x1="84" x2="236" y1="80" y2="80" />
            <line stroke="currentColor" strokeOpacity="0.2" x1="160" x2="160" y1="4" y2="156" />

            {/* Maritime Artery Curves */}
            <path d="M 40 92 Q 100 85 160 80 T 280 68" stroke="#4cd7f6" strokeDasharray="3 3" strokeWidth="2" />
            <path d="M 50 120 Q 110 100 160 80 T 270 110" stroke="#4edea3" strokeWidth="2.5" />
            <path d="M 90 40 Q 140 60 160 80 T 230 130" stroke="#ffb95f" strokeDasharray="4 2" strokeWidth="1.5" />

            {/* Node 1: Bab-el-Mandeb Critical Alert */}
            <circle cx="160" cy="80" fill="#ffb4ab" r="5" />
            <circle cx="160" cy="80" r="9" stroke="#ffb4ab" strokeWidth="1" className="animate-ping" style={{ transformOrigin: '160px 80px' }} />
            <text fill="#dae2fd" fontFamily="JetBrains Mono" fontSize="9" fontWeight="600" x="170" y="76">
              BAB-EL-MANDEB
            </text>
            <text fill="#ffb4ab" fontFamily="JetBrains Mono" fontSize="7.5" x="170" y="87">
              ALERT: HIGH VECTOR
            </text>

            {/* Node 2: Malacca */}
            <circle cx="240" cy="72" fill="#4edea3" r="4" />
            <text fill="#dae2fd" fontFamily="JetBrains Mono" fontSize="8" x="246" y="70">MALACCA</text>
            <text fill="#4edea3" fontFamily="JetBrains Mono" fontSize="7" x="246" y="80">CLEARED</text>

            {/* Node 3: Panama Transit */}
            <circle cx="80" cy="90" fill="#4cd7f6" r="4" />
            <text fill="#dae2fd" fontFamily="JetBrains Mono" fontSize="8" x="32" y="104">PANAMA CORRIDOR</text>
            <text fill="#4cd7f6" fontFamily="JetBrains Mono" fontSize="7" x="32" y="114">SLOT OPTIMIZED</text>
          </svg>

          {/* Interactive corridor switcher */}
          <div className="w-full flex items-center justify-between gap-2 mt-3 pt-2 border-t border-[#222a3d]">
            <button
              onClick={() => setActiveCorridor('red-sea')}
              className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-mono text-center transition-colors ${
                activeCorridor === 'red-sea'
                  ? 'bg-[#4cd7f6] text-[#003640] font-semibold'
                  : 'bg-[#171f33] text-[#bcc9cd] hover:text-[#dae2fd]'
              }`}
            >
              Red Sea Axis
            </button>
            <button
              onClick={() => setActiveCorridor('panama')}
              className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-mono text-center transition-colors ${
                activeCorridor === 'panama'
                  ? 'bg-[#4cd7f6] text-[#003640] font-semibold'
                  : 'bg-[#171f33] text-[#bcc9cd] hover:text-[#dae2fd]'
              }`}
            >
              Panama Canal
            </button>
            <button
              onClick={() => setActiveCorridor('hormuz')}
              className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-mono text-center transition-colors ${
                activeCorridor === 'hormuz'
                  ? 'bg-[#ffb4ab] text-[#690005] font-semibold'
                  : 'bg-[#171f33] text-[#bcc9cd] hover:text-[#dae2fd]'
              }`}
            >
              Strait of Hormuz (Disrupted)
            </button>
          </div>
        </div>
      </section>

      {/* Section 4: Quantified ROI Metrics */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6]"></span>
            <h2 className="text-[16px] font-semibold text-[#dae2fd]">Quantified ROI Metrics</h2>
          </div>
          <span className="text-[11px] font-mono text-[#869397]">VALIDATED PROOFS</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="rounded-xl bg-[#171f33] border border-[#3d494c]/40 p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[#4cd7f6]">
              <span className="material-symbols-outlined text-[22px]">timer</span>
              <span className="text-[10px] font-mono text-[#4edea3] font-semibold">-98% CYCLES</span>
            </div>
            <div className="mt-3">
              <div className="text-[26px] font-bold text-[#4cd7f6] font-mono">85%</div>
              <div className="text-[13px] font-semibold text-[#dae2fd] mt-0.5">Faster Contingency</div>
              <div className="text-[11px] text-[#bcc9cd] mt-0.5">Hours vs. weeks under active compromise.</div>
            </div>
          </div>

          <div className="rounded-xl bg-[#171f33] border border-[#3d494c]/40 p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[#4edea3]">
              <span className="material-symbols-outlined text-[22px]">alt_route</span>
              <span className="text-[10px] font-mono text-[#4edea3] font-semibold">DIVERSIFIED</span>
            </div>
            <div className="mt-3">
              <div className="text-[26px] font-bold text-[#4edea3] font-mono">60%</div>
              <div className="text-[13px] font-semibold text-[#dae2fd] mt-0.5">Reduced Chokepoints</div>
              <div className="text-[11px] text-[#bcc9cd] mt-0.5">Elimination of single-route reliance.</div>
            </div>
          </div>

          <div className="rounded-xl bg-[#171f33] border border-[#3d494c]/40 p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[#4cd7f6]">
              <span className="material-symbols-outlined text-[22px]">visibility</span>
              <span className="text-[10px] font-mono text-[#4cd7f6] font-semibold">ZERO BLINDSPOTS</span>
            </div>
            <div className="mt-3">
              <div className="text-[26px] font-bold text-[#4cd7f6] font-mono">100%</div>
              <div className="text-[13px] font-semibold text-[#dae2fd] mt-0.5">Supply Visibility</div>
              <div className="text-[11px] text-[#bcc9cd] mt-0.5">Multi-modal global telemetry coverage.</div>
            </div>
          </div>

          <div className="rounded-xl bg-[#171f33] border border-[#3d494c]/40 p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[#ffb95f]">
              <span className="material-symbols-outlined text-[22px]">speed</span>
              <span className="text-[10px] font-mono text-[#ffb95f] font-semibold">VELOCITY ALPHA</span>
            </div>
            <div className="mt-3">
              <div className="text-[26px] font-bold text-[#ffb95f] font-mono">4.2x</div>
              <div className="text-[13px] font-semibold text-[#dae2fd] mt-0.5">Decision Speed</div>
              <div className="text-[11px] text-[#bcc9cd] mt-0.5">Executive sign-off from automated runs.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Module */}
      <section className="rounded-xl bg-[#222a3d] border border-[#4cd7f6]/30 p-5 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#4cd7f6]/20 text-[#4cd7f6] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[22px]">rocket_launch</span>
          </div>
          <div>
            <h3 className="text-[15px] font-semibold text-[#dae2fd]">
              Initiate Enterprise GTM Deployment Pod
            </h3>
            <p className="text-[12px] text-[#bcc9cd]">
              Deploy targeted account campaign with dynamic corridor stress-audits.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={handleLaunchPilot}
            disabled={isLaunchingPilot || pilotLaunched}
            className={`flex-1 sm:flex-initial py-3 px-5 rounded-xl font-semibold text-[13px] font-mono flex items-center justify-center gap-2 transition-all shadow-md ${
              pilotLaunched
                ? 'bg-[#4edea3] text-[#003824]'
                : 'bg-[#4cd7f6] text-[#003640] hover:bg-[#acedff]'
            }`}
          >
            {isLaunchingPilot ? (
              <>
                <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
                Deploying Pod...
              </>
            ) : pilotLaunched ? (
              <>
                <span className="material-symbols-outlined text-[18px]">check</span>
                Pilot Sequence Active
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[18px]">play_circle</span>
                Launch Pilot Sequence
              </>
            )}
          </button>
        </div>
      </section>
    </div>
  );
};
