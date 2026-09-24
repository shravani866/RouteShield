import React from 'react';
import { AIS_ASSETS } from '../../data/mockData';
import { AppView, BusinessProfile } from '../../types';

interface DashboardViewProps {
  setCurrentView: (view: AppView) => void;
  profile: BusinessProfile;
  onOpenDisclaimer: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  setCurrentView,
  profile,
  onOpenDisclaimer,
}) => {
  return (
    <div className="flex flex-col w-full space-y-4">
      {/* 1. Persona & Product Statement Hub */}
      <section className="w-full rounded-xl bg-[#171f33] border border-[#3d494c]/40 p-3 sm:p-4 space-y-2 shadow-sm">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#06b6d4]/15 border border-[#4cd7f6]/30 text-[#4cd7f6] text-[11px] font-mono">
            <span className="material-symbols-outlined text-[14px]">badge</span>
            <span className="font-semibold tracking-wider uppercase">TARGET USER:</span>
            <span>Enterprise Energy Procurement / Supply Chain Decision Maker</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-[#222a3d] text-[#ffb95f] text-[10px] font-mono uppercase tracking-wider font-semibold border border-[#ffb95f]/20">
            Decision-Support Mode
          </span>
        </div>
        <p className="text-[14px] leading-snug text-[#dae2fd] font-medium tracking-tight">
          Assess exposure. Compare alternatives. Simulate scenarios. Build a contingency plan.
        </p>
      </section>

      {/* 2. Status Banner: Hormuz Primary Intercept */}
      <section className="w-full rounded-xl bg-[#222a3d] p-4 sm:p-5 relative overflow-hidden shadow-lg border border-[#3d494c]/40">
        {/* Illustrative Scenario Pill */}
        <div className="mb-3 py-1 px-3 rounded bg-[#2d3449] flex items-center justify-between text-[#bcc9cd] text-[11px] font-mono border border-[#3d494c]/40 relative z-10">
          <span className="flex items-center gap-1.5 text-[#ffb95f] font-semibold">
            <span className="material-symbols-outlined text-[14px]">science</span>
            ILLUSTRATIVE SCENARIO // SIMULATED INCIDENT
          </span>
          <button
            onClick={onOpenDisclaimer}
            className="px-1.5 py-0.5 rounded bg-[#e79400]/20 text-[#ffb95f] text-[10px] tracking-wider uppercase font-semibold border border-[#ffb95f]/30 hover:bg-[#e79400]/30 transition-colors"
          >
            SAMPLE DATA
          </button>
        </div>

        <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-[#93000a]/20 blur-3xl pointer-events-none"></div>

        <div className="flex items-start justify-between gap-3 relative z-10">
          <div className="flex flex-col gap-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#93000a]/30 text-[#ffb4ab] text-[11px] font-mono font-semibold border border-[#ffb4ab]/30">
                <span className="w-2 h-2 rounded-full bg-[#ffb4ab] animate-ping"></span>
                STRAIT OF HORMUZ // DISRUPTED
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#2d3449] text-[#bcc9cd] text-[11px] font-mono">
                <span className="material-symbols-outlined text-[13px] text-[#4cd7f6]">satellite_alt</span>
                RADAR-09 INTEL
              </span>
            </div>

            <h2 className="text-[20px] sm:text-[24px] text-[#dae2fd] font-semibold tracking-tight mt-1">
              Active Maritime Bottleneck
            </h2>

            <div className="text-[12px] text-[#bcc9cd] flex items-center gap-2 mt-0.5 flex-wrap">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px] text-[#ffb95f]">timelapse</span>
                Day 14
                <span className="px-1 py-0.2 rounded bg-[#060e20] text-[#ffb95f] text-[9px] font-mono border border-[#ffb95f]/30 font-semibold">
                  SAMPLE DATA
                </span>
              </span>
              <span className="text-[#869397]">|</span>
              <span className="flex items-center gap-1">
                Est. 45–60 days blockage window
                <span className="px-1 py-0.2 rounded bg-[#060e20] text-[#ffb95f] text-[9px] font-mono border border-[#ffb95f]/30 font-semibold">
                  ILLUSTRATIVE SCENARIO
                </span>
              </span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col items-end">
            <div className="w-10 h-10 rounded-xl bg-[#171f33] border border-[#ffb4ab]/30 flex items-center justify-center text-[#ffb4ab] shadow-inner">
              <span className="material-symbols-outlined text-[24px]">crisis_alert</span>
            </div>
            <span className="text-[11px] font-mono text-[#ffb4ab] font-bold mt-1 tracking-wider">
              DEFCON 2
            </span>
          </div>
        </div>

        {/* Live Telemetry Stream Indicator */}
        <div className="mt-4 pt-2 border-t border-[#3d494c]/30 flex items-center justify-between text-[11px] font-mono text-[#bcc9cd] flex-wrap gap-2">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
            AUTOMATED AIS REROUTE ACTIVE
          </span>
          <span className="text-[#4cd7f6] font-medium flex items-center gap-1.5">
            <span>84 TANKERS DIVERTED</span>
            <span className="px-1.5 py-0.2 rounded bg-[#171f33] text-[#4cd7f6] text-[9px] font-semibold border border-[#4cd7f6]/30">
              SAMPLE DATA
            </span>
          </span>
        </div>
      </section>

      {/* 3. Route Vector Geopolitical Telemetry & Map Snippet */}
      <section className="w-full rounded-xl bg-[#171f33] p-4 sm:p-5 shadow-md space-y-3 border border-[#3d494c]/40">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4cd7f6] text-[20px]">explore</span>
            <span className="text-[13px] font-mono text-[#dae2fd] uppercase tracking-wider font-semibold">
              Tactical Corridor Delta
            </span>
          </div>
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#2d3449] text-[#ffb95f] flex items-center gap-1.5 border border-[#ffb95f]/30">
            <span>Cape Detour: +14.2 Days</span>
            <span className="px-1 py-0.2 rounded bg-[#060e20] text-[9px] font-semibold">SAMPLE DATA</span>
          </span>
        </div>

        {/* Interactive Tactical Map Visualizer */}
        <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden bg-[#060e20] border border-[#222a3d]">
          {/* Subtle grid lines */}
          <div className="absolute inset-0 bg-[radial-gradient(#222a3d_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#060e20] via-transparent to-transparent pointer-events-none"></div>

          {/* SVG Maritime Lane Vectors */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 400 200">
            <defs>
              <linearGradient id="detourVectorDash" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4edea3" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#4cd7f6" stopOpacity="1" />
                <stop offset="100%" stopColor="#4edea3" stopOpacity="0.5" />
              </linearGradient>
            </defs>

            {/* Continents stylized outline / water bodies */}
            <path
              d="M 20 80 Q 70 60 110 90 T 170 120 T 230 170"
              fill="none"
              stroke="#222a3d"
              strokeWidth="1.5"
            />
            {/* Africa continent hint */}
            <path
              d="M 120 70 C 100 110, 140 180, 200 180 C 230 180, 250 140, 220 90"
              fill="#131b2e"
              opacity="0.3"
            />

            {/* Blocked Chokepoint (Strait of Hormuz) */}
            <circle cx="280" cy="70" r="16" fill="#93000a" opacity="0.25" />
            <circle cx="280" cy="70" r="10" stroke="#ffb4ab" strokeWidth="1.5" strokeDasharray="3 2" className="animate-pulse" />
            <line x1="268" y1="58" x2="292" y2="82" stroke="#ffb4ab" strokeWidth="3" strokeLinecap="round" />
            <line x1="268" y1="82" x2="292" y2="58" stroke="#ffb4ab" strokeWidth="3" strokeLinecap="round" />

            {/* Detour Path around Horn / Cape of Good Hope */}
            <path
              d="M 270 95 Q 260 140 220 185 T 140 160 T 90 90 T 70 30"
              fill="none"
              stroke="url(#detourVectorDash)"
              strokeWidth="3"
              strokeDasharray="6 4"
              className="animate-pulse"
            />

            {/* Origin & Destination Nodes */}
            <circle cx="295" cy="85" r="4.5" fill="#ffb95f" />
            <circle cx="65" cy="25" r="5.5" fill="#4edea3" />
          </svg>

          {/* Tactical Overlays */}
          <div className="absolute top-2.5 left-2.5 z-20 flex flex-col gap-1.5">
            <div className="px-2.5 py-1 rounded bg-[#060e20]/90 backdrop-blur-md text-[#ffb4ab] text-[11px] font-mono flex items-center gap-1.5 shadow-sm border border-[#ffb4ab]/30">
              <span className="material-symbols-outlined text-[13px]">block</span>
              <span>HORMUZ CORRIDOR CLOSED (26°34'N 56°15'E)</span>
            </div>
          </div>

          <div className="absolute bottom-2.5 left-2.5 right-2.5 z-20 flex items-center justify-between text-[#dae2fd] text-[11px] font-mono">
            <div className="px-2.5 py-1 rounded bg-[#060e20]/90 backdrop-blur-md flex items-center gap-1.5 text-[#4edea3] border border-[#4edea3]/30">
              <span className="material-symbols-outlined text-[14px]">turn_sharp_right</span>
              <span>CAPE OF GOOD HOPE (ACTIVE TRANSIT)</span>
            </div>
            <span className="px-2.5 py-1 rounded bg-[#222a3d]/90 text-[#bcc9cd] flex items-center gap-1 border border-[#3d494c]">
              <span>11.4k nm</span>
              <span className="text-[9px] text-[#ffb95f]">SAMPLE</span>
            </span>
          </div>
        </div>
      </section>

      {/* 4. 2x2 Mission Critical Metric Cards Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
        {/* Card 1: Supply Exposure */}
        <div className="w-full rounded-xl bg-[#171f33] p-4 flex flex-col justify-between shadow-md border border-[#3d494c]/40 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#bcc9cd] uppercase tracking-wider">
              Supply Exposure
            </span>
            <span className="material-symbols-outlined text-[#ffb4ab] text-[20px]">oil_barrel</span>
          </div>
          <div className="mt-2">
            <div className="flex items-baseline gap-2">
              <span className="text-[28px] font-semibold text-[#dae2fd] font-mono tabular-nums tracking-tight">
                {profile.supplierDependencyPercent}%
              </span>
              <span className="px-1.5 py-0.5 rounded bg-[#93000a]/30 text-[#ffb4ab] text-[9px] font-mono font-semibold border border-[#ffb4ab]/30">
                SAMPLE DATA
              </span>
            </div>
            <div className="text-[12px] text-[#bcc9cd]">Gulf Dependent</div>
          </div>
          <div className="mt-3 w-full">
            <div className="w-full h-1.5 rounded-full bg-[#2d3449] overflow-hidden">
              <div
                className="h-full bg-[#ffb4ab] rounded-full transition-all duration-500"
                style={{ width: `${profile.supplierDependencyPercent}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center mt-1 text-[10px] font-mono text-[#ffb4ab]">
              <span>High Severity</span>
              <span>+12% YoY</span>
            </div>
          </div>
        </div>

        {/* Card 2: Supply Risk Score */}
        <div className="w-full rounded-xl bg-[#171f33] p-4 flex flex-col justify-between shadow-md border border-[#3d494c]/40 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#bcc9cd] uppercase tracking-wider">
              Supply Risk
            </span>
            <span className="material-symbols-outlined text-[#ffb4ab] text-[20px]">
              shield_with_heart
            </span>
          </div>
          <div className="mt-2">
            <div className="flex items-baseline gap-1">
              <span className="text-[28px] font-semibold text-[#ffb4ab] font-mono tabular-nums tracking-tight">
                89
              </span>
              <span className="text-[14px] text-[#bcc9cd] font-mono">/100</span>
              <span className="px-1.5 py-0.5 rounded bg-[#93000a]/30 text-[#ffb4ab] text-[9px] font-mono font-semibold border border-[#ffb4ab]/30 ml-1">
                SAMPLE DATA
              </span>
            </div>
            <div className="text-[12px] text-[#ffb4ab] font-medium">CRITICAL THREAT</div>
          </div>
          <div className="mt-3 w-full">
            <div className="grid grid-cols-3 gap-1 h-1.5 w-full">
              <div className="bg-[#4edea3] rounded-full"></div>
              <div className="bg-[#ffb95f] rounded-full"></div>
              <div className="bg-[#ffb4ab] rounded-full animate-pulse"></div>
            </div>
            <div className="flex justify-between items-center mt-1 text-[10px] font-mono text-[#bcc9cd]">
              <span>Target &lt;35</span>
              <span className="text-[#ffb4ab] font-semibold">Tier-4</span>
            </div>
          </div>
        </div>

        {/* Card 3: Inventory Coverage */}
        <div className="w-full rounded-xl bg-[#171f33] p-4 flex flex-col justify-between shadow-md border border-[#3d494c]/40 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#bcc9cd] uppercase tracking-wider">
              Inventory
            </span>
            <span className="material-symbols-outlined text-[#ffb95f] text-[20px]">
              hourglass_bottom
            </span>
          </div>
          <div className="mt-2">
            <div className="flex items-baseline gap-2">
              <span className="text-[28px] font-semibold text-[#dae2fd] font-mono tabular-nums tracking-tight">
                {profile.currentInventoryDays} Days
              </span>
              <span className="px-1.5 py-0.5 rounded bg-[#e79400]/25 text-[#ffb95f] text-[9px] font-mono font-semibold border border-[#ffb95f]/30">
                SAMPLE DATA
              </span>
            </div>
            <div className="text-[12px] text-[#ffb95f]">Remaining Stock</div>
          </div>
          <div className="mt-3 w-full">
            <div className="w-full h-1.5 rounded-full bg-[#2d3449] overflow-hidden">
              <div
                className="h-full bg-[#ffb95f] rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (profile.currentInventoryDays / 30) * 100)}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center mt-1 text-[10px] font-mono text-[#ffb95f]">
              <span>Burn: 1.4M bpd</span>
              <span>Deficit D-{profile.currentInventoryDays}</span>
            </div>
          </div>
        </div>

        {/* Card 4: Cost Exposure */}
        <div className="w-full rounded-xl bg-[#171f33] p-4 flex flex-col justify-between shadow-md border border-[#3d494c]/40 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#bcc9cd] uppercase tracking-wider">
              Cost Exposure
            </span>
            <span className="material-symbols-outlined text-[#4cd7f6] text-[20px]">trending_up</span>
          </div>
          <div className="mt-2">
            <div className="flex items-baseline gap-2">
              <span className="text-[28px] font-semibold text-[#dae2fd] font-mono tabular-nums tracking-tight">
                +$4.2M
              </span>
              <span className="px-1.5 py-0.5 rounded bg-[#06b6d4]/20 text-[#4cd7f6] text-[9px] font-mono font-semibold border border-[#4cd7f6]/30">
                SAMPLE DATA
              </span>
            </div>
            <div className="text-[12px] text-[#bcc9cd]">Projected Deficit</div>
          </div>
          <div className="mt-3 w-full">
            <div className="w-full h-1.5 rounded-full bg-[#2d3449] overflow-hidden">
              <div className="h-full bg-[#4cd7f6] rounded-full" style={{ width: '78%' }}></div>
            </div>
            <div className="flex justify-between items-center mt-1 text-[10px] font-mono text-[#4cd7f6]">
              <span>Daily Surge</span>
              <span className="font-semibold">+28% spot</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Commodity Fleet Satellite Radar Mini-List */}
      <section className="w-full rounded-xl bg-[#171f33] p-4 shadow-md space-y-3 border border-[#3d494c]/40">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="text-[13px] font-mono text-[#dae2fd] uppercase tracking-wider flex items-center gap-2 font-semibold">
            <span className="material-symbols-outlined text-[18px] text-[#4cd7f6]">directions_boat</span>
            Tracked High-Value Assets (Red Sea & Gulf)
          </h3>
          <span className="text-[11px] font-mono text-[#bcc9cd] flex items-center gap-1.5">
            <span>Live AIS Feed</span>
            <span className="px-1.5 py-0.2 rounded bg-[#222a3d] text-[#ffb95f] text-[9px] font-semibold border border-[#ffb95f]/30">
              SAMPLE
            </span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {AIS_ASSETS.map((asset) => (
            <div
              key={asset.id}
              className="flex items-center justify-between p-3 rounded-lg bg-[#131b2e] border border-[#222a3d] hover:border-[#3d494c] transition-colors"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    asset.status === 'Rerouted'
                      ? 'bg-[#93000a]/20 text-[#ffb4ab]'
                      : 'bg-[#00a572]/20 text-[#4edea3]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">navigation</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[13px] text-[#dae2fd] font-medium truncate font-mono">
                    {asset.name}
                  </span>
                  <span className="text-[11px] text-[#bcc9cd] truncate">
                    {asset.cargo} <span className="text-[#ffb95f] text-[10px] font-mono">[Sample]</span>
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-end shrink-0 pl-2">
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold ${
                    asset.status === 'Rerouted'
                      ? 'bg-[#93000a]/30 text-[#ffb4ab] border border-[#ffb4ab]/30'
                      : 'bg-[#00a572]/30 text-[#4edea3] border border-[#4edea3]/30'
                  }`}
                >
                  {asset.status}
                </span>
                <span className="text-[10px] font-mono text-[#bcc9cd] mt-0.5">
                  {asset.etaDelta} <span className="text-[#869397] text-[9px]">Sample</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. AI Decision-Support // Option Synthesis Hub */}
      <section className="w-full rounded-xl bg-[#222a3d] p-5 shadow-xl relative overflow-hidden border border-[#4cd7f6]/30">
        <div className="mb-3 py-1 px-3 rounded bg-[#2d3449] flex items-center justify-between text-[#bcc9cd] text-[11px] font-mono border border-[#3d494c]/40 relative z-10">
          <span className="flex items-center gap-1.5 text-[#ffb95f] font-semibold">
            <span className="material-symbols-outlined text-[14px]">psychology</span>
            AI DECISION-SUPPORT // OPTION SYNTHESIS
          </span>
          <span className="px-1.5 py-0.2 rounded bg-[#e79400]/20 text-[#ffb95f] text-[10px] tracking-wider uppercase font-semibold border border-[#ffb95f]/30">
            SAMPLE DATA
          </span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#4cd7f6]/10 via-[#06b6d4]/5 to-transparent pointer-events-none"></div>

        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4cd7f6] text-[24px]">psychology</span>
              <h3 className="text-[18px] sm:text-[20px] text-[#dae2fd] font-semibold tracking-tight">
                AI Contingency Matrix
              </h3>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#4cd7f6]/20 text-[#4cd7f6] flex items-center gap-1.5 border border-[#4cd7f6]/30">
              <span>3 Options Synthesized</span>
              <span className="text-[9px] text-[#ffb95f] font-semibold">[Sample]</span>
            </span>
          </div>

          {/* Prominent Human Authority Notice */}
          <div className="rounded-xl bg-[#131b2e]/90 border border-[#4edea3]/30 p-3.5 space-y-1.5 shadow-sm">
            <div className="flex items-center gap-2 text-[#4edea3] text-[12px] font-mono font-semibold">
              <span className="material-symbols-outlined text-[16px]">how_to_reg</span>
              <span>Human Decision Authority Retained</span>
            </div>
            <p className="text-[13px] text-[#bcc9cd] leading-relaxed">
              RouteShield AI operates strictly as{' '}
              <strong className="text-[#dae2fd]">decision-support</strong>: the AI models
              multidimensional tradeoffs, forecasts depletion risks, and generates candidate
              strategies, while the{' '}
              <strong className="text-[#4cd7f6]">human enterprise decision maker</strong> reviews
              alternatives, adjusts operational levers, and makes the final binding authorization.
            </p>
          </div>

          <p className="text-[13px] text-[#bcc9cd] leading-relaxed">
            Synthetic pipeline routing models indicate full inventory depletion in{' '}
            <strong className="text-[#ffb95f] font-mono">{profile.currentInventoryDays} days</strong>{' '}
            unless alternative discharge contracts (East-West Pipeline / Fujairah offload or Atlantic
            direct) are secured.
          </p>

          {/* Primary Tactical CTA Button */}
          <button
            onClick={() => setCurrentView('profile')}
            className="w-full h-12 rounded-xl bg-[#4cd7f6] text-[#003640] text-[15px] font-semibold flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(76,215,246,0.35)] active:scale-[0.98] hover:bg-[#acedff] transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">tune</span>
            <span>Build Alternative Plan (Configure Profile)</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>

          <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-[#bcc9cd] flex-wrap">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#4edea3]">verified_user</span>
              Human-in-the-Loop Review
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#4cd7f6]">model_training</span>
              Scenario Simulator Available
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#ffb95f]">science</span>
              Illustrative Scenarios
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
