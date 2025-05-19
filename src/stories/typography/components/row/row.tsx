import { FC } from "react";

import { Typography } from "@typography/typography";
import { Sizes, Variants, Weights } from "@typography/types";

import styles from "./row.module.scss";

type RowProps = {
  variant: Variants;
  sizes: Sizes[];
  weights: Weights[];
};

export const Row: FC<RowProps> = ({ variant, sizes, weights }) => {
  return (
    <div className={styles.row}>
      <Typography variant="p" size="xl">
        {variant}
      </Typography>
      {sizes && sizes.length && (
        <div>
          {sizes.map((size) => (
            <Typography key={`${variant}-${size}`} variant="p" size={size}>
              {size}
            </Typography>
          ))}
        </div>
      )}
      {weights && weights.length && (
        <div>
          {weights.map((weight) => (
            <Typography
              key={`${variant}-${weight}`}
              weight={weight}
              variant="p"
            >
              {weight}
            </Typography>
          ))}
        </div>
      )}
    </div>
  );
};
