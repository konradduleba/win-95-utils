import { FONT_SIZES, SPACINGS, SYSTEM_COLORS, VARIABLES } from "./constants";

export const injectCssVariables = () => {
  const root = document.documentElement;

  Object.entries(SYSTEM_COLORS).forEach(([group, colors]) => {
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--system-${group}-${key}`, value);
    });
  });

  Object.entries(FONT_SIZES).forEach(([key, value]) => {
    root.style.setProperty(`--font-size-${key}`, value);
  });

  Object.entries(SPACINGS).forEach(([key, value]) => {
    root.style.setProperty(`--spacing-${key}`, value);
  });

  Object.entries(VARIABLES).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
};
