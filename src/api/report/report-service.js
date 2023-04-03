const moment = require("moment")

const { database } = require("../../database/database-client")
const {
    validatePostReportRequestData,
    computeServerSideInfo,
} = require("./report-helper")
const { SAMPLE_QUESTION_ANSWER } = require("./sample-question-answer")

const postReport = async (req, res) => {
    let reportId = req.body.reportId
    const { questionId, answer } = req.body
    const username = req.username

    const validatePostReportResult = await validatePostReportRequestData(
        reportId,
        questionId,
        answer
    )

    const computerAnswer = computeServerSideInfo(questionId, answer)

    if (!validatePostReportResult.status) {
        return res
            .status(400)
            .json({ status: false, error: validatePostReportResult.error })
    }

    const report = validatePostReportResult.report
    report.data[questionId.toUpperCase()] = computerAnswer
    report.username = username
    report.updatedAt = moment().toISOString(true)

    const dbResult = await database.report.updateOne(
        { reportId },
        { $set: report },
        { upsert: true }
    )

    if (dbResult.acknowledged) {
        return res.json({
            status: true,
        })
    } else {
        return res.json({
            status: false,
            error: ["failed to save data"],
            dbReponse: dbResult,
        })
    }
}

const uploadAttachments = async (req, res) => {
    const questionId = req.params.questionId
    const reportId = req.params.reportId

    const report = await database.report.findOne({ reportId })

    if (!report) {
        return res
            .status(400)
            .json({ status: false, error: ["report not found"] })
    }

    if (!Object.keys(SAMPLE_QUESTION_ANSWER).includes(questionId)) {
        return res
            .status(400)
            .json({ status: false, error: ["invalid question id"] })
    }

    if (!report.data[questionId].attachments)
        report.data[questionId].attachments = []

    req.files.forEach((file) => {
        const fileName = file.originalname
        const fileBuffer = file.buffer
        report.data[questionId].attachments.push({ fileName, fileBuffer })
    })

    const dbResult = await database.report.updateOne(
        { reportId },
        { $set: report },
        { upsert: true }
    )

    if (dbResult.acknowledged) {
        return res.json({
            status: true,
        })
    } else {
        return res.json({
            status: false,
            error: ["failed to save data"],
            dbReponse: dbResult,
        })
    }
}

const getReportById = async (req, res) => {
    const reportId = req.params.reportId

    const report = await database.report.findOne({ reportId })

    if (!report) {
        return res
            .status(400)
            .json({ status: false, error: ["report not found"] })
    }

    return res.json({
        status: true,
        data: report,
    })
}

const getReportIdsByUsername = async (req, res) => {
    const username = req.params.username

    const reportIds = (await database.report.find({ username }).toArray()).map(
        (report) => report.reportId
    )

    if (reportIds.length === 0) {
        return res
            .status(400)
            .json({ status: false, error: ["no reports for provided user"] })
    }

    return res.json({
        status: true,
        data: reportIds,
    })
}

const getReportQuestions = (req, res) => {
    return res.json({
        status: true,
        data: SAMPLE_QUESTION_ANSWER,
    })
}

module.exports = {
    postReport,
    getReportById,
    getReportIdsByUsername,
    getReportQuestions,
    uploadAttachments,
}
