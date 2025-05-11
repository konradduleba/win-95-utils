export const mockScrollHeight = () => {
  Object.defineProperty(HTMLElement.prototype, "scrollHeight", {
    configurable: true,
    value: 200,
  });
};
