const bcrypt = require("bcrypt")
const { database } = require("../../database/database-client")
const {
    createToken,
    generateTokenPayload,
} = require("../../security/jwt-manager")

const login = async (req, res) => {
    const { username, password } = req.body
    const user = await database.user.findOne({ username })
    if (user && (await bcrypt.compare(password, user.password))) {
        const jwtPayload = await generateTokenPayload(user)
        const token = await createToken(jwtPayload)
        res.json({
            ok: true,
            user: { userId: user.id, username },
            token,
        })
    } else {
        res.json({ ok: false })
    }
}

module.exports = { login }
