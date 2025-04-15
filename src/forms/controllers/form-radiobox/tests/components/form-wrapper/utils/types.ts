import { TEST_NAME } from "../../../mocks";

export enum RADIOBOX_KEYS {
  option_one = "option-one",
  option_two = "option-two",
  option_three = "option-three",
}

export type FormValues = {
  [TEST_NAME]: RADIOBOX_KEYS | undefined;
};
