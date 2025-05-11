import { UNIT_MEASUREMENTS } from "./constants";

export function mockHTMLElementOffsets() {
  Object.defineProperties(window.HTMLElement.prototype, {
    offsetWidth: {
      get() {
        const { width } = window.getComputedStyle(this);

        if (width.endsWith(UNIT_MEASUREMENTS.PX)) {
          return parseFloat(width) || 0;
        } else if (width.endsWith(UNIT_MEASUREMENTS.PERCENT)) {
          const parent = this.parentElement || document.body;
          const parentWidth = parent.clientWidth || window.innerWidth;
          return (parseFloat(width) / 100) * parentWidth;
        } else if (width.endsWith(UNIT_MEASUREMENTS.VW)) {
          return (parseFloat(width) / 100) * window.innerWidth;
        }
        return 0;
      },
    },
    offsetHeight: {
      get() {
        const { height } = window.getComputedStyle(this);

        if (height.endsWith(UNIT_MEASUREMENTS.PX)) {
          return parseFloat(height) || 0;
        } else if (height.endsWith(UNIT_MEASUREMENTS.PERCENT)) {
          const parent = this.parentElement || document.body;
          const parentHeight = parent.clientHeight || window.innerHeight;
          return (parseFloat(height) / 100) * parentHeight;
        } else if (height.endsWith(UNIT_MEASUREMENTS.VH)) {
          return (parseFloat(height) / 100) * window.innerHeight;
        }
        return 0;
      },
    },
    offsetTop: {
      get() {
        const { marginTop } = window.getComputedStyle(this);
        const parent = this.offsetParent || document.body;

        return (
          (parseFloat(marginTop) || 0) +
          (parent instanceof HTMLElement ? parent.offsetTop : 0)
        );
      },
    },
    offsetLeft: {
      get() {
        const { marginLeft } = window.getComputedStyle(this);
        const parent = this.offsetParent || document.body;

        return (
          (parseFloat(marginLeft) || 0) +
          (parent instanceof HTMLElement ? parent.offsetLeft : 0)
        );
      },
    },
  });
}
