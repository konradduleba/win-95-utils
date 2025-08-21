import { FC, PropsWithChildren } from "react";

import { ScreenPropertiesContext } from "./screen-properties.context";

import { useGetScreenProperties } from "./hooks";

export const ScreenPropertiesProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const properties = useGetScreenProperties();

  return (
    <ScreenPropertiesContext.Provider value={properties}>
      {children}
    </ScreenPropertiesContext.Provider>
  );
};
