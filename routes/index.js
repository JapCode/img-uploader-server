const express = require("express");
const https = require("https");
const upload = require("./upload");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/upload", upload);
}

module.exports = routerApi;
