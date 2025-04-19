import { SelectOption } from "@forms/controllers/form-single-select/types";

export enum SINGLE_SELECT_KEYS {
  single_select = "single-select",
}

export type SingleSelectFormValues = {
  [SINGLE_SELECT_KEYS.single_select]: SelectOption["value"] | undefined;
};
