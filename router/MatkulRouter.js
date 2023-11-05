const express = require("express")
const router = express.Router()

const matkulController = require("../controller/MatKulController")

router.post("/", matkulController.createMatakuliah)
router.get("/", matkulController.getAllMataKuliah)
router.get("/id/:kodematkul", matkulController.getMatakuliahById)
router.put("/edit/:kodematkul", matkulController.editMatakuliah)
router.delete("/hapus/:id", matkulController.deleteMatakuliah)

module.exports = router