import { RefObject } from "react";

export type ScreenProperties = {
  properties: DOMRect;
  setScreenProperties: (properties: DOMRect) => void;
};

export type ScreenPropertiesContextProps = ScreenProperties & {
  screenRef: RefObject<HTMLDivElement>;
};
