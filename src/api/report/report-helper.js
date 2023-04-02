const crypto = require("crypto")
const moment = require("moment")

const { database } = require("../../database/database-client")
const {
    validateQ1,
    validateQ2,
    validateQ3,
    validateQ4,
    validateQ5,
} = require("./validate-question-answer")

function validateAnswer(questionId, answer) {
    if (!answer) {
        return { status: false, error: ["invalid answer id (mandatory)"] }
    }
    switch (questionId.toUpperCase()) {
        case "Q1": // reportingBoundary; skipped didnt understood looks incomplete
            return validateQ1(answer)
        case "Q2":
            return validateQ2(answer)
        case "Q3":
            return validateQ3(answer)
        case "Q4":
            return validateQ4(answer)
        case "Q5":
            return validateQ5(answer)
        default:
            return { status: false, error: ["invalid question id"] }
    }
}

async function validateReportId(reportId) {
    if (reportId) {
        const report = await database.report.findOne({ reportId })
        if (!report) {
            return { status: false, error: ["invalid report id"] }
        }
        return { status: true, report }
    } else {
        const reportId = crypto.randomUUID()
        const report = {
            reportId,
            username: undefined,
            data: {},
            createdAt: moment().toISOString(true),
            updatedAt: moment().toISOString(true),
        }
        return { status: true, report }
    }
}

async function validatePostReportRequestData(reportId, questionId, answer) {
    const reportIdValidationResult = await validateReportId(reportId)
    const answerValidationResullt = validateAnswer(questionId, answer)
    if (!answerValidationResullt.status)
        return {
            status: answerValidationResullt.status,
            error: answerValidationResullt.error,
        }
    if (!reportIdValidationResult.status)
        return {
            status: reportIdValidationResult.status,
            error: reportIdValidationResult.error,
        }
    const report = reportIdValidationResult.report
    return {
        status: reportIdValidationResult.status,
        report,
    }
}

module.exports = { validatePostReportRequestData }
