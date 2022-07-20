import React, { ReactNode, useRef } from "react";
import styled from "styled-components";

import Ball from "../ball/Ball";

interface BallBoardProps {}

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20%;
`;

const BallBoard = (props: BallBoardProps) => {
  const ballBoard = useRef() as React.MutableRefObject<HTMLDivElement>;

  return (
    <>
      <MainContainer>
        <Ball ballBoardRef={ballBoard} />
      </MainContainer>
    </>
  );
};

export default BallBoard;
