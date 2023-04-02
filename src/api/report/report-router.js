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
router.get("/by-report-id/:reportId", auth(), getReportById)
router.get("/by-username/:username", auth(), getReportIdsByUsername)
router.get("/questions", auth(), getReportQuestions)

reportRouter.use("/report", router)

module.exports = { reportRouter }
