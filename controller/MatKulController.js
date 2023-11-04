const MataKuliah = require("../models/index").dmatkul
const {resError, response, invalidRequestRespon}  = require("./../utils/api-payload-response")

const createDosen = async(req, res) => {
    const dataDosen = {kodematkul, matkul, sks, smt}= req.body

    await MataKuliah.create(dataDosen).then(d => {
        response(201, "Success", d, res)
    }).catch(error => {
        console.log(error)
        resError(500, process.env.ISE, error, res)
    })
}
