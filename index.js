const express = require("express");
const http = require("http");
const cors = require("cors");

const api = require("./routes/index");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", api);

app.use((_req, _res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, _req, res) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

const port = process.env.PORT || 3001;
app.set("port", port);

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on: ${port} port`));
