export type InputRange = {
  min: number;
  max: number;
};

export type ChangeNumberInputValueProps = {
  testId: string;
  difference: number;
  range?: InputRange;
};

export type ChangeNumberInputValueByTypingProps = {
  testId: string;
  newValue: number;
};
