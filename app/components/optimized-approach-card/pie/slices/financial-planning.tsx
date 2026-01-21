import { ACTIVE_COLOR, SliceProps } from "..";

export const FinancialPlanningSlice = ({ isActive, onSelect }: SliceProps) => {
  const color = isActive ? ACTIVE_COLOR : "#034587";

  return (
    <g className="cursor-pointer group" onClick={onSelect}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M584.014 383.886C588.053 385.174 592.284 382.983 593.406 379.113C609.882 322.279 608.797 261.817 590.154 205.466C571.511 149.115 536.214 99.603 488.888 63.1892C485.665 60.7093 480.934 61.3872 478.438 64.7661L313.97 287.473C310.922 291.6 312.857 297.451 317.791 299.024L584.014 383.886Z"
        fill={color}
        stroke={color}
        strokeWidth={isActive ? 24 : 0}
        strokeLinejoin="round"
        className="transition-all duration-250 group-hover:stroke-24"
      />
      <text
        x={450}
        y={230}
        fill={isActive ? "white" : "#C9DAEB"}
        fontSize="20"
        fontWeight="600"
        className="pointer-events-none select-none"
      >
        Financial
      </text>
      <text
        x={451}
        y={256}
        fill={isActive ? "white" : "#C9DAEB"}
        fontSize="20"
        fontWeight="600"
        className="pointer-events-none select-none"
      >
        planning
      </text>
    </g>
  );
};
