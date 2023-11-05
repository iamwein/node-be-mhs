const User = require("../models/index").users
const { hashPassword, comparePassword } = require("../security/bcrypt")
const { generateToken } = require("../security/authentication");

const createUser = async(req, res) => {
    let {password, nama, username} = req.body
    const hash = hashPassword(password);

    await User.findOne({where: {username}}).then(user => {
        if(user){
            res.status(401).json({message: "username has been registered. Please use another one!", statusCode: 400})
        } else {
            User.create({
                password: hash, nama, username
            }).then((user) => {
                res.status(201).json({message: "Succes Create User", data: user, statusCode: 201})
            }).catch(error => {
                console.log(error)
                res.status(500).json({message: process.env.ISE})
            })
        }
    }).catch(error => {
        console.log(error)
        res.status(500).json({message: process.env.ISE})
    })
}

const userLogin = async(req, res) => {
    const { username,  password } = req.body

    await User.findOne({ where: { username } }).then(user => {
        if (!user) {
            const msg = "username tidak terdaftar!"
            res.status(400).json({message: msg, statusCode:400})
        }

        const passwordValid = comparePassword(password, user.password)
        if (!passwordValid){
            const msg = "Password salah!"
            res.status(400).json({message: msg, statusCode:400})
        }

        const data = {
            id: user.id,
            nama: user.nama,
            username: user.username
        }

        const token = generateToken(data)
        const msg = "Login Success"
        const sendData = {
            token,
            scantimestamp: new Date()
        }
        res.status(200).json({message: msg, statusCode: 200, data: sendData})
    }).catch(error => {
        console.log(error)
        res.status(500).json({message: process.env.ISE})
    })
}

module.exports = {
    createUser,
    userLogin
}
