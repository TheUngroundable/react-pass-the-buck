import React, { useRef } from "react";
import styled from "styled-components";

import Ball from "../ball/Ball";

interface BallBoardProps {}

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BallBoard = (props: BallBoardProps) => {
  const ballBoard = useRef() as React.MutableRefObject<HTMLDivElement>;

  return (
    <MainContainer>
      <div ref={ballBoard}>
        <Ball ballBoardRef={ballBoard} />
      </div>
    </MainContainer>
  );
};

export default BallBoard;
