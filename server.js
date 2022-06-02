import express from "express";

import apiRouter from "./api";

const server = express();

server.set("view engine", "ejs");

server.get("/", (req, res) => {
  res.render("index", {
    content: "...",
  });
});

server.use("/api", apiRouter);

server.use(express.static("public")); // route to all files in public folder as /about.html

server.listen(8080, () => {
  console.log("Express listening at Port : " + 8080);
});
