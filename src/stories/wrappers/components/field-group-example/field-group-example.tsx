import { FC } from "react";

import {
  FieldGroup,
  FieldGroupProps,
} from "@components/field-group/field-group";

import { Button } from "@buttons/button/button";

export const FieldGroupExample: FC<FieldGroupProps> = ({
  title,
  focusLetter,
}) => {
  return (
    <FieldGroup title={title} focusLetter={focusLetter}>
      <Button>Click me</Button>
    </FieldGroup>
  );
};
