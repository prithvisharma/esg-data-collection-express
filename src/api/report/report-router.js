const express = require("express")
const { auth } = require("../../middleware/auth-middleware")
const {
    postReport,
    getReportById,
    getReportIdsByUsername,
    getReportQuestions,
} = require("./report-service")

const reportRouter = express.Router()
const router = express.Router()

router.post("/", auth(), postReport)
router.get("/:reportId", auth(), getReportById)
router.get("/:username", auth(), getReportIdsByUsername)
router.get("/questions", auth(), getReportQuestions)

reportRouter.use("/report", router)

module.exports = { reportRouter }
