import { Position } from "@components/draggable-window/types";
import { Action } from "@components/draggable-window/types/draggable-window";

import SvgClose from "@icons/close";
import SvgQuestionMark from "@icons/question-mark";

export const INITIAL_POSITION: Position = {
  x: 100,
  y: 100,
};

export const WINDOW_WIDTH = 300;

export const WINDOW_ID = "draggable-window-example";

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

export const ACTIONS: Action[] = [QUESTION_MARK_ACTION, CLOSE_WINDOW_ACTION];
