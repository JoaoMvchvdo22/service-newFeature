const express = require("express");
const routes = require("./routes");
const cors = require("cors");

require("./database");

const app = express();

let corsOptions = {
  origin: ['http://localhost:4200'],
}

app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);
