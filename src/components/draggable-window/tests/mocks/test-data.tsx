import { Position } from "@components/draggable-window/types";
import { Action } from "@components/draggable-window/types/draggable-window";

import SvgClose from "@icons/close";
import SvgQuestionMark from "@icons/question-mark";

export const TEST_TITLE = "Welcome";

export const TEST_INITIAL_POSITION: Position = {
  x: 100,
  y: 100,
};

export const TEST_WINDOW_WIDTH = 300;

// 32 = padding + header value;
// 200 = content height from .scss
export const TEST_WINDOW_HEIGHT = 200 + 32;

export const TEST_WINDOW_ID = "draggable-window-example";

export const TEST_WINDOW_CONTENT_ID = "draggable-window-content";

const CLOSE_WINDOW_ACTION: Action = {
  id: "close-window",
  label: "Close Window",
  icon: <SvgClose />,
  onClick: () => console.log("Close Window"),
};

const QUESTION_MARK_ACTION: Action = {
  id: "question-mark",
  label: "Question Mark",
  icon: <SvgQuestionMark />,
  onClick: () => console.log("Question Mark"),
};

export const TEST_ACTIONS: Action[] = [
  QUESTION_MARK_ACTION,
  CLOSE_WINDOW_ACTION,
];
