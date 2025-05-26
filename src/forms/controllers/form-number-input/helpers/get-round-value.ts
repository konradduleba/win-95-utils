type GetRoundValueProps = {
  value: number;
  decimals: number;
};

export const getRoundValue = ({
  decimals,
  value,
}: GetRoundValueProps): number => {
  return parseFloat(value.toFixed(decimals));
};

type GetDecimalPlacesProps = {
  value: number;
};

const getDecimalPlaces = ({ value }: GetDecimalPlacesProps): number => {
  const str = value.toString();
  if (str.includes(".")) {
    return str.split(".")[1].length;
  }
  return 0;
};

type GetStepPrecisionProps = {
  defaultValue: number;
  step: number;
};

export const getStepPrecision = ({
  step,
  defaultValue,
}: GetStepPrecisionProps): number => {
  const defaultValueDecimal = getDecimalPlaces({ value: defaultValue });
  const stepDecimal = getDecimalPlaces({ value: step });

  return Math.max(defaultValueDecimal, stepDecimal);
};
