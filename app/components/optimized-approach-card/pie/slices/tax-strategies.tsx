import { ACTIVE_COLOR, SliceProps } from "..";

export const TaxStrategiesSlice = ({ isActive, onSelect }: SliceProps) => {
  const color = isActive ? ACTIVE_COLOR : "#08305C";

  return (
    <g className="cursor-pointer group" onClick={onSelect}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M291.779 594.875C295.868 595.017 299.291 591.733 299.29 587.557L299.233 312.299C299.232 307.198 294.169 303.584 289.238 305.164L23.1528 390.444C19.1157 391.738 17.0022 395.956 18.4079 399.736C39.0473 455.239 76.0623 503.523 124.823 538.33C173.584 573.136 231.731 592.781 291.779 594.875Z"
        fill={color}
        stroke={color}
        strokeWidth={isActive ? 24 : 0}
        strokeLinejoin="round"
        className="transition-all duration-250 group-hover:stroke-24"
      />
      <text
        x={170}
        y={440}
        fill={isActive ? "white" : "#C9DAEB"}
        fontSize="20"
        fontWeight="600"
        className="pointer-events-none select-none"
      >
        Tax
      </text>
      <text
        x={142}
        y={466}
        fill={isActive ? "white" : "#C9DAEB"}
        fontSize="20"
        fontWeight="600"
        className="pointer-events-none select-none"
      >
        strategies
      </text>
    </g>
  );
};
