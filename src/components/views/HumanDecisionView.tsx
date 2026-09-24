import React, { useState } from 'react';
import { StrategyOption, BusinessProfile, AppView } from '../../types';

interface HumanDecisionViewProps {
  strategy: StrategyOption;
  profile: BusinessProfile;
  setCurrentView: (view: AppView) => void;
  onOpenExportModal: () => void;
  onOpenDisclaimer: () => void;
}

export const HumanDecisionView: React.FC<HumanDecisionViewProps> = ({
  strategy,
  profile,
  setCurrentView,
  onOpenExportModal,
  onOpenDisclaimer,
}) => {
  const [checklist, setChecklist] = useState<boolean[]>([true, true, true, true]);
  const [officerName, setOfficerName] = useState('Alexander Vance');
  const [officerRole, setOfficerRole] = useState('VP Global Energy Procurement & Supply Chain');
  const [authorizationNotes, setAuthorizationNotes] = useState(
    'Authorized execution of Hybrid Protocol S-74 with Rotterdam Berth 4 slot lock and 14-day Equinor forward option.'
  );
  const [isAuthorizing, setIsAuthorizing] = useState(false);
  const [isDispatched, setIsDispatched] = useState(false);
  const [auditHash, setAuditHash] = useState('');

  const toggleCheck = (index: number) => {
    const updated = [...checklist];
    updated[index] = !updated[index];
    setChecklist(updated);
  };

  const allChecked = checklist.every(Boolean);

  const handleAuthorize = () => {
    setIsAuthorizing(true);
    setTimeout(() => {
      const generatedHash = `SHA256:0x${Array.from({ length: 32 }, () =>
        Math.floor(Math.random() * 16).toString(16)
      ).join('')}`;
      setAuditHash(generatedHash);
      setIsAuthorizing(false);
      setIsDispatched(true);
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full space-y-4">
      {/* Header Banner */}
      <section className="w-full rounded-xl bg-[#222a3d] p-4 sm:p-5 border border-[#3d494c]/40 relative overflow-hidden shadow-lg">
        <div className="flex items-center justify-between pb-2 border-b border-[#3d494c]/30 flex-wrap gap-2">
          <span className="text-[11px] font-mono text-[#4edea3] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
            STAGE 07 // HUMAN CONTINGENCY DECISION & GOVERNANCE
          </span>
          <button
            onClick={onOpenDisclaimer}
            className="text-[10px] font-mono text-[#ffb95f] px-2 py-0.5 rounded bg-[#e79400]/20 border border-[#ffb95f]/30 hover:bg-[#e79400]/30 transition-colors"
          >
            SAMPLE DATA // AUDITABLE
          </button>
        </div>

        <div className="mt-3">
          <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#dae2fd] tracking-tight">
            Executive Decision & Formal Sign-Off
          </h2>
          <p className="text-[13px] text-[#bcc9cd] mt-0.5 leading-relaxed max-w-3xl">
            AI provides decision support and multi-vector scenario modeling, but does <strong className="text-[#dae2fd]">not</strong> make the final decision. The enterprise decision maker must review alternatives, verify governance criteria, and formally sign off on the contingency strategy.
          </p>
        </div>
      </section>

      {/* Dispatched Confirmation Banner (Shown when signed) */}
      {isDispatched && (
        <section className="rounded-xl bg-[#00a572]/15 border-2 border-[#4edea3] p-5 shadow-2xl animate-in fade-in zoom-in-95 space-y-3">
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#4edea3] text-[#003824] flex items-center justify-center font-bold shadow-[0_0_20px_rgba(78,222,163,0.5)] shrink-0">
                <span className="material-symbols-outlined text-[28px]">verified_user</span>
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#4edea3] uppercase tracking-wider font-bold">
                  DIRECTIVE DISPATCHED & ERP COMMITTED
                </div>
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[#dae2fd]">
                  Contingency Plan Formally Authorized
                </h3>
                <div className="text-[12px] text-[#bcc9cd] font-mono">
                  Signed by: {officerName} ({officerRole})
                </div>
              </div>
            </div>

            <div className="text-right font-mono text-[11px] text-[#869397]">
              <div>TIMESTAMP: {new Date().toISOString()}</div>
              <div className="text-[#4edea3] font-semibold">{auditHash.slice(0, 24)}...</div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#060e20] border border-[#222a3d] font-mono text-[12px] text-[#bcc9cd] space-y-1">
            <div className="text-[#4edea3] font-bold flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">task_alt</span>
              Automated Logistics Triggers Initialized:
            </div>
            <div>• SAP S/4HANA contingency order Z_CONTINGENCY_ROUTING_ORDER generated</div>
            <div>• Rotterdam Berth 4 reservation desk synced (Ref: ROT-B4-CONFIRMED)</div>
            <div>• Equinor North Sea off-take contract locked for 14-day supply window</div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={onOpenExportModal}
              className="py-2.5 px-4 rounded-xl bg-[#171f33] hover:bg-[#222a3d] text-[#4cd7f6] border border-[#4cd7f6]/40 font-mono text-[12px] flex items-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">terminal</span>
              <span>Inspect ERP / EDI Payload</span>
            </button>
            <button
              onClick={() => setCurrentView('architecture')}
              className="py-2.5 px-5 rounded-xl bg-[#4edea3] text-[#003824] font-semibold text-[13px] font-mono flex items-center gap-1.5 transition-all shadow-md"
            >
              <span>View Data Pipeline Architecture</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </section>
      )}

      {/* Main Decision Console */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Selected Plan Review (Left 2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          {/* Strategy Summary Card */}
          <div className="rounded-xl bg-[#171f33] border border-[#3d494c]/40 p-4 sm:p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#222a3d] flex-wrap gap-2">
              <span className="text-[12px] font-mono text-[#4cd7f6] uppercase tracking-wider font-semibold">
                Selected Strategy for Final Commitment
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#4edea3]/20 text-[#4edea3] border border-[#4edea3]/30">
                {strategy.tag}
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="text-[18px] font-bold text-[#dae2fd]">{strategy.title}</h3>
              <p className="text-[13px] text-[#bcc9cd] leading-relaxed">{strategy.summary}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-center font-mono">
              <div className="p-2.5 rounded-lg bg-[#131b2e] border border-[#222a3d]">
                <div className="text-[10px] text-[#869397]">Supply Coverage</div>
                <div className="text-[16px] font-bold text-[#4edea3]">{strategy.supplyCoveragePercent}%</div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#131b2e] border border-[#222a3d]">
                <div className="text-[10px] text-[#869397]">Projected Deficit</div>
                <div className="text-[16px] font-bold text-[#ffb95f]">
                  +${strategy.costImpactDollarsMillions}M
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#131b2e] border border-[#222a3d]">
                <div className="text-[10px] text-[#869397]">Delivery Delta</div>
                <div className="text-[16px] font-bold text-[#4cd7f6]">+{strategy.deliveryTimeDaysDelta}d</div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#131b2e] border border-[#222a3d]">
                <div className="text-[10px] text-[#869397]">Threat Score</div>
                <div className="text-[16px] font-bold text-[#4edea3]">{strategy.riskScore}/100</div>
              </div>
            </div>
          </div>

          {/* 4-Point Governance Checklist */}
          <div className="rounded-xl bg-[#171f33] border border-[#3d494c]/40 p-4 sm:p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#222a3d]">
              <span className="text-[12px] font-mono text-[#dae2fd] uppercase tracking-wider font-semibold">
                Executive Governance Verification Checklist
              </span>
              <span className="text-[11px] font-mono text-[#4edea3]">4 of 4 Verified</span>
            </div>

            <div className="space-y-2.5">
              {[
                {
                  id: 0,
                  label: 'Verified refinery minimum feed SLA is preserved (98% volumetric coverage)',
                  desc: 'Continuous feed rate of 60,000 bpd confirmed with Antwerp integrated refining complex.',
                },
                {
                  id: 1,
                  label: 'Approved cost surcharge (+11.2% / +$3.9M) within authorized budget ceiling',
                  desc: 'Within the executive 15% maximum acceptable increase threshold configured in profile.',
                },
                {
                  id: 2,
                  label: 'Confirmed discharge berth window at Port of Rotterdam Deepwater Berth 4',
                  desc: 'Slot lock validated via port berth control desk sync with T-minus 36h arrival confirmation.',
                },
                {
                  id: 3,
                  label: 'Authorized financial crack-spread derivative hedge to absorb ±8.4% bunker variance',
                  desc: 'Forward options executed with designated commercial commodity clearing desk.',
                },
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-3 rounded-lg border transition-all cursor-pointer flex items-start gap-3 ${
                    checklist[item.id]
                      ? 'bg-[#131b2e] border-[#4edea3]/40'
                      : 'bg-[#0b1326] border-[#222a3d] opacity-70'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center text-[14px] mt-0.5 shrink-0 transition-colors ${
                      checklist[item.id]
                        ? 'bg-[#4edea3] text-[#003824]'
                        : 'border border-[#3d494c] text-transparent'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[13px] font-medium text-[#dae2fd]">{item.label}</div>
                    <div className="text-[11px] text-[#bcc9cd] mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Approver Sign-Off Form (Right 1 col) */}
        <div className="space-y-4">
          <div className="rounded-xl bg-[#222a3d] border border-[#4cd7f6]/40 p-5 shadow-xl space-y-4">
            <div className="pb-2 border-b border-[#3d494c]/30">
              <span className="text-[12px] font-mono text-[#4cd7f6] uppercase tracking-wider font-semibold">
                Signing Officer Credentials
              </span>
              <div className="text-[11px] text-[#bcc9cd] mt-0.5">
                Cryptographic authorization audit trail
              </div>
            </div>

            <div className="space-y-3 text-[12px] font-mono">
              <div>
                <label className="text-[#869397] block mb-1">DECISION MAKER NAME</label>
                <input
                  type="text"
                  value={officerName}
                  onChange={(e) => setOfficerName(e.target.value)}
                  className="w-full bg-[#131b2e] border border-[#222a3d] rounded-lg p-2.5 text-[#dae2fd] focus:border-[#4cd7f6] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[#869397] block mb-1">EXECUTIVE ROLE & TITLE</label>
                <input
                  type="text"
                  value={officerRole}
                  onChange={(e) => setOfficerRole(e.target.value)}
                  className="w-full bg-[#131b2e] border border-[#222a3d] rounded-lg p-2.5 text-[#dae2fd] focus:border-[#4cd7f6] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[#869397] block mb-1">AUTHORIZATION DIRECTIVE NOTES</label>
                <textarea
                  rows={3}
                  value={authorizationNotes}
                  onChange={(e) => setAuthorizationNotes(e.target.value)}
                  className="w-full bg-[#131b2e] border border-[#222a3d] rounded-lg p-2 text-[#dae2fd] focus:border-[#4cd7f6] focus:outline-none text-[11px]"
                />
              </div>
            </div>

            {/* Authorize Button */}
            <button
              onClick={handleAuthorize}
              disabled={isAuthorizing || !allChecked}
              className={`w-full py-3.5 px-4 rounded-xl font-semibold text-[14px] flex items-center justify-center gap-2 transition-all shadow-lg ${
                isDispatched
                  ? 'bg-[#4edea3] text-[#003824]'
                  : allChecked
                  ? 'bg-[#4cd7f6] text-[#003640] hover:bg-[#acedff] shadow-[0_0_20px_rgba(76,215,246,0.35)]'
                  : 'bg-[#171f33] text-[#869397] cursor-not-allowed border border-[#2d3449]'
              }`}
            >
              {isAuthorizing ? (
                <>
                  <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
                  Generating Cryptographic Seal...
                </>
              ) : isDispatched ? (
                <>
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  Directive Confirmed & Active
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">fingerprint</span>
                  Formally Authorize Contingency Plan
                </>
              )}
            </button>

            {!allChecked && (
              <div className="text-[10px] font-mono text-[#ffb95f] text-center">
                Please verify all 4 governance checkboxes above before authorizing.
              </div>
            )}
          </div>

          <div className="p-3.5 rounded-xl bg-[#131b2e] border border-[#222a3d] text-[11px] font-mono text-[#869397] space-y-1">
            <div className="text-[#4cd7f6] font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">gavel</span>
              Governance Principle
            </div>
            <p className="leading-relaxed">
              RouteShield enforces strict segregation of duties. AI generates recommendations; executive sign-off establishes legal and commercial accountability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
