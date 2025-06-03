import { FC } from "react";

import { ScrollableContent } from "@components/scrollable-content/scrollable-content";
import { ScrollableContentProps } from "@components/scrollable-content/types";
import { FieldGroup } from "@components/field-group";
import { BoxBorder } from "@components/box-border";

import { Button } from "@buttons/button/button";

import styles from "./scrollable-content-example.module.scss";

export const ScrollableContentExample: FC<ScrollableContentProps> = (props) => {
  return (
    <FieldGroup title="Scrollable Content">
      <BoxBorder className={styles.wrapper}>
        <ScrollableContent {...props}>
          <div className={styles.container}>
            <Button>Top</Button>
            <Button>Bottom</Button>
          </div>
        </ScrollableContent>
      </BoxBorder>
    </FieldGroup>
  );
};
