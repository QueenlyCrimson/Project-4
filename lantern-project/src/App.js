import io from "socket.io-client";
import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Messaging from "./components/Messaging";
import Home from "./pages/Home";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "./components/SignIn";
import MakeProfile from "./pages/MakeProfile";
import { CheckSession, getUserInfo } from "./services/Auth";
import UpdateProfile from "./pages/UpdateProfile";

const socket = io.connect("http://localhost:3001");

function App() {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const checkToken = async () => {
    const userCS = await CheckSession();
    setUser(userCS);
  };

  // const joinRoom = () => {
  //   if (room !== "") {
  //     socket.emit("join_room", room);
  //   }
  // };

  // const sendMessage = () => {
  //   socket.emit("send_message", {
  //     message,
  //     room,
  //   });
  // };

  // useEffect(() => {
  //   socket.on(`receive_message`, (data) => {
  //     setMessageReceived(data.message);
  //   });
  // }, [socket]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkToken();
    }
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleLogOut = () => {
    setUser(null);
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="App">
      <NavBar user={user} handleLogOut={handleLogOut} />
      <Routes>
        <Route index element={<Home socket={socket} user={user} />} />
        <Route
          path="/signIn"
          element={
            <SignIn user={user} setUser={setUser} setUserInfo={setUserInfo} />
          }
        />
        <Route path="/makeProfile" element={<MakeProfile />} />
        <Route path="/updateProfile" element={<UpdateProfile />} />
      </Routes>
    </div>
  );
}

export default App;
