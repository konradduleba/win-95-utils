import { useContext } from "react";

import { ScrollableContentContext } from "../scrollable-content.context";

export const useScrollableContent = () => {
  const context = useContext(ScrollableContentContext);

  if (!context) {
    throw new Error(
      "useScrollableContent must be used within a ScrollableContentContext"
    );
  }

  return context;
};
