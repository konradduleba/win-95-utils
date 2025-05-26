import { ChangeEvent } from "react";
import { useController } from "react-hook-form";

import { FormNumberInputProps, InputHandlersProps } from "../types";

import { DEFAULT_STEP } from "../constants";

import { useHandleButtonActions } from "./useHandleButtonActions";

const NUMBER_REGEX = /^-?\d*(\.\d{0,2})?$/;

type UseHandleValueChangeProps = Pick<
  FormNumberInputProps,
  "max" | "min" | "name" | "step" | "disabled"
>;

export const useHandleValueChange = ({
  max,
  min,
  name,
  step = DEFAULT_STEP,
}: UseHandleValueChangeProps): InputHandlersProps => {
  const { field, fieldState } = useController({
    name,
  });

  const { onDecrementValue, onIncrementValue } = useHandleButtonActions({
    field,
    max,
    min,
    step,
  });

  const onHandleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const inputValue = target.value;

    if (
      inputValue === "" ||
      inputValue === "-" ||
      inputValue === "." ||
      inputValue === "-."
    ) {
      field.onChange(inputValue);
      return;
    }

    if (!NUMBER_REGEX.test(inputValue)) {
      return;
    }

    const numberValue = parseFloat(inputValue);

    if (isNaN(numberValue)) {
      return;
    }

    if (numberValue < min || numberValue > max) {
      return;
    }

    field.onChange(inputValue);
  };

  const onBlur = () => {
    const value = field.value;

    if (
      value === "" ||
      value === "-" ||
      value === "." ||
      value === "-." ||
      !NUMBER_REGEX.test(value)
    ) {
      return;
    }

    const numberValue = parseFloat(value);

    if (!isNaN(numberValue)) {
      field.onChange(numberValue);
    }
  };

  return {
    onHandleChange,
    onBlur,
    value: field.value,
    onIncrementValue,
    onDecrementValue,
    isInvalid: fieldState.invalid,
  };
};
