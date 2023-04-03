import { useEffect, useState } from "react";
import io from "socket.io-client";
import Messages from "./Messages";

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
      <div className="friends"></div>
      <div className="boxforchats">
        <div className="chatrooms" ></div>
      </div>
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