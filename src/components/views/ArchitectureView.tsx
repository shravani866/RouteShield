import React, { useState } from 'react';
import { AppView } from '../../types';

interface ArchitectureViewProps {
  setCurrentView: (view: AppView) => void;
  onOpenDisclaimer: () => void;
}

export const ArchitectureView: React.FC<ArchitectureViewProps> = ({
  setCurrentView,
  onOpenDisclaimer,
}) => {
  const [showDiagnostics, setShowDiagnostics] = useState(false);

  return (
    <div className="flex flex-col w-full space-y-4">
      {/* Top Architecture Context Banner */}
      <section className="w-full rounded-xl bg-[#131b2e] border border-[#222a3d] p-4 sm:p-5 shadow-md flex flex-col gap-2">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-[11px] font-mono text-[#4cd7f6] uppercase tracking-widest flex items-center gap-1.5 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-ping"></span>
            Stack Topology v4.2.1
          </span>
          <div className="flex items-center gap-2">
            <span className="bg-[#2d3449] text-[#4edea3] text-[11px] font-mono px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-[#4edea3]/30">
              <span className="material-symbols-outlined text-[13px]">verified</span> Synchronized
            </span>
            <button
              onClick={onOpenDisclaimer}
              className="text-[10px] font-mono text-[#ffb95f] px-2 py-0.5 rounded bg-[#e79400]/20 border border-[#ffb95f]/30"
            >
              SAMPLE DATA
            </button>
          </div>
        </div>
        <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#dae2fd] tracking-tight">
          End-to-End Data Pipeline Architecture
        </h2>
        <p className="text-[13px] text-[#bcc9cd] leading-relaxed max-w-3xl">
          Live telemetry stream to contingency execution matrix. Seamless ingestion from AIS transponders, commodity spot feeds, and enterprise ERP backbones into cognitive solvers.
        </p>
      </section>

      {/* Main Pipeline Architecture Canvas (Layers 1 to 7) */}
      <div className="flex flex-col gap-0 relative max-w-4xl mx-auto w-full">
        {/* LAYER 1: Access Layer */}
        <div className="flex flex-col items-center">
          <div className="w-full bg-[#171f33] border border-[#3d494c]/40 rounded-xl p-4 shadow-sm relative overflow-hidden group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-[#869397] uppercase tracking-wider">
                Layer 01 // Access
              </span>
              <span className="bg-[#222a3d] text-[#4cd7f6] text-[11px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1 border border-[#4cd7f6]/30">
                <span className="material-symbols-outlined text-[12px]">key</span> SSO Active
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#222a3d] flex items-center justify-center text-[#4cd7f6] shrink-0">
                <span className="material-symbols-outlined text-[22px]">badge</span>
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <div className="text-[15px] font-semibold text-[#dae2fd]">
                  Business User / Executive Procurement
                </div>
                <div className="text-[12px] text-[#bcc9cd] mt-0.5">
                  Enterprise SSO • Role-Based Access Control (RBAC) • Audit Trail
                </div>
              </div>
            </div>
          </div>
          {/* Connector 1 -> 2 */}
          <div className="flex flex-col items-center py-1">
            <div className="w-0.5 h-5 bg-gradient-to-b from-[#4cd7f6] to-[#06b6d4]"></div>
            <span className="material-symbols-outlined text-[#4cd7f6] text-[14px] -my-1">
              keyboard_arrow_down
            </span>
          </div>
        </div>

        {/* LAYER 2: Experience Layer */}
        <div className="flex flex-col items-center">
          <div className="w-full bg-[#171f33] border border-[#3d494c]/40 rounded-xl p-4 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-[#869397] uppercase tracking-wider">
                Layer 02 // Experience
              </span>
              <span className="bg-[#222a3d] text-[#4edea3] text-[11px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1 border border-[#4edea3]/30">
                <span className="material-symbols-outlined text-[12px]">devices</span> Multi-Surface
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#222a3d] flex items-center justify-center text-[#4cd7f6] shrink-0">
                <span className="material-symbols-outlined text-[22px]">dashboard</span>
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <div className="text-[15px] font-semibold text-[#dae2fd]">
                  RouteShield Responsive Interface
                </div>
                <div className="text-[12px] text-[#bcc9cd] mt-0.5">
                  Interactive Dashboards • Scenario Visualizer • Export Tools
                </div>
              </div>
            </div>
            {/* Visual Micro-Widgets */}
            <div className="mt-3 pt-2 grid grid-cols-3 gap-2">
              <div className="bg-[#131b2e] rounded p-2 flex items-center gap-1.5 border border-[#222a3d]">
                <span className="material-symbols-outlined text-[#4cd7f6] text-[14px]">query_stats</span>
                <span className="text-[11px] font-mono text-[#dae2fd] truncate">Geospatial</span>
              </div>
              <div className="bg-[#131b2e] rounded p-2 flex items-center gap-1.5 border border-[#222a3d]">
                <span className="material-symbols-outlined text-[#ffb95f] text-[14px]">tune</span>
                <span className="text-[11px] font-mono text-[#dae2fd] truncate">Visualizer</span>
              </div>
              <div className="bg-[#131b2e] rounded p-2 flex items-center gap-1.5 border border-[#222a3d]">
                <span className="material-symbols-outlined text-[#4edea3] text-[14px]">download</span>
                <span className="text-[11px] font-mono text-[#dae2fd] truncate">Telemetry</span>
              </div>
            </div>
          </div>
          {/* Connector 2 -> 3 */}
          <div className="flex flex-col items-center py-1">
            <div className="w-0.5 h-5 bg-gradient-to-b from-[#4cd7f6] to-[#06b6d4]"></div>
            <span className="material-symbols-outlined text-[#4cd7f6] text-[14px] -my-1">
              keyboard_arrow_down
            </span>
          </div>
        </div>

        {/* LAYER 3: Core Decision Engine */}
        <div className="flex flex-col items-center">
          <div className="w-full bg-[#171f33] border border-[#4cd7f6]/50 rounded-xl p-4 shadow-md relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-[#4cd7f6] uppercase tracking-wider font-semibold">
                Layer 03 // Core Logic
              </span>
              <span className="bg-[#4cd7f6]/15 text-[#4cd7f6] text-[11px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1 font-semibold border border-[#4cd7f6]/30">
                <span className="material-symbols-outlined text-[12px]">memory</span> Real-Time Orchestrator
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#06b6d4]/20 flex items-center justify-center text-[#4cd7f6] shrink-0 border border-[#4cd7f6]/30">
                <span className="material-symbols-outlined text-[24px]">hub</span>
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <div className="text-[15px] font-semibold text-[#dae2fd]">
                  RouteShield Intelligence Decision Engine
                </div>
                <div className="text-[12px] text-[#bcc9cd] mt-0.5">
                  Contingency Solver • Multi-Vector Optimization Matrix
                </div>
              </div>
            </div>
            {/* In-card Pipeline Status */}
            <div className="mt-3 bg-[#131b2e] rounded-lg p-2.5 flex items-center justify-between px-3 text-[11px] font-mono border border-[#222a3d]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]"></span>
                <span className="text-[#bcc9cd]">Throughput:</span>
                <span className="text-[#4edea3] font-bold">1.2M msgs/sec</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6]"></span>
                <span className="text-[#bcc9cd]">Latency:</span>
                <span className="text-[#4cd7f6] font-bold">&lt; 14ms</span>
              </div>
            </div>
          </div>
          {/* Connector 3 -> 4 */}
          <div className="flex flex-col items-center py-1">
            <div className="w-0.5 h-5 bg-gradient-to-b from-[#4cd7f6] to-[#4edea3]"></div>
            <span className="material-symbols-outlined text-[#4edea3] text-[14px] -my-1">sync_alt</span>
          </div>
        </div>

        {/* LAYER 4: Multi-Source Data Ingestion */}
        <div className="flex flex-col items-center">
          <div className="w-full bg-[#131b2e] border border-[#3d494c]/40 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-[#869397] uppercase tracking-wider">
                Layer 04 // Ingestion
              </span>
              <span className="bg-[#222a3d] text-[#ffb95f] text-[11px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1 border border-[#ffb95f]/30">
                <span className="material-symbols-outlined text-[12px]">rss_feed</span> 3 Ingest Feeds
              </span>
            </div>
            <p className="text-[15px] font-semibold text-[#dae2fd] mb-3">
              Real-Time Multi-Source Telemetry
            </p>
            {/* 3 Parallel Ingestion Stream Cards */}
            <div className="flex flex-col gap-2">
              {/* Stream 1: Supply Data */}
              <div className="bg-[#171f33] border border-[#222a3d] rounded-lg p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#222a3d] flex items-center justify-center text-[#4cd7f6] shrink-0">
                  <span className="material-symbols-outlined text-[18px]">inventory_2</span>
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="font-medium text-[#dae2fd]">Supply Data</span>
                    <span className="text-[#4edea3] font-mono font-semibold">ACTIVE</span>
                  </div>
                  <span className="text-[11px] text-[#bcc9cd] truncate">
                    Contract terms, committed volumes, supplier uptime
                  </span>
                </div>
              </div>
              {/* Stream 2: Logistics Data */}
              <div className="bg-[#171f33] border border-[#222a3d] rounded-lg p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#222a3d] flex items-center justify-center text-[#4edea3] shrink-0">
                  <span className="material-symbols-outlined text-[18px]">directions_boat</span>
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="font-medium text-[#dae2fd]">Logistics Data</span>
                    <span className="text-[#4edea3] font-mono font-semibold">LIVE AIS</span>
                  </div>
                  <span className="text-[11px] text-[#bcc9cd] truncate">
                    AIS vessel telemetry, port berth queues, chokepoint status
                  </span>
                </div>
              </div>
              {/* Stream 3: Market Data */}
              <div className="bg-[#171f33] border border-[#222a3d] rounded-lg p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#222a3d] flex items-center justify-center text-[#ffb95f] shrink-0">
                  <span className="material-symbols-outlined text-[18px]">show_chart</span>
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="font-medium text-[#dae2fd]">Market Data</span>
                    <span className="text-[#ffb95f] font-mono font-semibold">FREQ 1s</span>
                  </div>
                  <span className="text-[11px] text-[#bcc9cd] truncate">
                    Crude/LNG spot prices, freight spot rates, bunker indexes
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Connector 4 -> 5 */}
          <div className="flex flex-col items-center py-1">
            <div className="w-0.5 h-5 bg-gradient-to-b from-[#4edea3] to-[#4cd7f6]"></div>
            <span className="material-symbols-outlined text-[#4cd7f6] text-[14px] -my-1">
              keyboard_arrow_down
            </span>
          </div>
        </div>

        {/* LAYER 5: AI Analysis Core */}
        <div className="flex flex-col items-center">
          <div className="w-full bg-[#171f33] border border-[#3d494c]/40 rounded-xl p-4 shadow-md relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-[#4edea3] uppercase tracking-wider font-semibold">
                Layer 05 // Cognitive AI
              </span>
              <span className="bg-[#00a572]/20 text-[#4edea3] text-[11px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1 font-semibold border border-[#4edea3]/30">
                <span className="material-symbols-outlined text-[12px]">auto_awesome</span> Neural Engine
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#222a3d] flex items-center justify-center text-[#4edea3] shrink-0">
                <span className="material-symbols-outlined text-[24px]">psychology</span>
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <div className="text-[15px] font-semibold text-[#dae2fd]">
                  RouteShield AI Modeling Core
                </div>
                <div className="text-[12px] text-[#bcc9cd] mt-0.5">
                  Machine learning prediction • Disruption impact curves • Capacity solvers
                </div>
              </div>
            </div>
            {/* Predictive Curves Graphic */}
            <div className="mt-3 bg-[#131b2e] border border-[#222a3d] rounded p-2.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <svg className="w-20 h-6 shrink-0" fill="none" viewBox="0 0 64 24">
                  <path
                    d="M2 18 C 14 16, 20 4, 34 12 C 46 18, 52 6, 62 2"
                    fill="none"
                    stroke="#4edea3"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M2 20 C 14 20, 26 14, 38 18 C 48 22, 54 14, 62 10"
                    fill="none"
                    stroke="#4cd7f6"
                    strokeDasharray="2 2"
                    strokeWidth="1.5"
                  />
                </svg>
                <span className="text-[11px] font-mono text-[#bcc9cd]">Stochastic Curve Fitting</span>
              </div>
              <span className="text-[11px] font-mono text-[#4edea3] font-semibold">99.4% Acc</span>
            </div>
          </div>
          {/* Connector 5 -> 6 */}
          <div className="flex flex-col items-center py-1">
            <div className="w-0.5 h-5 bg-gradient-to-b from-[#4cd7f6] to-[#ffb95f]"></div>
            <span className="material-symbols-outlined text-[#ffb95f] text-[14px] -my-1">
              keyboard_arrow_down
            </span>
          </div>
        </div>

        {/* LAYER 6: Synthesis Outputs */}
        <div className="flex flex-col items-center">
          <div className="w-full bg-[#171f33] border border-[#3d494c]/40 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-[#869397] uppercase tracking-wider">
                Layer 06 // Synthesis
              </span>
              <span className="bg-[#222a3d] text-[#4cd7f6] text-[11px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1 border border-[#4cd7f6]/30">
                <span className="material-symbols-outlined text-[12px]">dataset</span> 3 Tactical Vectors
              </span>
            </div>
            <p className="text-[15px] font-semibold text-[#dae2fd] mb-3">Intelligence Synthesizer</p>
            {/* 3 Output Cards */}
            <div className="grid grid-cols-1 gap-2">
              <div className="bg-[#131b2e] border border-[#222a3d] rounded-lg p-2.5 flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded bg-[#171f33] flex items-center justify-center text-[#ffb4ab] shrink-0">
                    <span className="material-symbols-outlined text-[18px]">security</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] font-medium text-[#dae2fd]">Risk Analysis</span>
                    <span className="text-[11px] text-[#bcc9cd] truncate">
                      Vulnerability indexing & threat scoring
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[#869397] text-[18px]">chevron_right</span>
              </div>

              <div className="bg-[#131b2e] border border-[#222a3d] rounded-lg p-2.5 flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded bg-[#171f33] flex items-center justify-center text-[#ffb95f] shrink-0">
                    <span className="material-symbols-outlined text-[18px]">alt_route</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] font-medium text-[#dae2fd]">Scenario Planning</span>
                    <span className="text-[11px] text-[#bcc9cd] truncate">
                      Monte Carlo corridor diversion modeling
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[#869397] text-[18px]">chevron_right</span>
              </div>

              <div className="bg-[#131b2e] border border-[#222a3d] rounded-lg p-2.5 flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded bg-[#171f33] flex items-center justify-center text-[#4edea3] shrink-0">
                    <span className="material-symbols-outlined text-[18px]">lightbulb</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] font-medium text-[#dae2fd]">Recommendations</span>
                    <span className="text-[11px] text-[#bcc9cd] truncate">
                      Prescriptive charter & bunker reroutes
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[#869397] text-[18px]">chevron_right</span>
              </div>
            </div>
          </div>
          {/* Connector 6 -> 7 */}
          <div className="flex flex-col items-center py-1">
            <div className="w-0.5 h-5 bg-gradient-to-b from-[#ffb95f] to-[#4edea3]"></div>
            <span className="material-symbols-outlined text-[#4edea3] text-[14px] -my-1">
              keyboard_arrow_down
            </span>
          </div>
        </div>

        {/* LAYER 7: Operational Output */}
        <div className="flex flex-col items-center">
          <div className="w-full bg-[#2d3449] border border-[#4edea3]/40 rounded-xl p-4 sm:p-5 shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-[#4edea3] uppercase tracking-wider font-semibold">
                Layer 07 // Execution Terminal
              </span>
              <span className="bg-[#4edea3]/20 text-[#4edea3] text-[11px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1 font-semibold border border-[#4edea3]/30">
                <span className="material-symbols-outlined text-[12px]">send</span> Auto-Trigger
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#171f33] flex items-center justify-center text-[#4edea3] shrink-0 shadow-sm border border-[#4edea3]/30">
                <span className="material-symbols-outlined text-[24px]">task_alt</span>
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <div className="text-[15px] font-semibold text-[#dae2fd]">Actionable Contingency Plan</div>
                <div className="text-[12px] text-[#bcc9cd] mt-0.5">
                  ERP/SAP bidirectional integration • Automated spot logistics booking triggers
                </div>
              </div>
            </div>
            {/* System Target Tags */}
            <div className="mt-3 flex flex-wrap gap-2">
              <div className="bg-[#171f33] px-2.5 py-1 rounded text-[#dae2fd] flex items-center gap-1.5 text-[11px] font-mono border border-[#3d494c]">
                <span className="material-symbols-outlined text-[#4edea3] text-[14px]">cable</span>
                SAP S/4HANA
              </div>
              <div className="bg-[#171f33] px-2.5 py-1 rounded text-[#dae2fd] flex items-center gap-1.5 text-[11px] font-mono border border-[#3d494c]">
                <span className="material-symbols-outlined text-[#4edea3] text-[14px]">cable</span>
                Oracle SCM
              </div>
              <div className="bg-[#171f33] px-2.5 py-1 rounded text-[#dae2fd] flex items-center gap-1.5 text-[11px] font-mono border border-[#3d494c]">
                <span className="material-symbols-outlined text-[#4edea3] text-[14px]">bolt</span>
                EDIFACT / CargoX
              </div>
            </div>
            {/* Terminal Execution Action Bar */}
            <div className="mt-4 pt-3 border-t border-[#3d494c]/40 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-1.5 text-[#bcc9cd] text-[11px] font-mono">
                <span className="material-symbols-outlined text-[16px]">lock_clock</span>
                <span>256-bit Encrypted Pipe Active</span>
              </div>
              <button
                onClick={() => setShowDiagnostics(!showDiagnostics)}
                className="bg-[#4cd7f6] text-[#003640] text-[12px] font-mono font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform hover:bg-[#acedff]"
              >
                <span className="material-symbols-outlined text-[18px]">terminal</span>
                <span>{showDiagnostics ? 'Close Diagnostics' : 'Inspect Pipe Stream'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Operational Diagnostics Drawer */}
      {showDiagnostics && (
        <div className="max-w-4xl mx-auto w-full mt-2 animate-in fade-in">
          <div className="bg-[#060e20] border border-[#4cd7f6]/40 rounded-xl p-4 shadow-xl">
            <div className="flex items-center justify-between pb-2 border-b border-[#222a3d]">
              <span className="text-[11px] font-mono text-[#4cd7f6] uppercase font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6] animate-ping"></span>
                Real-Time Pipeline Diagnostic Stream
              </span>
              <button
                onClick={() => setShowDiagnostics(false)}
                className="text-[#bcc9cd] hover:text-[#dae2fd]"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>
            <div className="text-[11px] font-mono text-[#4edea3]/90 flex flex-col gap-1.5 py-3">
              <div>[00:00:01] INGEST: AIS Vessel AIS_9831920 (Titan Explorer) satellite vector nominal</div>
              <div>[00:00:02] ENGINE: Monte Carlo corridor recalculated (10,000 iterations settled in 12ms)</div>
              <div>[00:00:03] SYNTH: Cape bypass delay +14.2d mapped to ARA terminal berth schedule</div>
              <div>[00:00:04] PROTOCOL: Hybrid S-74 selected with 98% volume SLA guarantee</div>
              <div>[00:00:05] EXECUTE: SAP S/4HANA endpoint listening on secure gRPC pipe :50051</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
