const express = require("express")
const router = express.Router()

const userController = require("../controller/UserController")

router.post("/create", userController.createUser)
router.post("/login", userController.userLogin)

module.exports = router