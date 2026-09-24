import React, { useState } from 'react';
import { PROTOCOL_STEPS } from '../../data/mockData';
import { AppView } from '../../types';

interface ProtocolViewProps {
  setCurrentView: (view: AppView) => void;
  onOpenDisclaimer: () => void;
}

export const ProtocolView: React.FC<ProtocolViewProps> = ({
  setCurrentView,
  onOpenDisclaimer,
}) => {
  const [drillRunning, setDrillRunning] = useState(false);
  const [drillComplete, setDrillComplete] = useState(false);

  const handleRunDrill = () => {
    setDrillRunning(true);
    setDrillComplete(false);
    setTimeout(() => {
      setDrillRunning(false);
      setDrillComplete(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full space-y-4">
      {/* Header Banner */}
      <section className="w-full rounded-xl bg-[#222a3d] p-4 sm:p-5 border border-[#3d494c]/40 relative overflow-hidden shadow-lg">
        <div className="flex items-center justify-between pb-2 border-b border-[#3d494c]/30 flex-wrap gap-2">
          <span className="text-[11px] font-mono text-[#4cd7f6] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
            ACTIVE PROTOCOL S-74
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-[#bcc9cd] bg-[#171f33] px-2 py-0.5 rounded border border-[#3d494c]">
              MT-EST: 42m Response
            </span>
            <button
              onClick={onOpenDisclaimer}
              className="text-[10px] font-mono text-[#ffb95f] px-2 py-0.5 rounded bg-[#e79400]/20 border border-[#ffb95f]/30"
            >
              SAMPLE DATA
            </button>
          </div>
        </div>

        <div className="mt-3">
          <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#dae2fd] tracking-tight">
            Standard Maritime Disruption Protocol
          </h2>
          <p className="text-[13px] text-[#bcc9cd] mt-0.5 leading-relaxed max-w-3xl">
            Standard operating procedure for prolonged maritime energy disruptions. System-orchestrated sequence transitioning from sensory telemetry to fleet execution.
          </p>
        </div>
      </section>

      {/* Quick Telemetry HUD Ribbon (3 Cards) */}
      <section className="grid grid-cols-3 gap-2 sm:gap-3">
        <div className="flex flex-col bg-[#171f33] border border-[#3d494c]/40 p-3 sm:p-4 rounded-xl">
          <span className="text-[10px] font-mono text-[#869397] uppercase tracking-wider">PIPELINE NODES</span>
          <span className="text-[18px] sm:text-[22px] font-bold text-[#4cd7f6] font-mono mt-0.5">07 / 07</span>
          <span className="text-[11px] font-mono text-[#4edea3] flex items-center gap-1 mt-0.5">
            <span className="material-symbols-outlined text-[13px]">verified</span> Validated
          </span>
        </div>

        <div className="flex flex-col bg-[#171f33] border border-[#3d494c]/40 p-3 sm:p-4 rounded-xl">
          <span className="text-[10px] font-mono text-[#869397] uppercase tracking-wider">ACTIVE SECTOR</span>
          <span className="text-[18px] sm:text-[22px] font-bold text-[#dae2fd] font-mono mt-0.5">Hormuz</span>
          <span className="text-[11px] font-mono text-[#ffb4ab] flex items-center gap-1 mt-0.5">
            <span className="material-symbols-outlined text-[13px]">warning</span> Alert IV
          </span>
        </div>

        <div className="flex flex-col bg-[#171f33] border border-[#3d494c]/40 p-3 sm:p-4 rounded-xl">
          <span className="text-[10px] font-mono text-[#869397] uppercase tracking-wider">BUFFER SLA</span>
          <span className="text-[18px] sm:text-[22px] font-bold text-[#4edea3] font-mono mt-0.5">99.4%</span>
          <span className="text-[11px] font-mono text-[#869397] flex items-center gap-1 mt-0.5">
            <span className="material-symbols-outlined text-[13px]">schedule</span> Target met
          </span>
        </div>
      </section>

      {/* Stepper Flow */}
      <div className="relative flex flex-col space-y-3">
        {PROTOCOL_STEPS.map((step, idx) => (
          <div
            key={step.phase}
            className="flex items-start gap-3 bg-[#171f33] border border-[#3d494c]/40 p-4 rounded-xl shadow-sm hover:border-[#4cd7f6] transition-colors"
          >
            <div className="w-9 h-9 rounded-full bg-[#222a3d] border border-[#4cd7f6]/40 text-[#4cd7f6] font-mono text-[12px] font-bold flex items-center justify-center shrink-0 mt-0.5">
              {step.phase}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-[15px] font-semibold text-[#dae2fd]">{step.title}</h3>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]"></span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#060e20] text-[#4edea3] border border-[#4edea3]/30">
                  {step.badge}
                </span>
              </div>

              <p className="text-[12px] text-[#bcc9cd] leading-relaxed">{step.description}</p>

              <div className="mt-3 pt-2 border-t border-[#222a3d] flex items-center justify-between text-[11px] font-mono text-[#869397]">
                <span>{step.latency}</span>
                <span className="text-[#4cd7f6] tracking-wider">{step.phaseName}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Simulation Drill Action Card */}
      <section className="rounded-xl bg-[#222a3d] border border-[#4cd7f6]/30 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#4cd7f6]/20 text-[#4cd7f6] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[20px]">play_circle</span>
          </div>
          <div>
            <h4 className="text-[14px] font-semibold text-[#dae2fd]">
              Execute Protocol S-74 Digital Twin Test Drill
            </h4>
            <p className="text-[12px] text-[#bcc9cd]">
              Runs synthetic test through all 7 nodes with Cape diversion parameters.
            </p>
          </div>
        </div>

        <button
          onClick={handleRunDrill}
          disabled={drillRunning}
          className="w-full sm:w-auto py-2.5 px-5 rounded-xl bg-[#4cd7f6] text-[#003640] font-semibold text-[13px] font-mono flex items-center justify-center gap-1.5 shadow-md hover:bg-[#acedff] transition-all"
        >
          {drillRunning ? (
            <>
              <span className="material-symbols-outlined text-[16px] animate-spin">refresh</span>
              Simulating Nodes...
            </>
          ) : drillComplete ? (
            <>
              <span className="material-symbols-outlined text-[16px]">check</span>
              Drill Validated (100%)
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[16px]">play_arrow</span>
              Run Drill
            </>
          )}
        </button>
      </section>
    </div>
  );
};
