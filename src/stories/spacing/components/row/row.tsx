import { FC } from "react";

import { Typography } from "@typography/typography";

import styles from "./row.module.scss";

type RowProps = {
  sizeId: string;
  size: number;
};

const REM = 16;

export const Row: FC<RowProps> = ({ sizeId, size }) => {
  const name = `--spacing-${String(sizeId).padStart(2, "0")}`;

  return (
    <div className={styles.row}>
      <Typography variant="p" size="xl">
        {name}
      </Typography>
      <Typography variant="p" size="xl">
        {size * REM}px
      </Typography>
      <Typography variant="p" size="xl">
        {size}rem
      </Typography>
    </div>
  );
};
