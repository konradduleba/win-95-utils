import { FC, PropsWithChildren } from "react";
import cn from "classnames";

import styles from "./tooltip.module.scss";

export type TooltipProps = {
  message: string;
  placement: Placement;
};

type Placement = "topRight" | "topLeft" | "bottomRight" | "bottomLeft";

type PlacementStyles = Record<Placement, string>;

const PLACEMENT_STYLES: PlacementStyles = {
  topLeft: styles.topLeft,
  topRight: styles.topRight,
  bottomLeft: styles.bottomLeft,
  bottomRight: styles.bottomRight,
};

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({
  children,
  message,
  placement,
}) => {
  return (
    <div
      className={cn(styles.tooltip, PLACEMENT_STYLES[placement])}
      data-tooltip={message}
    >
      {children}
    </div>
  );
};
