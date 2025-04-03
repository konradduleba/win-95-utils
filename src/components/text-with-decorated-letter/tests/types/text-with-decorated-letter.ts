import { TextWithDecoratedLetterProps } from "../../text-with-decorated-letter";

export type TextWithDecoratedLetterBuilderProps = Pick<
  TextWithDecoratedLetterProps,
  "textDecoration"
> & {
  container: HTMLElement;
};

export type CheckIsLetterDecoratedProps = {
  letter: string;
};

export type CheckIsOnlyFirstLetterDecoratedProps = {
  letter: string;
};
