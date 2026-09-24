import React, { useState } from 'react';
import { Logo } from './Logo';
import { AppView } from '../types';

interface HeaderProps {
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  onOpenDisclaimer: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  setCurrentView,
  onOpenDisclaimer,
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const getViewTitle = (view: AppView): { title: string; subtitle: string } => {
    switch (view) {
      case 'dashboard':
        return { title: 'Executive Dashboard', subtitle: 'Live Disruption Monitor' };
      case 'profile':
        return { title: 'Business Profile', subtitle: 'Procurement Requirements' };
      case 'analysis':
        return { title: 'AI Contingency Analysis', subtitle: 'Synthesizing Alternative Vectors' };
      case 'comparison':
        return { title: 'Strategy Comparison', subtitle: 'Multi-Objective Trade-Offs' };
      case 'plan':
        return { title: 'Alert Deep Dive', subtitle: 'Tactical Directive & Execution Vectors' };
      case 'simulator':
        return { title: 'What-If Disruption Simulator', subtitle: 'Dynamic Stress Testing' };
      case 'decision':
        return { title: 'Human Contingency Decision', subtitle: 'Executive Sign-Off & Governance' };
      case 'architecture':
        return { title: 'Vessel Reroute Control', subtitle: 'End-to-End Data Pipeline Architecture' };
      case 'business-model':
        return { title: 'Commercial Strategy', subtitle: 'Market Viability & Monetization' };
      case 'protocol':
        return { title: 'Protocol S-74', subtitle: '7-Phase Operational Sequence' };
      case 'dossier':
  return { title: 'Platform Dossier', subtitle: 'From Disruption to Decision' };

case 'demo':
  return { title: 'Project Demo', subtitle: 'RouteShield Product Walkthrough' };

default:
      
        return { title: 'RouteShield', subtitle: 'Decision Platform' };
    }
  };

  const { title, subtitle } = getViewTitle(currentView);

