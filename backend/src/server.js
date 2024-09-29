const dotenv = require("dotenv");
const express = require("express");
const { WebSocketServer } = require("ws");

dotenv.config();
const app = express();

const wss = new WebSocketServer({ port: process.env.PORT || 8080 });
console.log("Server is running...");

wss.on("connection", (ws) => {
  console.log("[WebSocket] { Connection established }");

  ws.on("error", () => "[WebSocket] Error");

  ws.on("message", (data) => {
    return wss.clients.forEach((client) => client.send(data.toString()));
  });
});

app.get("/", (req, res) => {
  res
    .send(
      "[Ephemeral - WebSocket] Acesse o projeto em: https://ephemeral-web.vercel.app/"
    )
    .status(200);
});
