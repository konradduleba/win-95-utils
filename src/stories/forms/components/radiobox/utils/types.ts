export enum RADIOBOX_KEYS {
  radiobox = "radiobox",
  option_one = "option-one",
  option_two = "option-two",
  option_three = "option-three",
}

export type RadioboxOptionValue = Extract<
  RADIOBOX_KEYS,
  | RADIOBOX_KEYS.option_one
  | RADIOBOX_KEYS.option_two
  | RADIOBOX_KEYS.option_three
>;

export type RadioboxFormValues = {
  [RADIOBOX_KEYS.radiobox]?: RadioboxOptionValue;
};
