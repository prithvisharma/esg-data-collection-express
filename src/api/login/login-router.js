const express = require("express")
const { login } = require("./login-service")

const loginRouter = express.Router()

loginRouter.post("/login", login)

module.exports = { loginRouter }
