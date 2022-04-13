import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  transports: ["websocket", "polling"],
  cors: {
    cors: {
      origin: "http://localhost:3000",
    },
  },
});

app.get("/", (req, res) => {
  res.json("Smart Home Backend");
});

io.on("connection", (socket) => {
  console.log("New Client Connected");

  socket.on("slider-data", (data) => {
    console.log(data);
  });
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
