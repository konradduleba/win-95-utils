import "vitest-canvas-mock";
import "@testing-library/jest-dom";
import "dotenv/config";

import { getBoundingClientRectMock, HTMLElementOffsets } from "./mocks";

getBoundingClientRectMock();
HTMLElementOffsets();
