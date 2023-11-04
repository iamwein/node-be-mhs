const crypto = require("crypto");
const task_id = crypto.randomUUID()


const today = new Date()
const utc = new Date(today.getTime() + 7 * 60 * 60 * 1000)
const now = utc.toISOString().replace('Z', '').replace('T', ' ')

const response = (statusCode, message, data, res) => {
    res.status(statusCode).json({
        statusCode,
        request_date: now,
        task_id,
        isError: false,
        message,
        data,
        statusCode
    })
}
    
const resError = (statusCode, message, data, res) => {
    res.status(statusCode).json({
        statusCode,
        request_date: now,
        task_id,
        isError: true,
        response: {
            statusCode: statusCode,
            message: message,
            payload: {
                data
            }
        },
    })
}


const invalidRequestRespon = (statusCode, message, data, res) => {
    res.status(201).json({
        request_date: now,
        task_id,
        statusCode,
        status: "INVALID REQUEST",
        isError: true,
        response: {
            statusCode: statusCode,
            message: message,
            payload: {
                data
            }
        }
    })
}


module.exports = {
    response,
    resError,
    invalidRequestRespon
}