import { FC } from "react";

import { Actions, Title, Wrapper } from "./components";

export const Header: FC = () => {
  return (
    <Wrapper>
      <Title />
      <Actions />
    </Wrapper>
  );
};
