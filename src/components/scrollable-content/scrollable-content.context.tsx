import { createContext } from "react";

import { ScrollableContentContextProps } from "./types";

export const ScrollableContentContext =
  createContext<ScrollableContentContextProps | null>(null);
