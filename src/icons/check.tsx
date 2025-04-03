import type { SVGProps } from "react";
import { memo } from "react";

const wrapperStyles = {
  transformOrigin: "center center",
};

const Svg = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <g id="check">
        <g>
          <polygon
            style={{
              fill: props.fill || "#000",
            }}
            points="11.941,28.877 0,16.935 5.695,11.24 11.941,17.486 26.305,3.123 32,8.818  "
          />
        </g>
      </g>
    </g>
  </svg>
);

const SvgCheck = memo((props: SVGProps<SVGSVGElement>) => (
  <Svg
    {...props}
    style={{
      ...wrapperStyles,
      ...(props.style || {}),
    }}
    role="img"
    width="1em"
    height="1em"
  />
));
SvgCheck.displayName = "SvgCheck";
export default SvgCheck;
