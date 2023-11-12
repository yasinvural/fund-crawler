const express = require("express");
const http = require("http");
const cors = require("cors");
const timeout = require('connect-timeout');


const api = require("./routes/index");
const app = express();
app.use(timeout('15s'));

app.use(express.json());
app.use(cors());
app.use("/", api);
app.use(haltOnTimedout);


function haltOnTimedout(req, res, next){
  if (!req.timedout) next();
}

const port = process.env.PORT || 3001;
app.set("port", port);

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on: ${port} port`));
