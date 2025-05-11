import { RefObject, useEffect, useRef } from "react";

export type UseFocusOnKeyPressProps = {
  triggerKeys: string | string[];
};

export type UseFocusOnKeyPressReturnProps<RefType> = {
  elementRef: RefObject<RefType>;
};

const isFocusable = (element: Element | null) => {
  if (!element) return false;
  return (
    element instanceof HTMLInputElement ||
    element instanceof HTMLButtonElement ||
    element instanceof HTMLLabelElement ||
    element instanceof HTMLDivElement
  );
};

export const useFocusOnKeyPress = <RefType extends HTMLElement>({
  triggerKeys,
}: UseFocusOnKeyPressProps): UseFocusOnKeyPressReturnProps<RefType> => {
  const elementRef = useRef<RefType>(null);
  const shouldFocus = useRef(true);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const activeElement = document.activeElement;

      const keys = Array.isArray(triggerKeys) ? triggerKeys : [triggerKeys];

      if (!isFocusable(activeElement) && keys.includes(event.key)) {
        event.preventDefault();
        elementRef.current?.focus();
      }

      if (activeElement === elementRef.current) {
        shouldFocus.current = false;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [triggerKeys]);

  return {
    elementRef,
  };
};
