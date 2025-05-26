import { ControllerRenderProps, FieldValues } from "react-hook-form";

import { DEFAULT_STEP } from "../constants";

import { getRoundValue, getStepPrecision } from "../helpers";

import { FormNumberInputProps } from "../types";

type UseHandleButtonActionsProps = Pick<
  FormNumberInputProps,
  "max" | "min" | "step"
> & {
  field: ControllerRenderProps<FieldValues, string>;
};

enum ButtonDirection {
  INCREMENT = "increment",
  DECREMENT = "decrement",
}

type UpdateValueByStepProps = {
  direction: ButtonDirection;
};

export const useHandleButtonActions = ({
  max,
  min,
  step = DEFAULT_STEP,
  field,
}: UseHandleButtonActionsProps) => {
  const updateValueByStep = ({ direction }: UpdateValueByStepProps) => {
    const current = parseFloat(field.value);
    const defaultValue = isNaN(current) ? 0 : current;

    let newValue =
      direction === ButtonDirection.INCREMENT
        ? defaultValue + step
        : defaultValue - step;

    if (max !== undefined && newValue > max) {
      newValue = max;
    }

    if (min !== undefined && newValue < min) {
      newValue = min;
    }

    const stepPrecision = getStepPrecision({ step, defaultValue });

    const roundValue = getRoundValue({
      value: newValue,
      decimals: stepPrecision,
    });

    field.onChange(roundValue);
  };

  const onIncrementValue = () => {
    updateValueByStep({ direction: ButtonDirection.INCREMENT });
  };

  const onDecrementValue = () => {
    updateValueByStep({ direction: ButtonDirection.DECREMENT });
  };

  return {
    onIncrementValue,
    onDecrementValue,
  };
};
