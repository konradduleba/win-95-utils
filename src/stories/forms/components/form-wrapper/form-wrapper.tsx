import { PropsWithChildren } from "react";
import * as yup from "yup";

import { BaseForm, useBaseForm } from "@forms/base-form";

import { FormContainer } from "./components";

export type FormWrapperProps<FormValues extends yup.AnyObject> = {
  defaultValues: FormValues;
  validationSchema: yup.ObjectSchema<FormValues>;
};

export const FormWrapper = <FormValues extends yup.AnyObject>({
  children,
  defaultValues,
  validationSchema,
}: PropsWithChildren<FormWrapperProps<FormValues>>) => {
  const formParams = useBaseForm<FormValues>({
    validationSchema,
    defaultValues,
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <BaseForm formParams={formParams} onSubmit={onSubmit}>
      <FormContainer>{children}</FormContainer>
    </BaseForm>
  );
};
