const express = require("express");
const { Login, Signup } = require("../controllers/authentication_controller");

const router = express.Router();

router.get("/:email/:password", Login);
router.post("/:email/:name/:password", Signup);

module.exports = router;
