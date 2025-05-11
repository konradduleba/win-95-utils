import { useState, useEffect, useRef } from "react";

import { getScrollHeight } from "../helpers";

import { ScrollableContentProps } from "../types";

type UseGetIsScrollVisibleProps = Pick<ScrollableContentProps, "customHeight">;

export const useGetIsScrollVisible = ({
  customHeight,
}: UseGetIsScrollVisibleProps) => {
  const childrenRef = useRef<HTMLDivElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(customHeight || 0);

  useEffect(() => {
    if (!childrenRef.current) return;

    const updateVisibility = () => {
      if (customHeight) {
        const containerHeight = childrenRef.current?.clientHeight ?? 0;

        setIsVisible(containerHeight > customHeight);
      } else {
        const currentScrollHeight = getScrollHeight({
          childrenRef,
        });

        const containerHeight = childrenRef.current?.clientHeight ?? 0;

        setIsVisible(containerHeight > currentScrollHeight);
        setScrollHeight(currentScrollHeight);
      }
    };

    updateVisibility();

    const resizeObserver = new ResizeObserver(updateVisibility);
    resizeObserver.observe(childrenRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [childrenRef, customHeight]);

  return {
    isVisible,
    scrollHeight,
    childrenRef,
  };
};
