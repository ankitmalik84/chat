import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

// Create an http server using the express app
const server = http.createServer(app);

// Create a socket.io server using the http server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Allow connections from the specified origin
    methods: ["GET", "POST"], // Allow GET and POST methods
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {}; //{userId: socketId}

// Listen for new connections on the socket.io server
io.on("connection", (socket) => {
  console.log(`a user connected : ${socket.id}`);

  const userId = socket.handshake.query.userId;
  if (userId != "undefined") {
    userSocketMap[userId] = socket.id;
  }

  //  io.emit() is used to send the events to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  //   socket.on() is used to listen to the events. can be used both on client and server side.
  // Listen for the 'disconnect' event on the socket
  socket.on("disconnect", () => {
    console.log(`user disconnected : ${socket.id}`);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

// Export the app, io, and server objects for use elsewhere in the application
export { app, io, server };
