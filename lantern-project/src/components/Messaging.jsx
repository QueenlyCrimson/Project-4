import { useEffect, useState } from "react";
import io from "socket.io-client";
import Friends from "./Friends";
import Messages from "./Messages";
import Chatrooms from "./Chatrooms";

const Messaging = ({ socket }) => {
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  

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


  return(
    <div>
      <Messages />
      <Friends />
      <Chatrooms />
    </div>


  )
}


export default Messaging

{/* <div>
      <input
        placeholder="Room Number..."
        onChange={(event) => {
        setRoom(event.target.value);
      }}
      />
      <button onClick={joinRoom}>Join Room</button>
      <input
        placeholder="Message"
        onChange={(event) => {
        setMessage(event.target.value);
      }}
      />
      <button onClick={sendMessage}>Send</button>
      <h1>Message:</h1>
      {messageReceived}
    </div> */}