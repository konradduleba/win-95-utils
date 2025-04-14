import { createContext } from "react";

import { FormCheckboxContextProps } from "./types";

export const FormCheckboxContext =
  createContext<FormCheckboxContextProps | null>(null);
