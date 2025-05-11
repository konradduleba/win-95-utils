import { FC } from "react";
import { MenuListProps } from "react-select";

import { ScrollableContent } from "@components/scrollable-content/scrollable-content";

import styles from "./menu-list.module.scss";

export const MenuList: FC<MenuListProps> = ({
  children,
  innerProps,
  innerRef,
}) => {
  return (
    <div className={styles.menuWrapper}>
      <ScrollableContent wrapperProps={innerProps} wrapperRef={innerRef}>
        {children}
      </ScrollableContent>
    </div>
  );
};
