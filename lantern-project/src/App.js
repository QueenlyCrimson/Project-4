import io from "socket.io-client";
import { useEffect, useState } from "react";
import "./App.css";

const socket = io.connect("http://localhost:3001");

function App() {
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    socket.emit("send_message", { message: message });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      alert(data.message);
    });
  }, [socket]);

  return (
    <div className="App">
      <input
        placeholder="Message"
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
