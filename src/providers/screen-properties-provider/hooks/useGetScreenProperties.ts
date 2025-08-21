import { useRef, useState } from "react";

import { SCREEN_PROPERTIES_INITIAL_VALUES } from "../constants";

export const useGetScreenProperties = () => {
  const screenRef = useRef<HTMLDivElement>(null);

  const [properties, setScreenProperties] = useState<DOMRect>(
    SCREEN_PROPERTIES_INITIAL_VALUES
  );

  return {
    screenRef,
    properties,
    setScreenProperties,
  };
};
