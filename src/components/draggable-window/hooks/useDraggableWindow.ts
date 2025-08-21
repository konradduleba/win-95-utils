import { useContext } from "react";

import { DraggableWindowContext } from "../draggable-window.context";

export const useDraggableWindow = () => {
  const context = useContext(DraggableWindowContext);

  if (!context) {
    throw new Error(
      "useDraggableWindow must be used within a DraggableWindowContext"
    );
  }

  return context;
};
