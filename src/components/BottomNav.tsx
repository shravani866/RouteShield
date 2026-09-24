import React from 'react';
import { AppView } from '../types';

interface BottomNavProps {
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentView, setCurrentView }) => {
  const navItems: { id: AppView; label: string; icon: string }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'profile', label: 'Journey', icon: 'alt_route' },
    { id: 'simulator', label: 'Simulator', icon: 'model_training' },
    { id: 'architecture', label: 'Pipeline', icon: 'hub' },
    { id: 'business-model', label: 'Strategy', icon: 'shield' },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-40 bg-[#060e20]/95 backdrop-blur-xl border-t border-[#222a3d] shadow-[0_-4px_20px_rgba(0,0,0,0.6)] lg:hidden">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const isActive =
            currentView === item.id ||
            (item.id === 'profile' &&
              ['profile', 'analysis', 'comparison', 'plan', 'decision'].includes(currentView));

          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`flex flex-col items-center justify-center gap-1 min-w-[56px] py-1 transition-colors ${
                isActive ? 'text-[#4cd7f6] font-semibold' : 'text-[#bcc9cd] hover:text-[#dae2fd]'
              }`}
            >
              <span
                className="material-symbols-outlined text-[22px]"
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {item.icon}
              </span>
              <span className="text-[10px] font-mono tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
