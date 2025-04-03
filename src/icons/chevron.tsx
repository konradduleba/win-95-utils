import type { SVGProps } from "react";
import { memo } from "react";

const wrapperStyles = {
  transformOrigin: "center center",
};

const Svg = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 386.257 386.257"
    xmlSpace="preserve"
    {...props}
  >
    <polygon points="0,96.879 193.129,289.379 386.257,96.879 " />
  </svg>
);

const SvgChevron = memo((props: SVGProps<SVGSVGElement>) => (
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
SvgChevron.displayName = "SvgChevron";
export default SvgChevron;
