import type { SVGProps } from "react";
import { memo } from "react";

const wrapperStyles = {
  transformOrigin: "center center",
};

const Svg = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="10.75" y="15.75" width="2.5" height="2.5" fill="#000000" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 8C10.8048 8 10 9.08576 10 10H8C8 8.19752 9.49569 6 12 6C14.4955 6 16 8.14203 16 10C16 11.5781 14.8917 12.3782 14.2062 12.8732C14.1659 12.9023 14.1271 12.9303 14.09 12.9574C13.3354 13.5088 13 13.8231 13 14.5H11C11 12.7382 12.1612 11.8897 12.9067 11.345L12.91 11.3426C13.7425 10.7343 14 10.5038 14 10C14 9.0498 13.2039 8 12 8Z"
    />
  </svg>
);

const SvgQuestionMark = memo((props: SVGProps<SVGSVGElement>) => (
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

SvgQuestionMark.displayName = "SvgQuestionMark";
export default SvgQuestionMark;
