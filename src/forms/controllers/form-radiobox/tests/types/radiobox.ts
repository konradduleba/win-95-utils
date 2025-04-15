import { FormRadioboxProps } from "../../types";

export type FormRadioboxBuilderProps = {
  name: string;
};

export type FocusInputWithAKeyProps = {
  key: string;
  expectedValue: FormRadioboxProps["value"];
};

export type CheckIsDisabledRadiobox = {
  expectedValue: FormRadioboxProps["value"];
};

export type CheckIsSelectedRadiobox = {
  expectedValue: FormRadioboxProps["value"];
};

export type SelectRadiobox = {
  value: FormRadioboxProps["value"];
};

export type CheckBooleanAriaProp = {
  property: string | null;
};
