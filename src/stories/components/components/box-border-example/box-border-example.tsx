import { CSSProperties, FC } from "react";

import { BoxBorder } from "@components/box-border";

import { BoxBorderProps } from "@components/box-border/types";

import styles from "./box-border-example.module.scss";

export type BoxBorderExampleProps = Pick<CSSProperties, "backgroundColor"> &
  BoxBorderProps;

export const BoxBorderExample: FC<BoxBorderExampleProps> = ({
  backgroundColor,
  variant,
}) => {
  return (
    <BoxBorder variant={variant}>
      <div className={styles.content} style={{ backgroundColor }} />
    </BoxBorder>
  );
};
