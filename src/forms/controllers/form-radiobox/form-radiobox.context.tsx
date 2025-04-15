import { createContext } from "react";

import { FormRadioboxContextProps } from "./types";

export const FormRadioboxContext =
  createContext<FormRadioboxContextProps | null>(null);
