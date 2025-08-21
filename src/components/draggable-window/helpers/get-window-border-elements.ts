import { Dash, Position, WindowDimensions } from "../types";

type GetWindowBorderElementsProps = {
  windowDimensions: WindowDimensions;
  initialWindowPosition: Position;
  newWindowPosition: Position;
};

const DASH_SIZE = 2;
const GAP = 1;

export const getWindowBorderElements = ({
  windowDimensions,
  initialWindowPosition,
  newWindowPosition,
}: GetWindowBorderElementsProps): Dash[] => {
  const { width, height } = windowDimensions;
  const unit = DASH_SIZE + GAP;

  const dashes: Dash[] = [];

  const isOverlapping = (x: number, y: number) =>
    x + DASH_SIZE > initialWindowPosition.x &&
    x < initialWindowPosition.x + width &&
    y + DASH_SIZE > initialWindowPosition.y &&
    y < initialWindowPosition.y + height;

  const numberOfWidthDashes = Math.floor(width / unit);
  const numberOfHeightDashes = Math.floor(height / unit);

  const pushDash = (x: number, y: number, isVertical: boolean) => {
    dashes.push({ x, y, isVertical, isOverlapping: isOverlapping(x, y) });
  };

  for (let i = 0; i < numberOfWidthDashes; i++) {
    const x = newWindowPosition.x + i * unit;
    pushDash(x, newWindowPosition.y, false);
    pushDash(x, newWindowPosition.y + height - DASH_SIZE, false);
  }

  for (let i = 0; i < numberOfHeightDashes; i++) {
    const y = newWindowPosition.y + i * unit;
    pushDash(newWindowPosition.x, y, true);
    pushDash(newWindowPosition.x + width - DASH_SIZE, y, true);
  }

  return dashes;
};
