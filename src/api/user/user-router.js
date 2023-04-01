const express = require("express")
const { signup, getUser } = require("./user-service")
const { auth } = require("../../middleware/auth-middleware")

const userRouter = express.Router()
const router = express.Router()

router.post("/signup", signup)
router.get("/:username", auth(), getUser)

userRouter.use("/user", router)

module.exports = { userRouter }
