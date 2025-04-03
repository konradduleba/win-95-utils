import { useEffect, useState } from "react";

import { dynamicActivate } from "../i18n";

import { Locales } from "../types";

export const useLanguage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadLanguage = async () => {
      await dynamicActivate(Locales.EN);
      setIsLoaded(true);
    };

    loadLanguage();
  }, []);

  return { isLoaded };
};
