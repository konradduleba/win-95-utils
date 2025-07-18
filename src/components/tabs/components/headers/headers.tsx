import { FC } from "react";
import cn from "classnames";

import { Typography } from "@typography/typography";

import { useTabs } from "../../hooks";

import { TabHeaderProps } from "../../types";

import { HEADER_LABEL_NAME } from "../../constants";

import { useHandleHeadersNavigation } from "./hooks";

import styles from "./headers.module.scss";

export const Headers: FC = () => {
  const { tabHeaders } = useTabs();
  const { onHandleKeyDown } = useHandleHeadersNavigation();

  return (
    <ul
      className={styles.headers}
      tabIndex={0}
      onKeyDown={onHandleKeyDown}
      aria-label={HEADER_LABEL_NAME}
    >
      {tabHeaders.map(({ title, id, onClick, isSelected }: TabHeaderProps) => (
        <li
          key={id}
          tabIndex={-1}
          onClick={onClick}
          className={cn(styles.tabItem, { [styles.selected]: isSelected })}
          aria-selected={isSelected}
        >
          <div className={styles.itemContent}>
            <Typography variant="span">{title}</Typography>
            {isSelected && <div className={styles.overrideBottomBar} />}
          </div>
        </li>
      ))}
    </ul>
  );
};
