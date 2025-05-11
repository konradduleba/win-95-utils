import {
  DetailedHTMLProps,
  HTMLAttributes,
  KeyboardEvent,
  MouseEvent,
} from "react";

type GetButtonHandlersProps = {
  innerProps: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
};

export const getButtonHandlers = ({ innerProps }: GetButtonHandlersProps) => {
  const { "aria-hidden": ariaHidden, onMouseDown } = innerProps;

  const onHandleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onMouseDown?.(event as unknown as MouseEvent<HTMLDivElement>);
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
  };
};
