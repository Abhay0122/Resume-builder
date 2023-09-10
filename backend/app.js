// env-config
require("dotenv").config({ path: "./.env" });
// express
const express = require("express");
const app = express();

// morgan
const morgan = require("morgan");
app.use(morgan("tiny"));

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes***
const indexRoute = require("./routes/indexRoutes");
app.use("/", indexRoute);

// Error-handling***
app.use(function (err, req, res, next) {
  console.log(err);
  res.json({ Error: err });
});

// PORT_listen
app.listen(
  process.env.PORT,
  console.log(`server is running on port ${process.env.PORT}`)
);
