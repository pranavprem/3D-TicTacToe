"use strict";

// Tiny static server so `npm start` opens the game. No dependencies.
var http = require("node:http");
var fs = require("node:fs");
var path = require("node:path");

var root = path.resolve(__dirname, "..");
var port = Number(process.env.PORT) || 3000;

var types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".md": "text/plain; charset=utf-8",
  ".json": "application/json; charset=utf-8",
};

var server = http.createServer(function (req, res) {
  var url = new URL(req.url, "http://localhost");
  var pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    res.writeHead(400);
    res.end("Bad request");
    return;
  }
  if (pathname === "/") {
    pathname = "/main.html";
  }

  var file = path.resolve(root, "." + pathname);
  if (file !== root && !file.startsWith(root + path.sep)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(file, function (err, data) {
    if (err) {
      res.writeHead(err.code === "ENOENT" ? 404 : 500);
      res.end(err.code === "ENOENT" ? "Not found" : "Error");
      return;
    }
    var type =
      types[path.extname(file).toLowerCase()] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": type });
    res.end(data);
  });
});

server.listen(port, function () {
  console.log("3D Tic-Tac-Toe at http://localhost:" + port);
});
