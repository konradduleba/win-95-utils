import { ElementRenderer } from "react-scrollbars-custom/dist/types/types";

import { TEST_THUMB } from "../../../../constants";

import styles from "./thumb.module.scss";

export const Thumb: ElementRenderer<HTMLDivElement> = ({
  elementRef,
  style,
  ...restProps
}) => {
  return (
    <div
      {...restProps}
      ref={elementRef}
      style={style}
      className={styles.thumb}
      data-testid={TEST_THUMB}
    />
  );
};
