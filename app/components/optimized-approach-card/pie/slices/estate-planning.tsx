import { ACTIVE_COLOR, SliceProps } from "..";

export const EstatePlanningSlice = ({ isActive, onSelect }: SliceProps) => {
  const color = isActive ? ACTIVE_COLOR : "#053A72";

  return (
    <g className="cursor-pointer group" onClick={onSelect}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M306.179 587.552C306.185 591.728 309.613 595.007 313.702 594.858C373.696 592.672 431.764 572.968 480.444 538.139C529.125 503.31 566.065 455.038 586.654 399.571C588.057 395.79 585.941 391.573 581.903 390.281L315.781 305.161C310.846 303.583 305.784 307.205 305.791 312.309L306.179 587.552Z"
        fill={color}
        stroke={color}
        strokeWidth={isActive ? 24 : 0}
        strokeLinejoin="round"
        className="transition-all duration-250 group-hover:stroke-24"
      />
      <text
        x={390}
        y={440}
        fill={isActive ? "white" : "#C9DAEB"}
        fontSize="20"
        fontWeight="600"
        className="pointer-events-none select-none"
      >
        Estate
      </text>
      <text
        x={380}
        y={466}
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
