import { FC } from "react";

import { TEST_SUBMIT_LABEL } from "../../../mocks";

export const SubmitButton: FC = () => {
  return <button aria-label={TEST_SUBMIT_LABEL} />;
};
