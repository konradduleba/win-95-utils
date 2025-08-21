import { createContext } from "react";

import { DraggableWindowContextProps } from "./types";

export const DraggableWindowContext =
  createContext<DraggableWindowContextProps | null>(null);
