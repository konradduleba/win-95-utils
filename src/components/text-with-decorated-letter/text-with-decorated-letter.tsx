import { FC } from "react";

import { Typography } from "@typography/typography";

export type TextWithDecoratedLetterProps = {
  text: string;
  letter: string;
  textDecoration: "underline" | "overline" | "line-through" | "none";
};

export const TextWithDecoratedLetter: FC<TextWithDecoratedLetterProps> = ({
  text,
  letter,
  textDecoration,
}) => {
  const firstIndex = text.indexOf(letter);

  return (
    <>
      {text.split("").map((char, index) => (
        <Typography
          variant="span"
          key={index}
          style={index === firstIndex ? { textDecoration } : undefined}
        >
          {char}
        </Typography>
      ))}
    </>
  );
};
