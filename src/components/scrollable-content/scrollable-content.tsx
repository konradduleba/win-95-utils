import { FC, HTMLAttributes, PropsWithChildren, Ref, useRef } from "react";
import cn from "classnames";

import { Scrollbars } from "react-custom-scrollbars-2";

import { ChevronButton } from "./components";

import styles from "./scrollable-content.module.scss";

export type ScrollableContentProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement>
> & {
  wrapperRef?: Ref<HTMLDivElement>;
};

export const ScrollableContent: FC<ScrollableContentProps> = ({
  children,
  className,
  wrapperRef,
  ...rest
}) => {
  return (
    <div {...rest} ref={wrapperRef} className={styles.wrapper}>
      <Scrollbars className={className}>{children}</Scrollbars>
    </div>
  );
};
