const express = require("express")
const router = express.Router()

const dataPembelejaran = require("../controller/PembelajaranController")

router.post("/", dataPembelejaran.createDataPembelajaran)
router.get("/", dataPembelejaran.getAllDataPembelajaran)
router.get("/id/:id", dataPembelejaran.getPembelajaranByID)
router.put("/edit/:id", dataPembelejaran.editDataPembelajaran)
router.delete("/hapus/:id", dataPembelejaran.deleteDataPembelajaran)

module.exports = router