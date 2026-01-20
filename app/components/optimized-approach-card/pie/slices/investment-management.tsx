import { ACTIVE_COLOR, SliceProps } from "..";

export const InvestmentManagementSlice = ({
  isActive,
  onSelect
}: SliceProps) => {
  const color = isActive ? ACTIVE_COLOR : "#00509D";

  return (
    <g className="cursor-pointer group" onClick={onSelect}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M296.314 283.696C299.364 287.821 305.62 287.816 308.663 283.686L472.906 60.8176C475.398 57.4362 474.585 52.8017 471.189 50.5572C421.313 17.6002 362.508 -0.0470677 302.259 0.000107272C242.01 0.0472823 183.234 17.7867 133.411 50.8218C130.018 53.0716 129.213 57.7074 131.711 61.0848L296.314 283.696Z"
        fill={color}
        stroke={color}
        strokeWidth={isActive ? 24 : 0}
        strokeLinejoin="round"
        className="transition-all duration-300 group-hover:stroke-24"
      />
      <text
        x={260}
        y={84}
        fill="white"
        fontSize="20"
        fontWeight="600"
        className="pointer-events-none select-none"
      >
        Investment
      </text>
      <text
        x={250}
        y={110}
        fill="white"
        fontSize="20"
        fontWeight="600"
        className="pointer-events-none select-none"
      >
        management
      </text>
    </g>
  );
};
