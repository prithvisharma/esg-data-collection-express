const { loginRouter } = require("./api/login/login-router")
const { reportRouter } = require("./api/report/report-router")
const { userRouter } = require("./api/user/user-router")

const routers = [loginRouter, userRouter, reportRouter]

function registerRouters(app) {
    routers.forEach((router) => app.use("/esg-collect", router))
}

module.exports = { registerRouters }
