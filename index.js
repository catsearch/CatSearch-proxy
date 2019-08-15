const express = require("express");
const app = express();

const url = require("url");
const proxy = require("express-http-proxy");
const config = require("./config.json");

const apiRoute = "/api";
const clientRoute = "";

const apiProxy = proxy(config.serverUrl, {
    proxyReqPathResolver: req => url.parse(req.originalUrl).path.slice(serverRoute.length)
});

const clientProxy = proxy(config.clientUrl, {
    proxyReqPathResolver: req => url.parse(req.originalUrl).path.slice(clientRoute.length)
});

app.use(`${apiRoute}/*`, apiProxy);
app.use(`${clientRoute}/*`, clientProxy);

app.listen(process.env.PORT || 9000);