const express = require("express")
const router = express.Router()

const dosenController = require("../controller/DosenController")

router.post("/", dosenController.createDosen)
router.get("/", dosenController.getAllDosen)
router.get("/id/:id", dosenController.getDataDosenById)
router.put("/edit/:id", dosenController.editDosen)
router.delete("/hapus/:id", dosenController.deleteDosen)

module.exports = router