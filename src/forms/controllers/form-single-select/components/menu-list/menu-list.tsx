import { FC } from "react";
import { MenuListProps } from "react-select";

import { SELECT_DROPDOWN_CONTAINER_TEST_ID } from "../../constants";

import styles from "./menu-list.module.scss";

export const MenuList: FC<MenuListProps> = ({
  children,
  innerProps,
  innerRef,
}) => {
  return (
    <div
      ref={innerRef}
      {...innerProps}
      className={styles.menu}
      data-testid={SELECT_DROPDOWN_CONTAINER_TEST_ID}
    >
      {children}
    </div>
  );
};
