import { SECTIONS } from "..";
import { Center } from "./center";
import { EstatePlanningSlice } from "./slices/estate-planning";
import { FinancialPlanningSlice } from "./slices/financial-planning";
import { InvestmentManagementSlice } from "./slices/investment-management";
import { RiskManagementSlice } from "./slices/risk-management";
import { TaxStrategiesSlice } from "./slices/tax-strategies";

interface PieProps {
  selectedSection: SECTIONS;
  setSelectedSection: (section: SECTIONS) => void;
}

export interface SliceProps {
  isActive: boolean;
  onSelect: () => void;
}

export const ACTIVE_COLOR = "#19825A";

export const Pie = ({ selectedSection, setSelectedSection }: PieProps) => {
  return (
    <svg
      viewBox="0 0 609 605"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="overflow-visible w-full h-auto max-w-[50%]"
    >
      <InvestmentManagementSlice
        isActive={selectedSection === SECTIONS.InvestmentManagement}
        onSelect={() => setSelectedSection(SECTIONS.InvestmentManagement)}
      />
      <FinancialPlanningSlice
        isActive={selectedSection === SECTIONS.FinancialPlanning}
        onSelect={() => setSelectedSection(SECTIONS.FinancialPlanning)}
      />
      <EstatePlanningSlice
        isActive={selectedSection === SECTIONS.EstatePlanning}
        onSelect={() => setSelectedSection(SECTIONS.EstatePlanning)}
      />
      <TaxStrategiesSlice
        isActive={selectedSection === SECTIONS.TaxStrategies}
        onSelect={() => setSelectedSection(SECTIONS.TaxStrategies)}
      />
      <RiskManagementSlice
        isActive={selectedSection === SECTIONS.RiskManagement}
        onSelect={() => setSelectedSection(SECTIONS.RiskManagement)}
      />
      <Center />
    </svg>
  );
};
