const crypto = require("crypto")
const jose = require("jose")

const ALG = "RS512"
const issuer = "ESG-COLLECTIONS"

const PRIVATE_KEY_PREFIX = "-----BEGIN ENCRYPTED PRIVATE KEY-----"
const PRIVATE_KEY_SUFFIX = "-----END ENCRYPTED PRIVATE KEY-----"
const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY
const PUBLIC_KEY_PREFIX = "-----BEGIN PUBLIC KEY-----"
const PUBLIC_KEY_SUFFIX = "-----END PUBLIC KEY-----"
const JWT_PUBLIC_KEY = process.env.JWT_PUBLIC_KEY
const JWT_PASS_PHRASE = process.env.JWT_PASS_PHRASE

async function createToken(jwtPayload) {
    return await new jose.SignJWT({ jwtPayload })
        .setProtectedHeader({ alg: ALG })
        .setIssuedAt()
        .setExpirationTime("12h")
        .setAudience("audience")
        .sign(await getPrivateKey())
}
async function verifyToken(jwtToken) {
    try {
        const { payload } = await jose.jwtVerify(
            jwtToken,
            await getPublicKey(),
            {
                algorithms: [ALG],
                audience: "audience",
                iss: issuer,
            }
        )
        return payload
    } catch (err) {
        console.log(`failed to verify JWT ${jwtToken} with error: ${err}`)
        return null
    }
}
async function getPrivateKey() {
    const privateKeyString = `${PRIVATE_KEY_PREFIX}\n${JWT_PRIVATE_KEY}\n${PRIVATE_KEY_SUFFIX}`
    return crypto.createPrivateKey({
        key: privateKeyString,
        passphrase: JWT_PASS_PHRASE,
    })
}
async function getPublicKey() {
    const publicKeyString = `${PUBLIC_KEY_PREFIX}\n${JWT_PUBLIC_KEY}\n${PUBLIC_KEY_SUFFIX}`
    return crypto.createPublicKey({ key: publicKeyString })
}
async function generateTokenPayload(user) {
    const payload = {
        iss: issuer,
        username: user.username,
    }
    return payload
}

module.exports = {
    generateTokenPayload,
    createToken,
    verifyToken,
}
