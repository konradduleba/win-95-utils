import { FC } from "react";

import { Button } from "@buttons/button";

import { TEST_TEXT } from "../mocks";

export const DisabledButton: FC = () => {
  return <Button disabled>{TEST_TEXT}</Button>;
};
