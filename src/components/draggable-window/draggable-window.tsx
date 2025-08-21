import { FC, PropsWithChildren } from "react";

import { useClickOutside } from "@hooks/useOnClickOutside";

import { DraggableWindowContextProps, DraggableWindowProps } from "./types";

import { Header, Wrapper } from "./components";

import { useDraggWindow } from "./hooks";

import { DraggableWindowContext } from "./draggable-window.context";

export const DraggableWindow: FC<PropsWithChildren<DraggableWindowProps>> = ({
  id,
  isActiveTask,
  onMarkAsActiveTask,
  onMarkAsInactiveTask,
  position,
  windowWidth,
  title,
  actions,
  children,
}) => {
  const dragProperties = useDraggWindow({ onMarkAsActiveTask, position });

  useClickOutside({
    onClick: onMarkAsInactiveTask,
    refElement: dragProperties.windowRef,
  });

  const properties: DraggableWindowContextProps = {
    id,
    isActiveTask,
    onMarkAsActiveTask,
    windowWidth,
    title,
    actions,
    ...dragProperties,
  };

  return (
    <DraggableWindowContext.Provider value={properties}>
      <Wrapper>
        <Header />
        {children}
      </Wrapper>
    </DraggableWindowContext.Provider>
  );
};
