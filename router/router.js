const express = require("express")
const router = express.Router()

const userController = require("../controller/UserController")

router.post("/user/create", userController.createUser)
router.post("/user/login", userController.userLogin)

module.exports = router