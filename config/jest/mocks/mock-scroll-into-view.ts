import { vi } from "vitest";

export const mockScrollIntoView = () => {
  window.HTMLElement.prototype.scrollIntoView = vi.fn();
};
