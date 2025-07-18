import { FC } from "react";

import { Button } from "@buttons/button/button";
import { Tooltip, TooltipProps } from "@components/tooltip/tooltip";

export const TooltipExample: FC<TooltipProps> = ({ message, placement }) => {
  return (
    <Tooltip message={message} placement={placement}>
      <Button>Click me</Button>
    </Tooltip>
  );
};
