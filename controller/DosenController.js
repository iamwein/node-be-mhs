const Dosen = require("../models/index").dosen
const {resError, response, invalidRequestRespon}  = require("./../utils/api-payload-response")

const createDosen = async(req, res) => {
    const dataDosen = {nidn, nama, jk, alamat}= req.body

    await Dosen.create(dataDosen).then(d => {
        response(201, "Success", d, res)
    }).catch(error => {
        console.log(error)
        resError(500, process.env.ISE, error, res)
    })
}

const getAllDosen = async(req, res) => {
    await Dosen.findAll().then(d => {
        response(200, "Success", d, res)
    }).catch(error => {
        console.log(error)
        resError(500, process.env.ISE, error, res)
    })
}

const getDataDosenById = async(req, res) => {
    const id = req.params.id

    await Dosen.findOne({where: {id}}).then(d => {
        response(200, "Success", d, res)
    }).catch(error => {
        console.log(error)
        resError(500, process.env.ISE, error, res)
    })
}

const editDosen = async(req, res) => {
    const id = req.params.id
    const {nidn, nama, jk, alamat}= req.body

    await Dosen.findOne({where: {id}}).then(data => {
        data.nidn = nidn,
        data.nama = nama,
        data.jk = jk,
        data.alamat = alamat,

        data.save()
        response(200, "Success", data, res)
    }).catch(error => {
        console.log(error)
        resError(500, process.env.ISE, error, res)
    })
}

const deleteDosen = async(req, res) => {
    const id = req.params.id
``
    await Dosen.destroy({where: {id}}).then(() => {
        response(200, "Deleted succesfully!", [], res)
    }).catch(error => {
        console.log(error)
        resError(500, process.env.ISE, error, res)
    })
}

module.exports = {
    createDosen,
    getAllDosen,
    getDataDosenById,
    editDosen,
    deleteDosen
}