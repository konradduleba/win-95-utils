import { createContext } from "react";

import { ScreenPropertiesContextProps } from "./types";

export const ScreenPropertiesContext =
  createContext<ScreenPropertiesContextProps | null>(null);
