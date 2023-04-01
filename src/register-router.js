const { loginRouter } = require("./api/login/login-router")

const routers = [loginRouter]

function registerRouters(app) {
    routers.forEach((router) => app.use("/esg-collect", router))
}

module.exports = { registerRouters }
