import { createContext } from "react";

import { FormSingleSelectContextProps } from "./types";

export const FormSingleSelectContext =
  createContext<FormSingleSelectContextProps | null>(null);
