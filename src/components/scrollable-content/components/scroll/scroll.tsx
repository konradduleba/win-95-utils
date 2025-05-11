import { FC, PropsWithChildren } from "react";
import Scrollbar from "react-scrollbars-custom";

import { useScrollableContent } from "../../hooks";

import { Thumb, Track } from "./components";

import styles from "./scroll.module.scss";

export const Scroll: FC<PropsWithChildren> = ({ children }) => {
  const {
    scrollRef,
    onHandleScroll,
    childrenRef,
    scrollHeight,
    wrapperProps,
    wrapperRef,
  } = useScrollableContent();

  return (
    <Scrollbar
      ref={scrollRef}
      style={{
        height: scrollHeight,
      }}
      className={styles.scroll}
      trackYProps={{
        renderer: Track,
      }}
      thumbYProps={{
        renderer: Thumb,
      }}
      wrapperProps={{
        className: styles.wrapper,
        ...wrapperProps,
        ref: wrapperRef,
      }}
      onScroll={onHandleScroll}
    >
      <div ref={childrenRef}>{children}</div>
    </Scrollbar>
  );
};
