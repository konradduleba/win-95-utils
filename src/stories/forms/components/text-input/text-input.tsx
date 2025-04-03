import { FC } from "react";

import { FormTextInput } from "@forms/controllers";
import { FormTextInputProps } from "@forms/controllers/form-text-input/types";

import { FormWrapper } from "../form-wrapper/form-wrapper";

import {
  TEXT_INPUT_KEYS,
  getFormDefaultValues,
  textInputValidationSchema,
} from "./utils";

type TextInputProps = Omit<FormTextInputProps, "name">;

export const TextInput: FC<TextInputProps> = (props) => {
  const defaultValues = getFormDefaultValues();

  return (
    <FormWrapper
      defaultValues={defaultValues}
      validationSchema={textInputValidationSchema}
    >
      <FormTextInput name={TEXT_INPUT_KEYS.value} {...props} />
    </FormWrapper>
  );
};