  return (
    <header className="sticky top-0 w-full z-50 bg-[#0b1326]/90 backdrop-blur-xl border-b border-[#222a3d]/80 shadow-[0_1px_12px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 flex items-center justify-between gap-3">
        {/* Brand & Title Zone */}
        <div className="flex items-center gap-3 min-w-0">
          {currentView !== 'dashboard' && (
            <button
              onClick={() => setCurrentView('dashboard')}
              aria-label="Back to Dashboard"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-[#dae2fd] hover:text-[#4cd7f6] hover:bg-[#171f33] transition-colors shrink-0"
              title="Return to Dashboard"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
            </button>
          )}

          <div
            onClick={() => setCurrentView('dashboard')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <Logo size={32} className="shrink-0 transition-transform group-hover:scale-105" />
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[17px] tracking-tight text-[#dae2fd] group-hover:text-[#4cd7f6] transition-colors">
                  RouteShield
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#93000a]/30 border border-[#ffb4ab]/30 text-[#ffb4ab] text-[10px] font-mono tracking-wider font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffb4ab] animate-pulse"></span>
                  LIVE MONITOR: HORMUZ ALERT
                </span>
              </div>
              <span className="text-[11px] text-[#bcc9cd] font-mono truncate">
                {title} • <span className="text-[#4cd7f6]">{subtitle}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Quick Views Navigation */}
        <nav className="hidden lg:flex items-center gap-1 text-[13px] font-medium text-[#bcc9cd]">
          <button
            onClick={() => setCurrentView('dashboard')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              currentView === 'dashboard'
                ? 'bg-[#171f33] text-[#4cd7f6] font-semibold border border-[#4cd7f6]/30'
                : 'hover:text-[#dae2fd] hover:bg-[#131b2e]'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setCurrentView('profile')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              ['profile', 'analysis', 'comparison', 'plan', 'decision'].includes(currentView)
                ? 'bg-[#171f33] text-[#4cd7f6] font-semibold border border-[#4cd7f6]/30'
                : 'hover:text-[#dae2fd] hover:bg-[#131b2e]'
            }`}
          >
            User Journey (7 Stages)
          </button>
          <button
            onClick={() => setCurrentView('simulator')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              currentView === 'simulator'
                ? 'bg-[#171f33] text-[#4cd7f6] font-semibold border border-[#4cd7f6]/30'
                : 'hover:text-[#dae2fd] hover:bg-[#131b2e]'
            }`}
          >
            What-If Simulator
          </button>
          <button
            onClick={() => setCurrentView('architecture')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              currentView === 'architecture'
                ? 'bg-[#171f33] text-[#4cd7f6] font-semibold border border-[#4cd7f6]/30'
                : 'hover:text-[#dae2fd] hover:bg-[#131b2e]'
            }`}
          >
            Architecture
          </button>
          <button
  onClick={() => setCurrentView('business-model')}
  className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
    currentView === 'business-model'
      ? 'bg-[#171f33] text-[#4cd7f6] font-semibold border border-[#4cd7f6]/30'
      : 'hover:text-[#dae2fd] hover:bg-[#131b2e]'
  }`}
>
  Commercial Model
</button>
          
                    <button
            onClick={() => setCurrentView('demo')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              currentView === 'demo'
                ? 'bg-[#171f33] text-[#4cd7f6] font-semibold border border-[#4cd7f6]/30'
                : 'hover:text-[#dae2fd] hover:bg-[#131b2e]'
            }`}
          >
            🎥 Project Demo
          </button>
        </nav>

        {/* Actions Zone: Disclaimer, Notification, Profile */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Sample Data Disclaimer Tag */}
          <button
            onClick={onOpenDisclaimer}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#222a3d] border border-[#ffb95f]/30 text-[#ffb95f] hover:bg-[#2d3449] transition-colors text-[11px] font-mono tracking-wide"
            title="View Data Disclaimer & Modeling Notes"
          >
            <span className="material-symbols-outlined text-[14px]">info</span>
            <span className="hidden sm:inline font-semibold">Sample Data</span>
          </button>

          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              aria-label="Notifications"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-[#bcc9cd] hover:text-[#4cd7f6] hover:bg-[#171f33] transition-colors relative"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#ef4444] animate-ping"></span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#ef4444]"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-xl bg-[#171f33] border border-[#2d3449] shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center justify-between pb-2 border-b border-[#222a3d]">
                  <span className="text-[12px] font-mono uppercase tracking-wider text-[#4cd7f6] font-semibold">
                    Live Telemetry Dispatches (3)
                  </span>
                  <span className="text-[10px] text-[#869397] font-mono">Real-time AIS</span>
                </div>
                <div className="divide-y divide-[#222a3d] max-h-72 overflow-y-auto">
                  <div className="py-2.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#ffb4ab] font-medium font-mono">Hormuz Blockade Active</span>
                      <span className="text-[#869397] text-[10px]">T-Minus 14d</span>
                    </div>
                    <p className="text-[12px] text-[#bcc9cd] mt-0.5">
                      DEFCON 2 in effect. 84 tankers diverted to Cape of Good Hope transit corridor.
                    </p>
                  </div>
                  <div className="py-2.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#4edea3] font-medium font-mono">Berth Queue Reserved</span>
                      <span className="text-[#869397] text-[10px]">Just now</span>
                    </div>
                    <p className="text-[12px] text-[#bcc9cd] mt-0.5">
                      Port of Rotterdam Deepwater Berth 4 prioritized for Atlantic VLCC discharge.
                    </p>
                  </div>
                  <div className="py-2.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#ffb95f] font-medium font-mono">Crack Spread Hedge</span>
                      <span className="text-[#869397] text-[10px]">2h ago</span>
                    </div>
                    <p className="text-[12px] text-[#bcc9cd] mt-0.5">
                      Recommended 14-day forward derivative contract window closes in 47h 12m.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowNotifications(false)}
                  className="w-full mt-2 py-1.5 text-center text-[11px] font-mono text-[#4cd7f6] hover:underline"
                >
                  Close dispatches
                </button>
              </div>
            )}
          </div>

          {/* User Profile Badge */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 p-1 rounded-lg hover:bg-[#171f33] transition-colors"
              title="Enterprise Procurement Officer"
            >
              <div className="w-8 h-8 rounded-full bg-[#4cd7f6] flex items-center justify-center shadow-[0_0_8px_rgba(76,215,246,0.3)]">
                <span className="material-symbols-outlined text-[#003640] text-[18px]">person</span>
              </div>
              <span className="hidden xl:inline text-[13px] font-medium text-[#dae2fd]">
                CSCO / Procurement
              </span>
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-64 rounded-xl bg-[#171f33] border border-[#2d3449] shadow-2xl p-3 z-50 text-[12px]">
                <div className="pb-2 border-b border-[#222a3d]">
                  <div className="font-semibold text-[#dae2fd]">Enterprise Executive Mode</div>
                  <div className="text-[11px] text-[#869397] font-mono">Role: Chief Supply Chain Officer</div>
                  <div className="text-[10px] text-[#4edea3] font-mono mt-0.5">● SSO Authenticated (Audit Enabled)</div>
                </div>
                <div className="py-2 space-y-1">
                  <button
                    onClick={() => {
                      setCurrentView('protocol');
                      setShowProfileMenu(false);
                    }}
                    className="w-full text-left px-2 py-1.5 rounded hover:bg-[#222a3d] text-[#bcc9cd] hover:text-[#4cd7f6] flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px]">list_alt</span>
                    Protocol S-74 Workflow
                  </button>
                  <button
                    onClick={() => {
                      setCurrentView('dossier');
                      setShowProfileMenu(false);
                    }}
                    className="w-full text-left px-2 py-1.5 rounded hover:bg-[#222a3d] text-[#bcc9cd] hover:text-[#4cd7f6] flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px]">description</span>
                    Platform Executive Dossier
                  </button>
                </div>
                <div className="pt-2 border-t border-[#222a3d] flex justify-between text-[10px] text-[#869397] font-mono">
                  <span>Cluster: EU-Central-1</span>
                  <span>Latency: 12ms</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
