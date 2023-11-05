const MataKuliah = require("../models/index").dmatkul
const {resError, response, invalidRequestRespon}  = require("./../utils/api-payload-response")

const createMatakuliah = async(req, res) => {
    const dataDosen = {kodematkul, matkul, sks, smt}= req.body

    await MataKuliah.create(dataDosen).then(d => {
        response(201, "Success", d, res)
    }).catch(error => {
        console.log(error)
        resError(500, process.env.ISE, error, res)
    })
}

const getAllMataKuliah = async(req, res)=> {
    await MataKuliah.findAll().then(d => {
        response(200, "Success", d, res)
    }).catch(error => {
        console.log(error)
        resError(500, process.env.ISE, error, res)
    })
}

const editMatakuliah = async(req,res) => {
    const id = req.params.kodematkul
    const {kodematkul, matkul, sks, smt} = req.body
    await MataKuliah.findOne({where: {id}}).then(d => {
        d.kodematkul = kodematkul
        d.matkul = matkul
        d.sks = sks
        d.smt = smt
        
        d.save()
        console.log(d)
        response(200, "Success", d, res)
    }).catch(error => {
        console.log(error)
        resError(500, process.env.ISE, error, res)
    })
}

const getMatakuliahById = async(req, res) => {
    const kodematkul = req.params.kodematkul
    
    await MataKuliah.findOne({where: {id: kodematkul}}).then(d => {
        response(200, "Success", d, res)
    }).catch(error => {
        console.log(error)
        resError(500, process.env.ISE, error, res)
    })
}

const deleteMatakuliah = async(req, res) => {
    const kodematkul = req.params.kodematkul
    await MataKuliah.destroy({where: {kodematkul}}).then(() => {
        response(200, "Deleted succesfully!", [], res)
    }).catch(error => {
        console.log(error)
        resError(500, process.env.ISE, error, res)
    })
}

module.exports = {
    createMatakuliah,
    getAllMataKuliah,
    editMatakuliah,
    getMatakuliahById,
    deleteMatakuliah
}