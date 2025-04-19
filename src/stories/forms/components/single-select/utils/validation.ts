import * as yup from "yup";

import { SelectOption } from "@forms/controllers/form-single-select/types";

import { SINGLE_SELECT_KEYS, SingleSelectFormValues } from "./types";

import { SINGLE_SELECT_OPTIONS } from "../mocks";

export const singleSelectValidationSchema: yup.ObjectSchema<SingleSelectFormValues> =
  yup.object({
    [SINGLE_SELECT_KEYS.single_select]: yup
      .mixed<SelectOption["value"]>()
      .oneOf(SINGLE_SELECT_OPTIONS.map(({ value }) => value))
      .required(),
  });
