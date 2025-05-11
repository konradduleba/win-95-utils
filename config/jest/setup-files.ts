import "vitest-canvas-mock";
import "@testing-library/jest-dom";
import "dotenv/config";

import {
  mockGetBoundingClientRect,
  mockHTMLElementOffsets,
  mockResizeObserver,
  mockScrollIntoView,
} from "./mocks";

mockGetBoundingClientRect();
mockHTMLElementOffsets();
mockResizeObserver();
mockScrollIntoView();
