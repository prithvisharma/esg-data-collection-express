const express = require("express")
const multer = require("multer")

const { auth } = require("../../middleware/auth-middleware")
const {
    postReport,
    getReportById,
    getReportIdsByUsername,
    getReportQuestions,
    uploadAttachments,
} = require("./report-service")

const reportRouter = express.Router()
const router = express.Router()

const upload = multer({})

router.post("/", auth(), postReport)
router.post(
    "/upload-attachments/:questionId/:reportId",
    upload.any(),
    auth(),
    uploadAttachments
)
router.get("/by-report-id/:reportId", auth(), getReportById)
router.get("/by-username/:username", auth(), getReportIdsByUsername)
router.get("/questions", auth(), getReportQuestions)

reportRouter.use("/report", router)

module.exports = { reportRouter }
