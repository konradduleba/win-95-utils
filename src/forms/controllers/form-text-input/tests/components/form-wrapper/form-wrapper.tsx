import { FC, PropsWithChildren } from "react";
import noop from "lodash.noop";

import { BaseForm, BaseFormProps, useBaseForm } from "@forms/base-form";

import { MainAppProviders } from "@providers/main-app-providers/main-app-providers";

import { DEFAULT_VALUES, FormValues, getValidationSchema } from "./utils";

import { SubmitButton } from "./components";

type FormWrapperProps = Pick<BaseFormProps<FormValues>, "name"> & {
  isRequired?: boolean;
  withSubmitButton?: boolean;
  customErrorMessage?: string;
};

export const FormWrapper: FC<PropsWithChildren<FormWrapperProps>> = ({
  children,
  isRequired = false,
  name,
  withSubmitButton,
  customErrorMessage,
}) => {
  const formParams = useBaseForm<FormValues>({
    validationSchema: getValidationSchema({
      isRequired,
      customErrorMessage,
    }),
    defaultValues: DEFAULT_VALUES,
  });

  return (
    <MainAppProviders>
      <BaseForm formParams={formParams} onSubmit={noop} name={name}>
        {children}
        {withSubmitButton && <SubmitButton />}
      </BaseForm>
    </MainAppProviders>
  );
};
