import {
  DetailedHTMLProps,
  HTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  TouchEvent,
} from "react";

type GetButtonHandlersProps = {
  innerProps: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
};

export const getButtonHandlers = ({ innerProps }: GetButtonHandlersProps) => {
  const { "aria-hidden": ariaHidden, onMouseDown, onTouchEnd } = innerProps;

  const onHandleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onMouseDown?.(event as unknown as MouseEvent<HTMLDivElement>);
  };

  const onHandleTouchEnd = (event: TouchEvent<HTMLButtonElement>) => {
    onTouchEnd?.(event as unknown as TouchEvent<HTMLDivElement>);
  };

  const onHandleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const { code, key } = event;

    if (code === "Space" || key === " ") {
      event.preventDefault();
      event.stopPropagation();
      onMouseDown?.(event as unknown as MouseEvent<HTMLDivElement>);
    }
  };

  return {
    ariaHidden,
    onHandleClick,
    onHandleKeyDown,
    onHandleTouchEnd,
  };
};
