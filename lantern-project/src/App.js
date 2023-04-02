import io from "socket.io-client";
import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Messaging from "./components/Messaging";

const socket = io.connect("http://localhost:3001");

function App() {
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", {
      message,
      room,
    });
  };

  useEffect(() => {
    socket.on(`receive_message`, (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  return (
    <div className="App">
      <NavBar />
      <Messaging socket={socket} />
    </div>
  );
}

export default App;
