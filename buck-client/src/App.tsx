import React, { useState, useEffect } from "react";
import styled from "styled-components";

import "./App.css";
import GameContext, {
  IGameContextProps,
} from "./components/contexts/gameContext";
import { JoinRoom } from "./components/joinRoom/index";
import { Game } from "./components/game/index";
import socketService from "./services/socketService";
import gameService from "./services/gameService";
import BallBoard from "./components/ballboard/BallBoard";

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
  const [roomName, setRoomName] = useState("");

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

  const joinRoom = async () => {
    setRoomName("123");

    const socket = socketService.socket;

    if (!roomName || roomName.trim() === "" || !socket) return;
    const joined = await gameService
      .joinGameRoom(socket, roomName)
      .catch((err) => {
        alert(err);
      });
  };
*/
  useEffect(() => {
    //  connectSocket();
    //  joinRoom();
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
  };

  return (
    <>
      CIAOo
      <BallBoard />
      {/*<GameContext.Provider value={gameContextValue}>
      <AppContainer>
        <WelcomeText>Welcome to Tic-Tac-Toe</WelcomeText>
        <MainContainer>
          {!isInRoom && <JoinRoom />}
          {isInRoom && <Game />}
        </MainContainer>
  </AppContainer> </GameContext.Provider>*/}
    </>
  );
}

export default App;
