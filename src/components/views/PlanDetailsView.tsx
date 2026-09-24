import React, { useState } from 'react';
import { StrategyOption, BusinessProfile, AppView } from '../../types';
import { PIPELINE_NODES } from '../../data/mockData';

interface PlanDetailsViewProps {
  strategy: StrategyOption;
  profile: BusinessProfile;
  setCurrentView: (view: AppView) => void;
  onOpenExportModal: () => void;
  onOpenDisclaimer: () => void;
}

export const PlanDetailsView: React.FC<PlanDetailsViewProps> = ({
  strategy,
  profile,
  setCurrentView,
  onOpenExportModal,
  onOpenDisclaimer,
}) => {
  const [activeVectorIndex, setActiveVectorIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-full space-y-4">
      {/* Header Banner */}
      <section className="w-full rounded-xl bg-[#222a3d] p-4 sm:p-5 border border-[#3d494c]/40 relative overflow-hidden shadow-lg">
        <div className="flex items-center justify-between pb-2 border-b border-[#3d494c]/30 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
            <span className="text-[11px] font-mono text-[#4edea3] uppercase tracking-wider font-semibold">
              LIVE DIRECTIVE STATE
            </span>
            <span className="text-[#869397] font-mono text-[11px]">|</span>
            <span className="text-[11px] font-mono text-[#dae2fd]">
              {strategy.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#171f33] text-[#4cd7f6] border border-[#4cd7f6]/30">
              REV 4.2-E
            </span>
            <button
              onClick={onOpenDisclaimer}
              className="text-[10px] font-mono text-[#ffb95f] px-2 py-0.5 rounded bg-[#e79400]/20 border border-[#ffb95f]/30 hover:bg-[#e79400]/30 transition-colors"
            >
              SAMPLE DATA
            </button>
          </div>
        </div>

        <div className="mt-3">
          <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#dae2fd] tracking-tight">
            End-to-End Operational Trajectory
          </h2>
          <p className="text-[13px] text-[#bcc9cd] mt-0.5 leading-relaxed">
            Direct operational routing from upstream off-take terminals to customer distribution.
            All steps pre-validated against IMO maritime compliance and port slot quotas.
          </p>
        </div>
      </section>

      {/* END-TO-END CHAIN TRAJECTORY (6 Vectors) */}
      <section className="rounded-xl bg-[#171f33] border border-[#3d494c]/40 p-4 sm:p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-[#222a3d]">
          <span className="text-[12px] font-mono text-[#4cd7f6] uppercase tracking-wider font-semibold flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">timeline</span>
            END-TO-END CHAIN TRAJECTORY
          </span>
          <span className="text-[11px] font-mono text-[#869397]">6 Vectors Synchronized</span>
        </div>

        {/* 6 Vectors Stack */}
        <div className="space-y-2.5">
          {PIPELINE_NODES.map((node, index) => {
            const isExpanded = activeVectorIndex === index;

            return (
              <div
                key={node.step}
                onClick={() => setActiveVectorIndex(isExpanded ? null : index)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                  isExpanded
                    ? 'bg-[#222a3d] border-[#4cd7f6] shadow-md'
                    : 'bg-[#131b2e] border-[#222a3d] hover:border-[#3d494c]'
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Step Number Badge */}
                  <div className="w-8 h-8 rounded-lg bg-[#171f33] border border-[#2d3449] flex items-center justify-center text-[#4cd7f6] font-mono text-[12px] font-bold shrink-0 mt-0.5">
                    {node.step}
                  </div>

                  {/* Body Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-0.5">
                      <span className="text-[10px] font-mono text-[#869397] uppercase tracking-wider font-semibold">
                        {node.step} / {node.role}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#00a572]/20 border border-[#4edea3]/30 text-[#4edea3] font-semibold">
                        {node.statusBadge}
                      </span>
                    </div>

                    <div className="text-[14px] sm:text-[15px] font-semibold text-[#dae2fd]">
                      {node.title}
                    </div>

                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="text-[11px] font-mono text-[#4edea3] flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px]">check_circle</span>
                        {node.metricBadge}
                      </span>
                      <span className="text-[#3d494c]">·</span>
                      <span className="text-[11px] text-[#bcc9cd]">{node.subtitle}</span>
                    </div>
                  </div>

                  <span className="material-symbols-outlined text-[#869397] text-[18px] shrink-0 mt-1">
                    {isExpanded ? 'expand_less' : 'chevron_right'}
                  </span>
                </div>

                {/* Expanded Vector Details */}
                {isExpanded && (
                  <div className="mt-3 pt-3 border-t border-[#2d3449] grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono text-[#bcc9cd]">
                    <div className="p-2 rounded bg-[#0b1326]">
                      <span className="text-[#869397] block">SLA Assurance:</span>
                      <span className="text-[#dae2fd]">99.8% Guaranteed Delivery Commitment</span>
                    </div>
                    <div className="p-2 rounded bg-[#0b1326]">
                      <span className="text-[#869397] block">API Telemetry Link:</span>
                      <span className="text-[#4cd7f6]">ROT_BERTH_4_TELEMETRY_LIVE</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Dependencies, Risks & Contingency Actions Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Key Dependencies */}
        <div className="rounded-xl bg-[#171f33] border border-[#3d494c]/40 p-4 space-y-2 shadow-sm">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#4cd7f6] font-semibold">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">hub</span>
              KEY DEPENDENCIES
            </span>
          </div>
          <div className="text-[14px] font-semibold text-[#dae2fd]">
            Berth allocation at Rotterdam, VLCC offloading slot lock-in
          </div>
          <div className="mt-2 pt-2 border-t border-[#222a3d] flex items-center justify-between text-[11px] font-mono">
            <span className="text-[#4cd7f6] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6]"></span>
              Port Berth Desk Sync
            </span>
            <span className="text-[#ffb95f]">T-Minus 36h Confirmation</span>
          </div>
        </div>

        {/* Critical Risks */}
        <div className="rounded-xl bg-[#171f33] border border-[#ffb4ab]/30 p-4 space-y-2 shadow-sm">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#ffb4ab] font-semibold">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">warning</span>
              CRITICAL RISKS
            </span>
            <span className="px-1.5 py-0.2 rounded bg-[#93000a]/20 text-[#ffb4ab] text-[9px]">
              High Sensitivity
            </span>
          </div>
          <div className="text-[14px] font-semibold text-[#dae2fd]">
            Bunker fuel volatility (+/- 8%), North Sea weather delays
          </div>
          <div className="mt-2 pt-2 border-t border-[#222a3d] flex items-center justify-between text-[11px] font-mono">
            <span className="text-[#bcc9cd]">Fuel Volatility Vector</span>
            <span className="text-[#ffb4ab] font-bold">±8.4% Variance</span>
          </div>
        </div>

        {/* Contingency Actions */}
        <div className="rounded-xl bg-[#171f33] border border-[#4edea3]/30 p-4 space-y-2 shadow-sm">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#4edea3] font-semibold">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">sync</span>
              CONTINGENCY ACTIONS
            </span>
          </div>
          <div className="text-[14px] font-semibold text-[#dae2fd]">
            Trigger 14-day supply forward contracts, hedge spot crack spreads
          </div>
          <div className="mt-2 pt-2 border-t border-[#222a3d] flex items-center justify-between text-[11px] font-mono">
            <span className="text-[#4edea3]">Forward 14-Day Supply</span>
            <span className="text-[#4edea3]">Hedge Enforced</span>
          </div>
        </div>
      </div>

      {/* Inventory Buffer & AI Operational Dispatch */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Inventory Buffer Card */}
        <div className="rounded-xl bg-[#171f33] border border-[#3d494c]/40 p-4 space-y-3 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-mono text-[#dae2fd] uppercase tracking-wider font-semibold flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#4cd7f6]">inventory</span>
              INVENTORY BUFFER STATUS
            </span>
            <span className="text-[11px] font-mono text-[#ffb95f] px-2 py-0.5 rounded bg-[#e79400]/20 border border-[#ffb95f]/30">
              +3 Days Safety Stock Required
            </span>
          </div>

          <p className="text-[13px] text-[#bcc9cd]">
            Minimum 22 days safety stock needed. Current inventory on-hand is{' '}
            <strong className="text-[#dae2fd] font-mono">{profile.currentInventoryDays} days</strong>.
          </p>

          <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] font-mono">
              <span className="text-[#bcc9cd]">Safety Reserve Capacity</span>
              <span className="text-[#ffb95f] font-bold">19 / 22 Days (86%)</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#0b1326] overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#4edea3] to-[#ffb95f] rounded-full" style={{ width: '86%' }}></div>
            </div>
            <div className="flex justify-between text-[10px] font-mono text-[#869397]">
              <span>Current: {profile.currentInventoryDays} Days On-Hand</span>
              <span>Target: 22 Days Buffer</span>
            </div>
          </div>
        </div>

        {/* AI Operational Dispatch Card */}
        <div className="rounded-xl bg-[#222a3d] border border-[#4cd7f6]/40 p-4 space-y-3 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-mono text-[#4cd7f6] uppercase tracking-wider font-semibold flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">smart_toy</span>
              AI OPERATIONAL DISPATCH
            </span>
            <span className="text-[11px] font-mono text-[#4edea3] px-2 py-0.5 rounded bg-[#00a572]/20 border border-[#4edea3]/30">
              Confidence 96.4%
            </span>
          </div>

          <blockquote className="text-[14px] text-[#dae2fd] italic font-serif leading-snug border-l-2 border-[#4cd7f6] pl-3 py-0.5">
            "Execute off-take options within 48h to lock in sub-$2M freight premiums."
          </blockquote>

          <div className="pt-2 border-t border-[#3d494c]/30 flex items-center justify-between text-[11px] font-mono text-[#bcc9cd]">
            <span className="flex items-center gap-1 text-[#ffb95f]">
              <span className="material-symbols-outlined text-[14px]">timer</span>
              Window Closes: 47h 12m
            </span>
            <span className="text-[#4edea3] font-bold">Est. Savings: $340,000 [Sample]</span>
          </div>
        </div>
      </div>

      {/* Styled Tactical Media Panels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Berth Telemetry Rotterdam Complex */}
        <div className="relative rounded-xl overflow-hidden bg-[#060e20] border border-[#222a3d] h-36 flex flex-col justify-between p-3.5">
          <div className="absolute inset-0 bg-[radial-gradient(#171f33_1px,transparent_1px)] [background-size:12px_12px] opacity-60"></div>
          {/* SVG schematic background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 200 100">
            <line x1="10" y1="20" x2="190" y2="20" stroke="#4cd7f6" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="10" y1="50" x2="190" y2="50" stroke="#4edea3" strokeWidth="1" />
            <rect x="40" y="35" width="50" height="30" fill="none" stroke="#4cd7f6" strokeWidth="1.5" />
            <circle cx="65" cy="50" r="3" fill="#4edea3" />
            <text x="75" y="53" fill="#dae2fd" fontSize="8" fontFamily="monospace">BERTH 4</text>
          </svg>
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#4cd7f6]">
            <span>BERTH TELEMETRY LIVE</span>
            <span className="text-[#4edea3]">● SLOT LOCKED</span>
          </div>
          <div className="relative z-10">
            <div className="text-[13px] font-semibold text-[#dae2fd]">Port of Rotterdam Deepwater Berth 4</div>
            <div className="text-[11px] text-[#bcc9cd] font-mono">ARA Refining Corridor • VLCC Ready</div>
          </div>
        </div>

        {/* Atlantic Corridor VLCC West Africa Route */}
        <div className="relative rounded-xl overflow-hidden bg-[#060e20] border border-[#222a3d] h-36 flex flex-col justify-between p-3.5">
          <div className="absolute inset-0 bg-[radial-gradient(#171f33_1px,transparent_1px)] [background-size:12px_12px] opacity-60"></div>
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 200 100">
            <path d="M 20 80 Q 70 30 180 20" fill="none" stroke="#4edea3" strokeWidth="2" strokeDasharray="4 2" />
            <circle cx="100" cy="45" r="4" fill="#4cd7f6" />
            <circle cx="100" cy="45" r="8" stroke="#4cd7f6" strokeWidth="1" strokeDasharray="2 2" />
            <text x="112" y="48" fill="#dae2fd" fontSize="8" fontFamily="monospace">VLCC VECTOR</text>
          </svg>
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#4edea3]">
            <span>ATLANTIC CORRIDOR LANE</span>
            <span className="text-[#4cd7f6]">ETA ON SCHEDULE</span>
          </div>
          <div className="relative z-10">
            <div className="text-[13px] font-semibold text-[#dae2fd]">VLCC West Africa to North Sea Route</div>
            <div className="text-[11px] text-[#bcc9cd] font-mono">Bypassing Hormuz & Bab-el-Mandeb</div>
          </div>
        </div>
      </div>

      {/* Action Buttons Hub */}
      <section className="rounded-xl bg-[#222a3d] border border-[#3d494c]/40 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
        <button
          onClick={onOpenExportModal}
          className="w-full sm:w-auto py-3 px-5 rounded-xl bg-[#4cd7f6] text-[#003640] font-semibold text-[14px] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(76,215,246,0.3)] hover:bg-[#acedff] transition-all"
        >
          <span className="material-symbols-outlined text-[18px]">file_download</span>
          <span>Export Action Plan to ERP / Logistics API</span>
        </button>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => setCurrentView('simulator')}
            className="flex-1 sm:flex-initial py-3 px-4 rounded-xl bg-[#171f33] hover:bg-[#2d3449] border border-[#2d3449] text-[#dae2fd] text-[13px] font-mono flex items-center justify-center gap-1.5 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px] text-[#ffb95f]">model_training</span>
            <span>What-If Simulator</span>
          </button>

          <button
            onClick={() => setCurrentView('decision')}
            className="flex-1 sm:flex-initial py-3 px-5 rounded-xl bg-[#4edea3] text-[#003824] font-semibold text-[13px] font-mono flex items-center justify-center gap-1.5 shadow-[0_0_16px_rgba(78,222,163,0.3)] hover:bg-[#6ffbbe] transition-all"
          >
            <span>Proceed to Sign-Off</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </section>
    </div>
  );
};
