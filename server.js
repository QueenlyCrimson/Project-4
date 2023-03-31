const express = require("express");
const cors = require("cors");
const ServerRouter = require("./routes/ServerRouter");
const WebSocket = require("ws");

const app = express();
const wss = new WebSocket.Server({ port: 8082 });

wss.on("connection", (ws) => {
  //this will run on connection
  console.log("New Client Connected!");

  ws.on("message", (data) => {
    console.log(`Client has sent us: ${data}`);

    ws.send(data);
  });

  ws.on("close", () => {
    console.log("Client has disconnected!");
  });
});

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/server", ServerRouter);

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`));
