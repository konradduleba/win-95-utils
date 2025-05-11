import { RefCallback } from "react";

import { SCROLL_OPTIONS } from "../../../../../constants";

type UseSetOptionRefProps = {
  isFocused: boolean;
  innerRef: RefCallback<HTMLDivElement>;
};

export const useSetOptionRef = ({
  isFocused,
  innerRef,
}: UseSetOptionRefProps) => {
  const setOptionRef = (node: HTMLDivElement | null) => {
    if (isFocused && node) {
      node.scrollIntoView(SCROLL_OPTIONS);
    }

    if (innerRef) {
      innerRef(node);
    }
  };

  return {
    setOptionRef,
  };
};
