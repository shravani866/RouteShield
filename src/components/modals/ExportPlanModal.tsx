import React, { useState } from 'react';
import { StrategyOption, BusinessProfile } from '../../types';

interface ExportPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  strategy: StrategyOption;
  profile: BusinessProfile;
}

export const ExportPlanModal: React.FC<ExportPlanModalProps> = ({
  isOpen,
  onClose,
  strategy,
  profile,
}) => {
  const [format, setFormat] = useState<'SAP_JSON' | 'EDIFACT' | 'CARGO_X'>('SAP_JSON');
  const [isCopied, setIsCopied] = useState(false);
  const [isDispatching, setIsDispatching] = useState(false);
  const [dispatchedSuccess, setDispatchedSuccess] = useState(false);

  if (!isOpen) return null;

  const sapPayload = {
    header: {
      documentType: 'Z_CONTINGENCY_ROUTING_ORDER',
      system: 'SAP_S4HANA_SCM',
      protocolVersion: 'S-74.4.2',
      timestampUtc: new Date().toISOString(),
      disruptionReference: 'HORMUZ_BOTTLENECK_INCIDENT_D14',
      status: 'APPROVED_BY_EXECUTIVE',
    },
    procurementDirective: {
      energyCommodity: profile.energyType,
      monthlyCommittedBbl: profile.monthlyRequirementBbl,
      destinationTerminal: profile.destination,
      selectedStrategyId: strategy.id,
      selectedStrategyName: strategy.title,
      authorizedCostCapDollars: (
        profile.monthlyRequirementBbl * 88 * (1 + strategy.costImpactPercent / 100)
      ).toFixed(2),
      permittedDeliveryDeltaDays: strategy.deliveryTimeDaysDelta,
    },
    vectors: [
      {
        vectorId: 'V1_SUPPLIER_OFFTAKE',
        supplierEntity: 'Equinor ASA (45%) & West Africa Terminals (55%)',
        allocationContract: 'SPOT_FORWARD_14D_SECURED',
        pricingBasis: 'ICE_BRENT_MONTH_PLUS_PREMIUM',
      },
      {
        vectorId: 'V2_MARITIME_ROUTING',
        corridor: strategy.routeDescription,
        transitDeltaDays: strategy.deliveryTimeDaysDelta,
        bunkerOptimization: 'CAPE_OFFLOAD_STOP_ACTIVE',
      },
      {
        vectorId: 'V3_DISCHARGE_PORT',
        portFacility: 'Port of Rotterdam Deepwater Berth 4',
        berthSlotWindow: 'T_MINUS_36H_LOCK',
        customsClearing: 'DIRECT_CUSTOMS_PASS_PRECHECK',
      },
      {
        vectorId: 'V4_STORAGE_BUFFER',
        terminalReserve: 'Vopak Eurotank 300k bbl Leased Storage',
        utilizationTarget: '84%',
      },
    ],
    hedgingExecution: {
      crackSpreadHedge: 'ENFORCED_NYMEX_WTI_BRENT_SPREAD',
      forwardOptionVolumeBbl: 800000,
      confidenceScore: '96.4%',
    },
  };

  const edifactPayload = `UNA:+.? '
UNB+UNOC:3+ROUTESHIELD_DISPATCH+SAP_SCM_GATEWAY+260924:0700+42091'
UNH+ORD001+ORDERS:D:03B:UN:EAN008'
BGM+220+CNTG-S74-${strategy.id.toUpperCase()}+9'
DTM+137:20260924:102'
FTX+AAI+++ENERGY CONTINGENCY DIRECTIVE HORMUZ BYPASS'
NAD+BY+ENTERPRISE_PROCUREMENT_HUB++ROTTERDAM ARA COMPLEX'
NAD+SE+EQUINOR_NORTH_SEA_BONNY_WEST_AFRICA'
LIN+1++${profile.energyType.replace(/\s+/g, '_')}:EN'
QTY+21:${profile.monthlyRequirementBbl}:BBL'
PRI+AAA:${(88 * (1 + strategy.costImpactPercent / 100)).toFixed(2)}:CT:BBL'
RFF+ALQ:BERTH_LOCK_ROTTERDAM_BERTH_4'
UNT+12+ORD001'
UNZ+1+42091'`;

  const cargoXPayload = `<?xml version="1.0" encoding="UTF-8"?>
<CargoXContingencyManifest version="3.2">
  <IncidentId>HORMUZ-TACTICAL-2026</IncidentId>
  <Strategy>${strategy.title}</Strategy>
  <SLA>99.8% Guarantee</SLA>
  <OriginCorridor>Atlantic Bypass Lane 02</OriginCorridor>
  <DestinationPort>Port of Rotterdam Deepwater Berth 4</DestinationPort>
  <Volume Unit="BBL">${profile.monthlyRequirementBbl}</Volume>
  <ElectronicBillOfLading Issued="true" BlockchainDigest="0x89f4b7a26c..." />
</CargoXContingencyManifest>`;

  const activeContent =
    format === 'SAP_JSON'
      ? JSON.stringify(sapPayload, null, 2)
      : format === 'EDIFACT'
      ? edifactPayload
      : cargoXPayload;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeContent);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleDownload = () => {
    const ext = format === 'SAP_JSON' ? 'json' : format === 'EDIFACT' ? 'edi' : 'xml';
    const blob = new Blob([activeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `RouteShield_Contingency_Plan_${strategy.id}.${ext}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleDispatch = () => {
    setIsDispatching(true);
    setTimeout(() => {
      setIsDispatching(false);
      setDispatchedSuccess(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-[#171f33] border border-[#2d3449] rounded-2xl shadow-2xl overflow-hidden p-6 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#222a3d]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4cd7f6] text-[24px]">send</span>
            <div>
              <h3 className="text-[17px] font-semibold text-[#dae2fd]">
                Export Action Plan to ERP / Logistics API
              </h3>
              <p className="text-[11px] text-[#bcc9cd] font-mono">
                Bidirectional dispatch to SAP S/4HANA, Oracle SCM, and EDIFACT CargoX
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#bcc9cd] hover:text-[#dae2fd] hover:bg-[#222a3d]"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Format Selectors */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#0b1326] border border-[#222a3d]">
            <button
              onClick={() => setFormat('SAP_JSON')}
              className={`px-3 py-1 rounded text-[11px] font-mono transition-colors ${
                format === 'SAP_JSON'
                  ? 'bg-[#4cd7f6] text-[#003640] font-semibold'
                  : 'text-[#bcc9cd] hover:text-[#dae2fd]'
              }`}
            >
              SAP S/4HANA (JSON)
            </button>
            <button
              onClick={() => setFormat('EDIFACT')}
              className={`px-3 py-1 rounded text-[11px] font-mono transition-colors ${
                format === 'EDIFACT'
                  ? 'bg-[#4cd7f6] text-[#003640] font-semibold'
                  : 'text-[#bcc9cd] hover:text-[#dae2fd]'
              }`}
            >
              EDIFACT D.03B
            </button>
            <button
              onClick={() => setFormat('CARGO_X')}
              className={`px-3 py-1 rounded text-[11px] font-mono transition-colors ${
                format === 'CARGO_X'
                  ? 'bg-[#4cd7f6] text-[#003640] font-semibold'
                  : 'text-[#bcc9cd] hover:text-[#dae2fd]'
              }`}
            >
              CargoX (XML)
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#222a3d] hover:bg-[#2d3449] text-[#dae2fd] text-[12px] font-mono transition-colors"
            >
              <span className="material-symbols-outlined text-[15px]">
                {isCopied ? 'check' : 'content_copy'}
              </span>
              <span>{isCopied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#222a3d] hover:bg-[#2d3449] text-[#dae2fd] text-[12px] font-mono transition-colors"
            >
              <span className="material-symbols-outlined text-[15px]">download</span>
              <span>Download</span>
            </button>
          </div>
        </div>

        {/* Code Payload Window */}
        <div className="relative rounded-xl bg-[#060e20] border border-[#222a3d] p-3 max-h-72 overflow-y-auto font-mono text-[12px] text-[#4edea3]">
          <pre className="whitespace-pre-wrap">{activeContent}</pre>
        </div>

        {/* Dispatch Action */}
        <div className="pt-2 border-t border-[#222a3d] flex items-center justify-between">
          <div className="flex items-center gap-2 text-[12px] text-[#bcc9cd] font-mono">
            <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
            <span>256-bit Encrypted API Pipe Active</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-[#bcc9cd] hover:text-[#dae2fd] text-[13px]"
            >
              Close
            </button>
            <button
              onClick={handleDispatch}
              disabled={isDispatching || dispatchedSuccess}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-[13px] transition-all ${
                dispatchedSuccess
                  ? 'bg-[#4edea3] text-[#003824]'
                  : 'bg-[#4cd7f6] text-[#003640] hover:bg-[#acedff]'
              }`}
            >
              {isDispatching ? (
                <>
                  <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
                  Dispatching to SAP Bus...
                </>
              ) : dispatchedSuccess ? (
                <>
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  Dispatched Successfully (ACK 200)
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">cloud_upload</span>
                  Trigger Live Logistics Dispatch
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
