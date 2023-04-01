require("dotenv").config()
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const compression = require("compression")
const moment = require("moment")

const { registerRouters } = require("./register-router")
const { connectDb } = require("./database/database-client")

const initializationStarted = moment()

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(bodyParser.json())
app.use(
    compression({
        level: 6,
        threshold: 0,
    })
)

registerRouters(app)

connectDb((err) => {
    if (err) {
        console.log("failed to connect mongodb")
    } else {
        app.listen(PORT, () => {
            const initializationCompleted = moment()
            console.log(
                `server running on: ${PORT}, started in: ${initializationCompleted.diff(
                    initializationStarted,
                    "milliseconds"
                )} milliseconds`
            )
        })
    }
})
