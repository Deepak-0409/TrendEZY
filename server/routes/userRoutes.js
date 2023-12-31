const express = require("express");
const router = express.Router();
const {register,login} = require("../controllers/usersController")
const {registerValidations,loginValidations} = require("../validations/userValidations");

router.post("/register", registerValidations, register)
router.post("/login", loginValidations, login)

module.exports = router;