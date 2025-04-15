import { FormRadioboxProps } from "@forms/controllers/form-radiobox";

import { RADIOBOX_KEYS } from "../components/form-wrapper/utils/types";

import { TEST_NAME, TEST_TRIGGER_KEY } from "./test-data";

export const RADIOBOX_OPTIONS: FormRadioboxProps[] = [
  {
    label: "Option 1",
    name: TEST_NAME,
    value: RADIOBOX_KEYS.option_one,
    triggerKeys: ["E", "e"],
    disabled: true,
  },
  {
    label: "Option 2",
    name: TEST_NAME,
    value: RADIOBOX_KEYS.option_two,
    triggerKeys: ["F", "f"],
  },
  {
    label: "Option 3",
    name: TEST_NAME,
    value: RADIOBOX_KEYS.option_three,
    triggerKeys: [TEST_TRIGGER_KEY, "X"],
  },
];
