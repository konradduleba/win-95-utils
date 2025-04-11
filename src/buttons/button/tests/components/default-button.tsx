import { FC } from "react";

import { Button } from "@buttons/button";

import { TEST_TEXT } from "../mocks";

export const DefaultButton: FC = () => {
  return <Button value={TEST_TEXT}>{TEST_TEXT}</Button>;
};
