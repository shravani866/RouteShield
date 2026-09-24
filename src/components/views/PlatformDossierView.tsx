import React from 'react';
import { AppView } from '../../types';

interface PlatformDossierViewProps {
  setCurrentView: (view: AppView) => void;
  onOpenDisclaimer: () => void;
}

export const PlatformDossierView: React.FC<PlatformDossierViewProps> = ({
  setCurrentView,
  onOpenDisclaimer,
}) => {
  return (
    <div className="flex flex-col w-full space-y-4">
      {/* Executive Summary Hero Card */}
      <section className="relative overflow-hidden rounded-xl bg-[#222a3d] p-5 sm:p-6 border border-[#3d494c]/40 shadow-xl">
        <div className="flex items-center justify-between pb-2 border-b border-[#3d494c]/30 flex-wrap gap-2">
          <span className="text-[11px] font-mono text-[#4cd7f6] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6]"></span>
            EXECUTIVE SUMMARY • PLATFORM DOSSIER
          </span>
          <button
            onClick={onOpenDisclaimer}
            className="text-[10px] font-mono text-[#ffb95f] px-2 py-0.5 rounded bg-[#e79400]/20 border border-[#ffb95f]/30"
          >
            SAMPLE DATA // BRIEF
          </button>
        </div>

        <h1 className="text-[26px] sm:text-[34px] font-bold text-[#dae2fd] tracking-tight mt-3">
          From disruption to decision.
        </h1>
        <p className="text-[14px] text-[#bcc9cd] mt-2 leading-relaxed max-w-3xl">
          Sustained maritime contingency intelligence engineered for enterprise energy resilience and sovereign supply continuity.
        </p>

        {/* 3 Metric Pills */}
        <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
          <div className="p-3 rounded-lg bg-[#171f33] border border-[#222a3d]">
            <span className="text-[10px] font-mono text-[#869397] uppercase">LATENCY</span>
            <div className="text-[17px] font-bold text-[#4cd7f6] font-mono mt-0.5">&lt;0.5s</div>
          </div>
          <div className="p-3 rounded-lg bg-[#171f33] border border-[#222a3d]">
            <span className="text-[10px] font-mono text-[#869397] uppercase">COVERAGE</span>
            <div className="text-[17px] font-bold text-[#4edea3] font-mono mt-0.5">Global 100%</div>
          </div>
          <div className="p-3 rounded-lg bg-[#171f33] border border-[#222a3d]">
            <span className="text-[10px] font-mono text-[#869397] uppercase">AUDITABILITY</span>
            <div className="text-[17px] font-bold text-[#ffb95f] font-mono mt-0.5">Cryptographic</div>
          </div>
        </div>
      </section>

      {/* Contingency Pipeline Architecture (Stage 01 to 04) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between text-[11px] font-mono">
          <span className="text-[#bcc9cd] uppercase tracking-wider font-semibold">
            CONTINGENCY PIPELINE ARCHITECTURE
          </span>
          <span className="text-[#4cd7f6]">STAGE 01 → 04</span>
        </div>

        <div className="space-y-2.5">
          <div className="p-4 rounded-xl bg-[#171f33] border border-[#3d494c]/40 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#222a3d] text-[#4cd7f6] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">radar</span>
            </div>
            <div className="min-w-0">
              <div className="flex justify-between items-center text-[11px] font-mono mb-0.5">
                <span className="text-[#4cd7f6]">01. UNDERSTAND</span>
                <span className="text-[#869397]">Real-time Telemetry</span>
              </div>
              <h3 className="text-[15px] font-semibold text-[#dae2fd]">Vulnerability Baseline</h3>
              <p className="text-[12px] text-[#bcc9cd] mt-0.5 leading-relaxed">
                Quantify chokepoint dependency, inventory burn rate, and financial exposure within minutes across global crude and LNG corridors.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#171f33] border border-[#3d494c]/40 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#222a3d] text-[#ffb95f] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">tune</span>
            </div>
            <div className="min-w-0">
              <div className="flex justify-between items-center text-[11px] font-mono mb-0.5">
                <span className="text-[#ffb95f]">02. SIMULATE</span>
                <span className="text-[#869397]">Monte Carlo Engine</span>
              </div>
              <h3 className="text-[15px] font-semibold text-[#dae2fd]">Dynamic Stress Testing</h3>
              <p className="text-[12px] text-[#bcc9cd] mt-0.5 leading-relaxed">
                Stress-test prolonged geopolitical closures, spot rate spikes, and supplier refinery capacities with algorithmic precision.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#171f33] border border-[#3d494c]/40 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#222a3d] text-[#4edea3] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">balance</span>
            </div>
            <div className="min-w-0">
              <div className="flex justify-between items-center text-[11px] font-mono mb-0.5">
                <span className="text-[#4edea3]">03. COMPARE</span>
                <span className="text-[#869397]">Multi-Objective Matrix</span>
              </div>
              <h3 className="text-[15px] font-semibold text-[#dae2fd]">Trade-Off Analysis</h3>
              <p className="text-[12px] text-[#bcc9cd] mt-0.5 leading-relaxed">
                Evaluate multidimensional friction between freight costs, transit delay deviations, and residual risk across verified options.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#171f33] border border-[#3d494c]/40 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#222a3d] text-[#4cd7f6] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">verified_user</span>
            </div>
            <div className="min-w-0">
              <div className="flex justify-between items-center text-[11px] font-mono mb-0.5">
                <span className="text-[#4cd7f6]">04. DECIDE</span>
                <span className="text-[#4edea3]">Ready to Dispatch</span>
              </div>
              <h3 className="text-[15px] font-semibold text-[#dae2fd]">Deterministic Execution</h3>
              <p className="text-[12px] text-[#bcc9cd] mt-0.5 leading-relaxed">
                Deploy cryptographically auditable, end-to-end execution orders straight to charter desks, logistics partners, and ERP backbones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Quote Card */}
      <section className="rounded-xl bg-[#222a3d] border border-[#3d494c]/40 p-5 shadow-lg space-y-3 relative overflow-hidden">
        <div className="flex justify-between items-center text-[10px] font-mono text-[#ffb4ab]">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[13px]">warning</span>
            CRITICAL VULNERABILITY MITIGATION
          </span>
          <span className="text-[#bcc9cd]">SECTOR: 26°34'N 56°15'E</span>
        </div>

        <blockquote className="text-[15px] sm:text-[16px] text-[#dae2fd] italic font-serif leading-relaxed border-l-2 border-[#ffb4ab] pl-3 py-1">
          "When the Strait of Hormuz closes, enterprise downtime costs millions per hour. RouteShield transforms paralyzing uncertainty into strategic clarity, providing energy leaders with pre-validated contingency routes, diversified supply vectors, and rapid execution certainty."
        </blockquote>

        <div className="flex items-center justify-between pt-2 border-t border-[#3d494c]/30 text-[11px] font-mono">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#171f33] text-[#4cd7f6] flex items-center justify-center font-bold text-[10px]">
              RS
            </div>
            <span className="text-[#bcc9cd]">RouteShield Core Directive • Global Energy Defense Architecture</span>
          </div>
          <span className="material-symbols-outlined text-[#4cd7f6] text-[18px]">shield</span>
        </div>
      </section>

      {/* Operational Benchmark Dossier */}
      <section className="space-y-2">
        <div className="text-[11px] font-mono text-[#bcc9cd] uppercase tracking-wider font-semibold">
          OPERATIONAL BENCHMARK DOSSIER
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl bg-[#171f33] border border-[#3d494c]/40 space-y-1.5">
            <div className="flex items-center gap-2 text-[#4cd7f6] font-semibold text-[13px]">
              <span className="material-symbols-outlined text-[18px]">dns</span>
              Production-Ready Architecture
            </div>
            <p className="text-[12px] text-[#bcc9cd] leading-relaxed">
              Streaming ingest feeds from global AIS networks, bunker fuel benchmark indices, and geopolitical risk sensors natively unified.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#171f33] border border-[#3d494c]/40 space-y-1.5">
            <div className="flex items-center gap-2 text-[#4edea3] font-semibold text-[13px]">
              <span className="material-symbols-outlined text-[18px]">bolt</span>
              Sub-Second Scenario Synthesis
            </div>
            <p className="text-[12px] text-[#bcc9cd] leading-relaxed">
              Sub-500ms multi-modal recalculation comparing Cape of Good Hope reroutes, pipeline off-take bypasses, and emergency storage.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#171f33] border border-[#3d494c]/40 space-y-1.5">
            <div className="flex items-center gap-2 text-[#ffb95f] font-semibold text-[13px]">
              <span className="material-symbols-outlined text-[18px]">desktop_windows</span>
              War-Room Optimized Surface
            </div>
            <p className="text-[12px] text-[#bcc9cd] leading-relaxed">
              Ultra-high density tactical UI crafted strictly for command briefings, trading floors, and sovereign emergency boards.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <section className="pt-2">
        <button
          onClick={() => setCurrentView('simulator')}
          className="w-full py-4 rounded-xl bg-[#4cd7f6] text-[#003640] font-semibold text-[15px] flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(76,215,246,0.35)] hover:bg-[#acedff] transition-all"
        >
          <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
          <span>Launch Live Simulation Room</span>
        </button>
      </section>
    </div>
  );
};
