import React, { useState, useEffect } from "react";
import styled from "styled-components";

import "./App.css";
import GameContext, {
  IGameContextProps,
} from "./components/contexts/gameContext";
import BallBoard from "./components/ballboard/BallBoard";

import "./App.css";
import { JoinRoom } from "./components/joinRoom/JoinRoom";
import { Game } from "./components/game/Game";
import socketService from "./services/gameService/GameService";

const WelcomeText = styled.h1`
  margin: 0;
  color: #8e44ad;
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [isInRoom, setInRoom] = useState(false);
  const [playerSymbol, setPlayerSymbol] = useState<"x" | "o">("x");
  const [isPlayerTurn, setPlayerTurn] = useState(false);
  const [isGameStarted, setGameStarted] = useState(false);
  /*
  const connectSocket = async () => {
    const socket = await socketService
      .connect("http://localhost:9000")
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  useEffect(() => {
    connectSocket();
  }, []);

  const gameContextValue: IGameContextProps = {
    isInRoom,
    setInRoom,
    playerSymbol,
    setPlayerSymbol,
    isPlayerTurn,
    setPlayerTurn,
    isGameStarted,
    setGameStarted,
  };*/

  return (
    <>
      <BallBoard />
    </>
  );
}

export default App;
