import { FC } from "react";

import { FormWrapper } from "../form-wrapper/form-wrapper";

import { FormRadioboxProps } from "@forms/controllers/form-radiobox/types";
import { FormRadiobox } from "@forms/controllers/form-radiobox/form-radiobox";

import {
  getFormDefaultValues,
  RadioboxOptionValue,
  radioboxValidationSchema,
} from "./utils";

type RadioboxProps = {
  options: FormRadioboxProps[];
  initialValue?: RadioboxOptionValue;
};

export const Radiobox: FC<RadioboxProps> = ({ options, initialValue }) => {
  const defaultValues = getFormDefaultValues({ initialValue });

  return (
    <FormWrapper
      defaultValues={defaultValues}
      validationSchema={radioboxValidationSchema}
    >
      {options.map((props) => (
        <FormRadiobox key={props.value} {...props} />
      ))}
    </FormWrapper>
  );
};
