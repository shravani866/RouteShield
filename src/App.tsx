/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AppView, BusinessProfile, StrategyOption } from './types';
import { INITIAL_PROFILE, CANDIDATE_STRATEGIES } from './data/mockData';

import { Header } from './components/Header';
import { JourneyStepper } from './components/JourneyStepper';
import { BottomNav } from './components/BottomNav';

import { DashboardView } from './components/views/DashboardView';
import { BusinessProfileView } from './components/views/BusinessProfileView';
import { AIAnalysisView } from './components/views/AIAnalysisView';
import { StrategyComparisonView } from './components/views/StrategyComparisonView';
import { PlanDetailsView } from './components/views/PlanDetailsView';
import { WhatIfSimulatorView } from './components/views/WhatIfSimulatorView';
import { HumanDecisionView } from './components/views/HumanDecisionView';
import { ArchitectureView } from './components/views/ArchitectureView';
import { BusinessModelView } from './components/views/BusinessModelView';
import { ProtocolView } from './components/views/ProtocolView';
import { PlatformDossierView } from './components/views/PlatformDossierView';
import { ProjectDemoView } from './components/views/ProjectDemoView';

import { DataDisclaimerModal } from './components/modals/DataDisclaimerModal';
import { ExportPlanModal } from './components/modals/ExportPlanModal';

export default function App() {
  const [currentView, setCurrentView] =
    useState<AppView>('dashboard');

  const [profile, setProfile] =
    useState<BusinessProfile>(INITIAL_PROFILE);

  const [selectedStrategy, setSelectedStrategy] =
    useState<StrategyOption>(CANDIDATE_STRATEGIES[2]);

  const [isDisclaimerOpen, setIsDisclaimerOpen] =
    useState(false);

  const [isExportModalOpen, setIsExportModalOpen] =
    useState(false);

  const renderActiveView = () => {
    switch (currentView) {
      case 'dashboard':
        return (
          <DashboardView
            setCurrentView={setCurrentView}
            profile={profile}
            onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
          />
        );

      case 'profile':
        return (
          <BusinessProfileView
            profile={profile}
            setProfile={setProfile}
            setCurrentView={setCurrentView}
            onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
          />
        );

      case 'analysis':
        return (
          <AIAnalysisView
            profile={profile}
            setCurrentView={setCurrentView}
            onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
          />
        );

      case 'comparison':
        return (
          <StrategyComparisonView
            selectedStrategy={selectedStrategy}
            setSelectedStrategy={setSelectedStrategy}
            profile={profile}
            setCurrentView={setCurrentView}
            onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
          />
        );

      case 'plan':
        return (
          <PlanDetailsView
            strategy={selectedStrategy}
            profile={profile}
            setCurrentView={setCurrentView}
            onOpenExportModal={() => setIsExportModalOpen(true)}
            onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
          />
        );

      case 'simulator':
        return (
          <WhatIfSimulatorView
            profile={profile}
            setCurrentView={setCurrentView}
            onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
          />
        );

      case 'decision':
        return (
          <HumanDecisionView
            strategy={selectedStrategy}
            profile={profile}
            setCurrentView={setCurrentView}
            onOpenExportModal={() => setIsExportModalOpen(true)}
            onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
          />
        );

      case 'architecture':
        return (
          <ArchitectureView
            setCurrentView={setCurrentView}
            onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
          />
        );

      case 'business-model':
        return (
          <BusinessModelView
            setCurrentView={setCurrentView}
            onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
          />
        );

      case 'protocol':
        return (
          <ProtocolView
            setCurrentView={setCurrentView}
            onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
          />
        );

      case 'dossier':
        return (
          <PlatformDossierView
            setCurrentView={setCurrentView}
            onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
          />
        );

      case 'demo':
        return <ProjectDemoView />;

      default:
        return (
          <DashboardView
            setCurrentView={setCurrentView}
            profile={profile}
            onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] flex flex-col font-sans selection:bg-[#4cd7f6]/30 selection:text-[#acedff]">

      {/* Top Application Bar */}
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-3 sm:px-6 py-4 pb-24 lg:pb-12 space-y-4">

        {/* Journey Navigation */}
        <JourneyStepper
          currentView={currentView}
          setCurrentView={setCurrentView}
        />

        {/* Active View */}
        <div className="w-full transition-opacity duration-200">
          {renderActiveView()}
        </div>

      </main>

      {/* Bottom Navigation */}
      <BottomNav
        currentView={currentView}
        setCurrentView={setCurrentView}
      />

      {/* Data Disclaimer Modal */}
      <DataDisclaimerModal
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
      />

      {/* Export Plan Modal */}
      <ExportPlanModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        strategy={selectedStrategy}
        profile={profile}
      />

    </div>
  );
}