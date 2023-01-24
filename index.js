/*const http = require("http");

const server = http.createServer((req, res) =>{
  res.status = 200;
  res.setHeader ("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(3000, () =>{
  console.log("server on port 3000")
});*/

const express = require("express");
const app = express();

app.get("/", (req, res) =>{
  res.send("Hello, world");
});

app.get("/about", (req, res) =>{
  res.send("wenas");
});

app.listen(3000, () => {
  console.log("Server on port 3000");
});