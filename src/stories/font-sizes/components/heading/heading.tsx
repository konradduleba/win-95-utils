import { FC } from "react";

import { Typography } from "@typography/typography";

import styles from "./heading.module.scss";

type HeadingProps = {
  headings: string[];
};

export const Heading: FC<HeadingProps> = ({ headings }) => {
  return (
    <div className={styles.heading}>
      {headings.map((name: string) => (
        <Typography key={name} variant="h1" size="xl" weight="bold">
          {name}
        </Typography>
      ))}
    </div>
  );
};
