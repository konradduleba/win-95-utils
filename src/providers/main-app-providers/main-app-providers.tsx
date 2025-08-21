import { FC, PropsWithChildren } from "react";

import { LangProvider } from "@providers/lang-provider/lang.provider";
import { ScreenPropertiesProvider } from "@providers/screen-properties-provider/screen-properties.provider";

import { Content } from "./components";

export const MainAppProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LangProvider>
      <ScreenPropertiesProvider>
        <Content>{children}</Content>
      </ScreenPropertiesProvider>
    </LangProvider>
  );
};
