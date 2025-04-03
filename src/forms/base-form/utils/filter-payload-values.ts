import type { FieldValues } from 'react-hook-form';

// Replace empty string properties with null for BE
export const filterPayloadValues = (fieldValues: FieldValues): FieldValues => (
  Object.keys(fieldValues).forEach((key) => {
    if (fieldValues[key] === Object(fieldValues[key]))
      filterPayloadValues(fieldValues[key]);
    if (fieldValues[key] === '') fieldValues[key] = null;
    return fieldValues[key];
  }),
  fieldValues
);
