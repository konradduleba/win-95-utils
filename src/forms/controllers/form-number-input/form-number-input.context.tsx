import { createContext } from "react";

import { FormNumberInputContextProps } from "./types";

export const FormNumberInputContext =
  createContext<FormNumberInputContextProps | null>(null);
