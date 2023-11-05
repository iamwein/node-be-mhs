const DataPembelajaran = require("../models/index").ngajar
const Dosen = require("../models/index").dosen
const MataKuliah = require("../models/index").dmatkul
const {resError, response, invalidRequestRespon}  = require("./../utils/api-payload-response")

const createDataPembelajaran = async(req, res) => {
    const dataDosen = {nidn_dosen, kodematkul}= req.body
    console.log(dataDosen)

    await DataPembelajaran.create(dataDosen).then(d => {
        response(201, "Success", d, res)
    }).catch(error => {
        console.log(error)
        resError(500, process.env.ISE, error, res)
    })
}

const getAllDataPembelajaran = async(req, res) => {
    await DataPembelajaran.findAll(
        {
        include: [
            {
                model: Dosen,
                as: "dosen",
                attributes: ["nidn","nama"],
            },
            {
                model: MataKuliah,
                as: "matakuliah",
            }
        ]
    }
    ).then(d => {
        response(200, "Success", d, res)
    }).catch(error => {
        console.log(error)
        resError(500, process.env.ISE, error, res)
    })
}

const getPembelajaranByID = async(req, res) => {
    const id = req.params.id

    await DataPembelajaran.findOne({where: {id}}).then(d => {
        response(200, "Success", d, res)
    }).catch(error => {
        console.log(error)
        resError(500, process.env.ISE, error, res)
    })
}

const editDataPembelajaran = async(req, res) => {
    const id = req.params.id
    const {nidn_dosen, kodematkul}= req.body

    await DataPembelajaran.findOne({where: {id}}).then(data => {
        data.nidn_dosen = nidn_dosen,
        data.kodematkul = kodematkul

        data.save()
        response(200, "Success", data, res)
    }).catch(error => {
        console.log(error)
        resError(500, process.env.ISE, error, res)
    })
}

const deleteDataPembelajaran = async(req, res) => {
    const id = req.params.id

    await DataPembelajaran.destroy({where: {id}}).then(() => {
        // console.log(deleted)
        response(200, "Deleted succesfully!", [], res)
    }).catch(error => {
        console.log(error)
        resError(500, process.env.ISE, error, res)
    })
}

module.exports = {
    createDataPembelajaran,
    getAllDataPembelajaran,
    getPembelajaranByID,
    editDataPembelajaran,
    deleteDataPembelajaran
}