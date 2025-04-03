import { FC, PropsWithChildren } from "react";

import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";

import { useLanguage } from "./hooks";

export const LangProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isLoaded } = useLanguage();

  if (!isLoaded) {
    return null;
  }

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
};
