import { UNIT_MEASUREMENTS } from "./constants";

export function mockGetBoundingClientRect() {
  const originalGetBoundingClientRect =
    window.HTMLElement.prototype.getBoundingClientRect;

  window.HTMLElement.prototype.getBoundingClientRect = function (): DOMRect {
    const computedStyle = window.getComputedStyle(this);

    const parseSize = (size: string, relativeTo: number): number => {
      if (size.endsWith(UNIT_MEASUREMENTS.PX)) {
        return parseFloat(size) || 0;
      } else if (size.endsWith(UNIT_MEASUREMENTS.PERCENT)) {
        return (parseFloat(size) / 100) * relativeTo;
      } else if (size.endsWith(UNIT_MEASUREMENTS.VW)) {
        return (parseFloat(size) / 100) * window.innerWidth;
      } else if (size.endsWith(UNIT_MEASUREMENTS.VH)) {
        return (parseFloat(size) / 100) * window.innerHeight;
      }
      return 0;
    };

    const parentRect = this.parentElement
      ? originalGetBoundingClientRect.call(this.parentElement)
      : { width: window.innerWidth, height: window.innerHeight };

    const width = parseSize(computedStyle.width, parentRect.width);
    const height = parseSize(computedStyle.height, parentRect.height);
    const top = parseFloat(computedStyle.top) || 0;
    const left = parseFloat(computedStyle.left) || 0;

    return {
      x: left,
      y: top,
      width,
      height,
      top,
      left,
      right: left + width,
      bottom: top + height,
      toJSON() {
        return {
          x: this.x,
          y: this.y,
          width: this.width,
          height: this.height,
          top: this.top,
          left: this.left,
          bottom: this.bottom,
          right: this.right,
        };
      },
    } as DOMRect;
  };
}
