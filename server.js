const express = require("express");
const cors = require("cors");
const app = express();
const ServerRouter = require("./routes/ServerRouter");
const { isObject } = require("util");

const http = require("http");

const server = http.createServer(app);

const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`user with an id of ${socket.id} has connected!`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    console.log(data);
    socket.to(data.room).emit("receive_message", data);
  });
});

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/server", ServerRouter);

server.listen(3001, () => {
  console.log(`Server is running on the port ${PORT}`);
});
