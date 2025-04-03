import { HTMLInputAutoCompleteAttribute } from "react";

export type FormTextInputBuilderProps = {
  name: string;
};

export type ChangeInputValueProps = {
  newValue: string;
};

export type CheckAutoCompleteAttributeProps = {
  attribute: HTMLInputAutoCompleteAttribute;
};

export type FocusInputWithAKeyProps = {
  key: string;
};
