import { i18n } from "@lingui/core";

import { Locales, Module } from "./types";

export async function dynamicActivate(locale: Locales) {
  const path = `../../locales/${locale}/${locale}.json`;

  try {
    const { default: messages } = (await import(
      /* @vite-ignore */ path
    )) as Module;

    i18n.load(locale, messages);
    i18n.activate(locale);
  } catch (error) {
    console.error(`Error loading locale ${locale}:`, error);
  }
}
