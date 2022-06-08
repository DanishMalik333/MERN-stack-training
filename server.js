import express from "express";
import config from "./config";
import serverRender from "./serverRender";

import apiRouter from "./api";

const server = express();

server.set("view engine", "ejs");

server.get("/", (req, res) => {
  serverRender()
    .then((content) => {
      res.render("index", {
        content,
      });
    })
    .catch(console.error);
});

server.use("/api", apiRouter);

server.use(express.static("public")); // route to all files in public folder as /about.html

server.listen(config.port, () => {
  console.log("Express listening at Port : " + config.port);
});
