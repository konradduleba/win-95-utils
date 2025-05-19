import { FC } from "react";
import { Trans } from "@lingui/react";

import { Typography } from "@typography/typography";

import { MESSAGES } from "./translations";

export const General: FC = () => {
  return (
    <Typography variant="h1" size="xl" weight="bold">
      <Trans id={MESSAGES.TITLE.id} />
    </Typography>
  );
};
