import React from 'react';
import { AppView } from '../types';

interface JourneyStepperProps {
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
}

interface StepItem {
  id: AppView;
  stageNumber: number;
  label: string;
  shortLabel: string;
  icon: string;
}

const STEPS: StepItem[] = [
  { id: 'dashboard', stageNumber: 1, label: '1. Dashboard', shortLabel: 'Dashboard', icon: 'dashboard' },
  { id: 'profile', stageNumber: 2, label: '2. Business Profile', shortLabel: 'Profile', icon: 'tune' },
  { id: 'analysis', stageNumber: 3, label: '3. AI Analysis', shortLabel: 'Analysis', icon: 'psychology' },
  { id: 'comparison', stageNumber: 4, label: '4. Strategy Comparison', shortLabel: 'Compare', icon: 'balance' },
  { id: 'plan', stageNumber: 5, label: '5. Plan Details', shortLabel: 'Plan', icon: 'route' },
  { id: 'simulator', stageNumber: 6, label: '6. What-If Simulator', shortLabel: 'Simulator', icon: 'model_training' },
  { id: 'decision', stageNumber: 7, label: '7. Human Decision', shortLabel: 'Decision', icon: 'how_to_reg' },
];

export const JourneyStepper: React.FC<JourneyStepperProps> = ({ currentView, setCurrentView }) => {
  const currentStepIndex = STEPS.findIndex((s) => s.id === currentView);
  const activeStage = currentStepIndex >= 0 ? currentStepIndex + 1 : 1;

  return (
    <section className="w-full bg-[#131b2e] border border-[#222a3d]/80 rounded-xl p-2.5 px-3 sm:px-4 shadow-sm">
      <div className="flex items-center justify-between pb-1.5 text-[#bcc9cd] font-mono text-[11px] tracking-wider uppercase border-b border-[#222a3d]/50">
        <div className="flex items-center gap-1.5 text-[#4cd7f6] font-semibold">
          <span className="material-symbols-outlined text-[14px]">linear_scale</span>
          <span>DECISION JOURNEY STEPPER</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#869397]">
            {currentStepIndex >= 0 ? `STAGE ${activeStage} OF 7` : 'SYSTEM EXTENSION'}
          </span>
          <span className="text-[10px] text-[#ffb95f] px-1.5 py-0.2 rounded bg-[#ffb95f]/10 border border-[#ffb95f]/20">
            Decision-Support Mode
          </span>
        </div>
      </div>

      <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar pt-2 text-[12px] font-mono whitespace-nowrap">
        {STEPS.map((step, idx) => {
          const isActive = step.id === currentView;
          const isCompleted = currentStepIndex > idx;

          return (
            <React.Fragment key={step.id}>
              <button
                onClick={() => setCurrentView(step.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${
                  isActive
                    ? 'bg-[#4cd7f6] text-[#003640] font-semibold shadow-[0_0_12px_rgba(76,215,246,0.35)] scale-[1.02]'
                    : isCompleted
                    ? 'bg-[#171f33] text-[#4edea3] hover:bg-[#222a3d] border border-[#4edea3]/20'
                    : 'bg-[#171f33] text-[#bcc9cd] hover:bg-[#222a3d] hover:text-[#dae2fd]'
                }`}
                title={`Go to Stage ${step.stageNumber}: ${step.label}`}
              >
                <span className="material-symbols-outlined text-[15px]">
                  {isCompleted && !isActive ? 'check_circle' : step.icon}
                </span>
                <span className="hidden md:inline">{step.label}</span>
                <span className="md:hidden">{step.shortLabel}</span>
              </button>
              {idx < STEPS.length - 1 && (
                <span className="text-[#3d494c] select-none text-[13px] shrink-0">→</span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};
