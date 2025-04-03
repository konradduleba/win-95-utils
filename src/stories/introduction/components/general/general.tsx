import { FC } from "react";
import { Trans } from "@lingui/react";
import { Heading } from "@typography/heading";

import { MESSAGES } from "./translations";

export const General: FC = () => {
  return (
    <Heading size="bg">
      <Trans id={MESSAGES.TITLE.id} />
    </Heading>
  );
};
