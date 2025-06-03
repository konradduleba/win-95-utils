import { CSSProperties, FC } from "react";

import { BoxBorder } from "@components/box-border";

import styles from "./box-border-example.module.scss";

export type BoxBorderExampleProps = Pick<CSSProperties, "backgroundColor">;

export const BoxBorderExample: FC<BoxBorderExampleProps> = ({
  backgroundColor,
}) => {
  return (
    <BoxBorder>
      <div className={styles.content} style={{ backgroundColor }} />
    </BoxBorder>
  );
};
