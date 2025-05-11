import { FC, PropsWithChildren } from "react";
import cn from "classnames";

import { useScrollableContent } from "../../hooks";

import styles from "./scroll-wrapper.module.scss";

export const ScrollWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { wrapperRef, wrapperProps, isVisible } = useScrollableContent();

  return (
    <div
      {...wrapperProps}
      ref={wrapperRef}
      className={cn(styles.wrapper, { [styles.fullLengthItem]: !isVisible })}
    >
      {children}
    </div>
  );
};
