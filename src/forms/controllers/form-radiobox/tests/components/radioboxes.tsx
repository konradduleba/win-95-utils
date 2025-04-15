import { FC } from "react";

import { FormWrapper } from "./form-wrapper/form-wrapper";

import { FormRadiobox } from "../../form-radiobox";

import { RADIOBOX_OPTIONS, TEST_FORM_NAME } from "../mocks";

export const Radioboxes: FC = () => {
  return (
    <FormWrapper name={TEST_FORM_NAME} withSubmitButton>
      {RADIOBOX_OPTIONS.map((props) => (
        <FormRadiobox key={props.value} {...props} />
      ))}
    </FormWrapper>
  );
};
