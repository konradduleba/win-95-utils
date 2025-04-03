import { createContext } from "react";

import { FormTextInputContextProps } from "./types";

export const FormTextInputContext =
  createContext<FormTextInputContextProps | null>(null);
