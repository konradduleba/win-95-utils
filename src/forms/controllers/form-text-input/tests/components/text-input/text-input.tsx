import { FC } from "react";

import { FormTextInput } from "@forms/controllers/form-text-input/form-text-input";
import { FormTextInputProps } from "@forms/controllers/form-text-input/types";

import { TEST_NAME, TEST_TRIGGER_KEY } from "../../mocks";

type TextInputProps = Omit<FormTextInputProps, "triggerKeys" | "name">;

export const TextInput: FC<TextInputProps> = (props) => {
  return (
    <FormTextInput name={TEST_NAME} triggerKeys={TEST_TRIGGER_KEY} {...props} />
  );
};
