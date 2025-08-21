import { FC, PropsWithChildren, useLayoutEffect } from "react";

import { useScreenProperties } from "@providers/screen-properties-provider/hooks";

import styles from "./content.module.scss";

export const Content: FC<PropsWithChildren> = ({ children }) => {
  const { screenRef, setScreenProperties } = useScreenProperties();

  useLayoutEffect(() => {
    if (screenRef.current) {
      const divRect = screenRef.current.getBoundingClientRect();
      setScreenProperties(divRect);
    }
  }, [setScreenProperties, screenRef]);

  return (
    <div ref={screenRef} className={styles.mainContent}>
      {children}
    </div>
  );
};
