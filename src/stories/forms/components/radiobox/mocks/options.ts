import { FormRadioboxProps } from "@forms/controllers/form-radiobox";
import { RADIOBOX_KEYS } from "../utils";

export const RADIOBOX_OPTIONS: FormRadioboxProps[] = [
  {
    label: "Option 1",
    name: RADIOBOX_KEYS.radiobox,
    value: RADIOBOX_KEYS.option_one,
    triggerKeys: ["E", "e"],
    disabled: true,
  },
  {
    label: "Option 2",
    name: RADIOBOX_KEYS.radiobox,
    value: RADIOBOX_KEYS.option_two,
    triggerKeys: ["F", "f"],
  },
  {
    label: "Option 3",
    name: RADIOBOX_KEYS.radiobox,
    value: RADIOBOX_KEYS.option_three,
    triggerKeys: ["x", "X"],
  },
];
