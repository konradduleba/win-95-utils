import "vitest-canvas-mock";
import "@testing-library/jest-dom";
import "dotenv/config";

import {
  injectCssVariables,
  mockGetBoundingClientRect,
  mockHTMLElementOffsets,
  mockResizeObserver,
  mockScrollIntoView,
} from "./mocks";
import { beforeAll } from "vitest";

mockGetBoundingClientRect();
mockHTMLElementOffsets();
mockResizeObserver();
mockScrollIntoView();

beforeAll(() => {
  injectCssVariables();
});
