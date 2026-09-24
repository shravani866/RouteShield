import React from 'react';

interface DataDisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DataDisclaimerModal: React.FC<DataDisclaimerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-xl bg-[#171f33] border border-[#2d3449] rounded-2xl shadow-2xl overflow-hidden p-6 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#222a3d]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ffb95f] text-[24px]">verified_user</span>
            <h3 className="text-[17px] font-semibold text-[#dae2fd]">
              Data Attribution & Modeling Transparency
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#bcc9cd] hover:text-[#dae2fd] hover:bg-[#222a3d]"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="space-y-3 text-[13px] text-[#bcc9cd] leading-relaxed">
          <div className="p-3 rounded-xl bg-[#0b1326] border border-[#ffb95f]/30 space-y-1">
            <div className="flex items-center gap-2 text-[#ffb95f] font-mono text-[12px] font-semibold">
              <span className="material-symbols-outlined text-[16px]">science</span>
              MANDATORY HACKATHON PROTOCOL COMPLIANCE
            </div>
            <p>
              Any numbers, freight costs, tanker capacities, percentage risks, blockage durations, or route estimates that are not based on verified live feeds are strictly labeled throughout this application as:
            </p>
            <div className="flex gap-2 pt-1">
              <span className="px-2 py-0.5 rounded bg-[#ffb95f]/20 border border-[#ffb95f]/40 text-[#ffb95f] font-mono text-[11px] font-bold">
                "Illustrative scenario"
              </span>
              <span className="px-2 py-0.5 rounded bg-[#4cd7f6]/20 border border-[#4cd7f6]/40 text-[#4cd7f6] font-mono text-[11px] font-bold">
                "Sample data"
              </span>
            </div>
          </div>

          <p>
            <strong className="text-[#dae2fd]">Simulated Geopolitical Event:</strong> The ongoing Strait of Hormuz maritime disruption scenario (Day 14, DEFCON 2, 45-60 days blockage projection) is a synthetic contingency exercise developed for procurement war-gaming and risk evaluation.
          </p>

          <p>
            <strong className="text-[#dae2fd]">Human-in-the-Loop Governance:</strong> RouteShield AI functions strictly as a decision-support copilot. It models multidimensional tradeoffs and recommends optimal diversion corridors, but never initiates automated financial hedges or charter commitments without explicit human executive sign-off.
          </p>

          <p>
            <strong className="text-[#dae2fd]">Connected Systems:</strong> Production deployment hooks into real-world feeds including satellite AIS networks, Baltic Exchange bunker indices, Lloyd's List Intelligence, and enterprise ERP APIs (SAP S/4HANA & Oracle SCM).
          </p>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-[#222a3d] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#4cd7f6] text-[#003640] font-semibold text-[13px] hover:bg-[#acedff] transition-colors"
          >
            Acknowledge & Continue
          </button>
        </div>
      </div>
    </div>
  );
};
