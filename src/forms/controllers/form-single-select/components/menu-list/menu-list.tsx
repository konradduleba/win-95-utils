import { FC } from "react";
import { MenuListProps } from "react-select";
import styles from "./menu-list.module.scss";

export const MenuList: FC<MenuListProps> = ({
  children,
  innerProps,
  innerRef,
}) => {
  return (
    <div {...innerProps} className={styles.menuWrapper} ref={innerRef}>
      {children}
    </div>
  );
};
