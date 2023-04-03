const { verifyToken } = require("../security/jwt-manager")

function auth() {
    return async (req, res, next) => {
        console.log(req.protocol + "://" + req.get("host") + req.originalUrl)
        let jwtToken
        try {
            jwtToken = req.header("Authorization").split(" ")[1]
        } catch (error) {
            console.log("Authorization Failed: " + jwtToken)
            return res.json({ error: ["Invalid JWT used"] })
        }
        const verifiedToken = await verifyToken(jwtToken)
        if (!verifiedToken) {
            return res.json({ error: ["Invalid JWT used"] })
        }
        req.username = verifiedToken.jwtPayload.username
        next()
    }
}

module.exports = { auth }
