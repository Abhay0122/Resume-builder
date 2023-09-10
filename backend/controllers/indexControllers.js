// errorhandler
const ErrorHandler = require("../utils/ErrorHandler");

exports.homePage = (req, res, next) => {
  // next(new ErrorHandler(500, "undefind!"));
  res.json({ message: "This is Home-page" });
};

exports.create = (req, res, next) => {
  res.json({ body: req.body });
};
