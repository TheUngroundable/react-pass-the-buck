import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import socketService from './services/socketService';
import gameService from "./services/gameService";

function App() {
  const [roomName, setRoomName] = useState("");

  const connectSocket = async () => {
    const socket = await socketService
      .connect("http://localhost:9000")
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  const joinRoom = async () => {

    setRoomName('123')

    const socket = socketService.socket;

    if (!roomName || roomName.trim() === "" || !socket) return;
    const joined = await gameService
      .joinGameRoom(socket, roomName)
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => {
    connectSocket();
    joinRoom();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
