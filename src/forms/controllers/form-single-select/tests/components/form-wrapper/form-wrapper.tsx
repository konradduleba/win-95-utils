import { FC, PropsWithChildren } from "react";
import noop from "lodash.noop";

import { BaseForm, BaseFormProps, useBaseForm } from "@forms/base-form";

import { DEFAULT_VALUES, FormValues, getValidationSchema } from "./utils";

import { SubmitButton } from "./components";

type FormWrapperProps = Pick<BaseFormProps<FormValues>, "name"> & {
  isRequired?: boolean;
  withSubmitButton?: boolean;
};

export const FormWrapper: FC<PropsWithChildren<FormWrapperProps>> = ({
  children,
  isRequired = false,
  name,
  withSubmitButton,
}) => {
  const formParams = useBaseForm<FormValues>({
    validationSchema: getValidationSchema({
      isRequired,
    }),
    defaultValues: DEFAULT_VALUES,
  });

  return (
    <BaseForm formParams={formParams} onSubmit={noop} name={name}>
      {children}
      {withSubmitButton && <SubmitButton />}
    </BaseForm>
  );
};
