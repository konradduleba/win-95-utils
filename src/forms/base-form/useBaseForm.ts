import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { FieldValues, Mode, useForm, UseFormReturn } from "react-hook-form";
import type { AnyObjectSchema } from "yup";

export interface BaseFormProps<T> {
  defaultValues: T;
  mode?: Mode;
  validationSchema?: AnyObjectSchema;
  shouldUpdateDefaultValues?: boolean;
}

export const useBaseForm = <T>({
  mode = "onBlur",
  defaultValues,
  validationSchema,
  shouldUpdateDefaultValues,
}: BaseFormProps<T>): UseFormReturn<FieldValues, object> => {
  const formParams = useForm({
    mode,
    defaultValues,
    ...(validationSchema && { resolver: yupResolver(validationSchema) }),
  });
  const { reset } = formParams;

  useEffect(() => {
    if (shouldUpdateDefaultValues) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldUpdateDefaultValues]);

  return formParams;
};
