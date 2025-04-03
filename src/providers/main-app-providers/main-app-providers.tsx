import { FC, PropsWithChildren } from "react";

import { LangProvider } from "@providers/lang-provider/lang.provider";

export const MainAppProviders: FC<PropsWithChildren> = ({ children }) => {
  return <LangProvider>{children}</LangProvider>;
};
