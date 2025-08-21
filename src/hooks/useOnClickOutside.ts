import { RefObject, useEffect } from "react";

export type UseClickOutsideProps<Element> = {
  refElement: RefObject<Element>;
  onClick: (event: MouseEvent | TouchEvent) => void;
};

export const useClickOutside = <Element extends HTMLElement>({
  onClick,
  refElement,
}: UseClickOutsideProps<Element>) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = refElement.current;

      if (!el || el.contains(event.target as Node)) {
        return;
      }

      onClick(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refElement, onClick]);
};
