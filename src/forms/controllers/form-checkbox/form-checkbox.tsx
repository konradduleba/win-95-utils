import { FC, KeyboardEvent, ReactNode } from "react";
import { useController } from "react-hook-form";

import SvgCheck from "@icons/check";

import { CHECKBOX_LABEL_TEST_ID, CHECKBOX_INPUT_TEST_ID } from "./constants";

import styles from "./form-checkbox.module.scss";

type FormCheckboxProps = {
  testId: string;
  name: string;
  label: ReactNode;
};

export const FormCheckbox: FC<FormCheckboxProps> = ({
  name,
  label,
  testId,
}) => {
  const { field } = useController({
    name,
  });

  const isChecked = field.value;

  const onKeyPress = (e: KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      field.onChange(!isChecked);
    }
  };

  return (
    <div className={styles.formCheckbox} data-testid={testId}>
      <input
        {...field}
        type="checkbox"
        id={name}
        className={styles.input}
        checked={isChecked}
        data-testid={CHECKBOX_INPUT_TEST_ID}
      />
      <label
        htmlFor={name}
        className={styles.label}
        tabIndex={0}
        role="checkbox"
        aria-checked={isChecked}
        onKeyDown={onKeyPress}
        data-testid={CHECKBOX_LABEL_TEST_ID}
      >
        <div className={styles.box}>
          {isChecked && <SvgCheck className={styles.icon} />}
        </div>
        {label}
      </label>
    </div>
  );
};
