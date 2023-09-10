const express = require("express");
const router = express.Router();
// controllers
const { create, homePage } = require("../controllers/indexControllers");

//***@route - GET "/"
router.get("/", homePage);

//***@route - GET "/create"
router.post("/create", create);

module.exports = router;
