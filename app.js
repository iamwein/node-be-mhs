const express = require('express')
const cors = require('cors')

const router = require("./router/router")
const dosenRouter = require("./router/DosenRouter")

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use("/api/v1/user", router)
app.use("/api/v1/dosen", dosenRouter)

app.listen(port, () => console.log(`booking-room-app:${port}`))