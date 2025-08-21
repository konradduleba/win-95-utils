import { useContext } from "react";

import { ScreenPropertiesContext } from "../screen-properties.context";

export const useScreenProperties = () => {
  const context = useContext(ScreenPropertiesContext);

  if (!context) {
    throw new Error(
      "useScreenProperties must be used within a ScreenPropertiesContext"
    );
  }

  return context;
};
