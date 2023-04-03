import io from "socket.io-client";
import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Messaging from "./components/Messaging";
import Home from "./pages/Home";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "./components/SignIn";
import MakeProfile from "./pages/MakeProfile";

const socket = io.connect("http://localhost:3001");

function App() {
  const [user, setUser] = useState(null);
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
      <Routes>
        <Route index element={<Home user={user} />} />
        <Route
          path="/signIn"
          element={<SignIn user={user} setUser={setUser} />}
        />
        <Route path="/makeProfile" element={<MakeProfile />} />
      </Routes>
    </div>
  );
}

export default App;
