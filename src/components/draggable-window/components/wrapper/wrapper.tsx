import { FC, PropsWithChildren } from "react";

import { useDraggableWindow } from "../../hooks";

import { MainWindow, PreviewWindow } from "./components";

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  const { isWindowDragging } = useDraggableWindow();

  return (
    <>
      <MainWindow>{children}</MainWindow>
      {isWindowDragging && <PreviewWindow />}
    </>
  );
};
