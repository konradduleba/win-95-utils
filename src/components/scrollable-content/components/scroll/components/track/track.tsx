import { ElementRenderer } from "react-scrollbars-custom/dist/types/types";

import styles from "./track.module.scss";

export const Track: ElementRenderer<HTMLDivElement> = ({
  elementRef,
  style,
  ...restProps
}) => {
  return (
    <span
      {...restProps}
      ref={elementRef}
      style={style}
      className={styles.track}
    />
  );
};
