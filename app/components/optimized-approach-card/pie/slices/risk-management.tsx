import { ACTIVE_COLOR, SliceProps } from "..";

export const RiskManagementSlice = ({ isActive, onSelect }: SliceProps) => {
  const color = isActive ? ACTIVE_COLOR : "#0A2547";

  return (
    <g className="cursor-pointer group" onClick={onSelect}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6427 379.282C12.7671 383.152 16.9995 385.34 21.0378 384.05L287.195 299.037C292.131 297.461 294.061 291.603 291.005 287.479L126.185 65.0419C123.684 61.6669 118.951 60.9964 115.732 63.4814C68.5064 99.9381 33.3079 149.453 14.7437 205.775C-3.82045 262.098 -4.85345 322.507 11.6427 379.282Z"
        fill={color}
        stroke={color}
        strokeWidth={isActive ? 24 : 0}
        strokeLinejoin="round"
        className="transition-all duration-300 group-hover:stroke-24"
      />
      <text
        x={105}
        y={230}
        fill="white"
        fontSize="20"
        fontWeight="600"
        className="pointer-events-none select-none"
      >
        Risk
      </text>
      <text
        x={65}
        y={256}
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
