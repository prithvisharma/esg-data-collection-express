function validateQ1(answer) {
    const error = []
    if (!answer.cin) error.push("cin (corporate identity number) absent")
    if (!answer.name) error.push("name of the entity absent")
    if (
        !answer.yearOfIncorporation ||
        !/^\d{4}$/.test(answer.yearOfIncorporation)
    )
        error.push(
            "invalid year of incorporation either absent or should be 4 digits only"
        )
    if (!answer.registeredOfficeAddress)
        error.push("registered office address absent")
    if (!answer.corporateOfficeAddress)
        error.push("corporate office address absent")
    if (!answer.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answer.email))
        error.push("email absent or invalid email provided")
    if (!answer.telephone || !/^\d{10}$/.test(answer.telephone))
        error.push("telephone absent or invalid telephone provided")
    if (
        !answer.website ||
        !/^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/.*)?$/i.test(answer.website)
    )
        error.push("website absent or invalid website url provided")
    if (!answer.reportingForFinancialYear)
        error.push("report for financial year absent")
    if (
        !answer.stockExchanges ||
        !Array.isArray(answer.stockExchanges) ||
        answer.stockExchanges.length === 0
    )
        error.push(
            "stock exchanges absent or invalid list of stock exchanges (should be array and non empty)"
        )
    if (!answer.paidUpCapital || isNaN(answer.paidUpCapital))
        error.push(
            "paid up capital absent or invalid value passed (should be only number)"
        )
    if (!answer?.contact?.name) error.push("contact name of the entity absent")
    if (
        !answer?.contact?.telephone ||
        !/^\d{10}$/.test(answer?.contact?.telephone)
    )
        error.push("contact telephone absent or invalid telephone provided")
    if (
        !answer?.contact?.email ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answer?.contact?.email)
    )
        error.push("contact email absent or invalid email provided")
    return { status: error.length === 0 ? true : false, error }
}

function validateQ2(answer) {
    const error = []
    if (
        !answer?.national?.numberOfPlants ||
        isNaN(answer?.national?.numberOfPlants)
    )
        error.push("national number of plants absent or invalid (only numbers)")
    if (
        !answer?.national?.numberOfOffices ||
        isNaN(answer?.national?.numberOfOffices)
    )
        error.push(
            "national number of offices absent or invalid (only numbers)"
        )
    if (
        !answer?.international?.numberOfPlants ||
        isNaN(answer?.international?.numberOfPlants)
    )
        error.push(
            "international number of plants absent or invalid (only numbers)"
        )
    if (
        !answer?.international?.numberOfOffices ||
        isNaN(answer?.international?.numberOfOffices)
    )
        error.push(
            "international number of offices absent or invalid (only numbers)"
        )
    return { status: error.length === 0 ? true : false, error }
}

function validateQ3(answer) {
    const error = []
    if (
        !answer.typeOfCustomers ||
        !Array.isArray(answer.typeOfCustomers) ||
        answer.typeOfCustomers.length === 0
    )
        error.push(
            "type of customers absent or invalid list of customers (should be array and non empty)"
        )
    return { status: error.length === 0 ? true : false, error }
}

function validateQ4(answer) {
    const error = []
    if (
        !answer?.all?.permanentEmployees?.total ||
        isNaN(answer?.all?.permanentEmployees?.total)
    ) {
        error.push("total count absent for all employees")
    }
    if (
        !answer?.all?.permanentEmployees?.maleNumber ||
        isNaN(answer?.all?.permanentEmployees?.maleNumber)
    ) {
        error.push("male count absent for all employees")
    }
    if (
        !answer?.all?.permanentEmployees?.femaleNumber ||
        isNaN(answer?.all?.permanentEmployees?.femaleNumber)
    ) {
        error.push("female count absent for all employees")
    }
    if (
        !answer?.all?.otherEmployees?.total ||
        isNaN(answer?.all?.otherEmployees?.total)
    ) {
        error.push("total count absent for all other employees")
    }
    if (
        !answer?.all?.otherEmployees?.maleNumber ||
        isNaN(answer?.all?.otherEmployees?.maleNumber)
    ) {
        error.push("male count absent for all other employees")
    }
    if (
        !answer?.all?.otherEmployees?.femaleNumber ||
        isNaN(answer?.all?.otherEmployees?.femaleNumber)
    ) {
        error.push("female count absent for all other employees")
    }
    if (
        !answer?.all?.permanentWorkers?.total ||
        isNaN(answer?.all?.permanentWorkers?.total)
    ) {
        error.push("total count absent for all workers")
    }
    if (
        !answer?.all?.permanentWorkers?.maleNumber ||
        isNaN(answer?.all?.permanentWorkers?.maleNumber)
    ) {
        error.push("male count absent for all workers")
    }
    if (
        !answer?.all?.permanentWorkers?.femaleNumber ||
        isNaN(answer?.all?.permanentWorkers?.femaleNumber)
    ) {
        error.push("female count absent for all workers")
    }
    if (
        !answer?.all?.otherWorkers?.total ||
        isNaN(answer?.all?.otherWorkers?.total)
    ) {
        error.push("total count absent for all other workers")
    }
    if (
        !answer?.all?.otherWorkers?.maleNumber ||
        isNaN(answer?.all?.otherWorkers?.maleNumber)
    ) {
        error.push("male count absent for all other workers")
    }
    if (
        !answer?.all?.otherWorkers?.femaleNumber ||
        isNaN(answer?.all?.otherWorkers?.femaleNumber)
    ) {
        error.push("female count absent for all other workers")
    }
    if (
        !answer?.differentlyAbled?.permanentEmployees?.total ||
        isNaN(answer?.differentlyAbled?.permanentEmployees?.total)
    ) {
        error.push("total count absent for differentlyAbled employees")
    }
    if (
        !answer?.differentlyAbled?.permanentEmployees?.maleNumber ||
        isNaN(answer?.differentlyAbled?.permanentEmployees?.maleNumber)
    ) {
        error.push("male count absent for differentlyAbled employees")
    }
    if (
        !answer?.differentlyAbled?.permanentEmployees?.femaleNumber ||
        isNaN(answer?.differentlyAbled?.permanentEmployees?.femaleNumber)
    ) {
        error.push("female count absent for differentlyAbled employees")
    }
    if (
        !answer?.differentlyAbled?.otherEmployees?.total ||
        isNaN(answer?.differentlyAbled?.otherEmployees?.total)
    ) {
        error.push("total count absent for differentlyAbled other employees")
    }
    if (
        !answer?.differentlyAbled?.otherEmployees?.maleNumber ||
        isNaN(answer?.differentlyAbled?.otherEmployees?.maleNumber)
    ) {
        error.push("male count absent for differentlyAbled other employees")
    }
    if (
        !answer?.differentlyAbled?.otherEmployees?.femaleNumber ||
        isNaN(answer?.differentlyAbled?.otherEmployees?.femaleNumber)
    ) {
        error.push("female count absent for differentlyAbled other employees")
    }
    if (
        !answer?.differentlyAbled?.permanentWorkers?.total ||
        isNaN(answer?.differentlyAbled?.permanentWorkers?.total)
    ) {
        error.push("total count absent for differentlyAbled workers")
    }
    if (
        !answer?.differentlyAbled?.permanentWorkers?.maleNumber ||
        isNaN(answer?.differentlyAbled?.permanentWorkers?.maleNumber)
    ) {
        error.push("male count absent for differentlyAbled workers")
    }
    if (
        !answer?.differentlyAbled?.permanentWorkers?.femaleNumber ||
        isNaN(answer?.differentlyAbled?.permanentWorkers?.femaleNumber)
    ) {
        error.push("female count absent for differentlyAbled workers")
    }
    if (
        !answer?.differentlyAbled?.otherWorkers?.total ||
        isNaN(answer?.differentlyAbled?.otherWorkers?.total)
    ) {
        error.push("total count absent for differentlyAbled other workers")
    }
    if (
        !answer?.differentlyAbled?.otherWorkers?.maleNumber ||
        isNaN(answer?.differentlyAbled?.otherWorkers?.maleNumber)
    ) {
        error.push("male count absent for differentlyAbled other workers")
    }
    if (
        !answer?.differentlyAbled?.otherWorkers?.femaleNumber ||
        isNaN(answer?.differentlyAbled?.otherWorkers?.femaleNumber)
    ) {
        error.push("female count absent for differentlyAbled other workers")
    }
    return { status: error.length === 0 ? true : false, error }
}

function validateQ5(answer) {
    const error = []
    const dropdownOptions = ["N/A", "YES", "NO"]
    if (
        !answer?.permanentEmployees?.yesNo ||
        !dropdownOptions.includes(
            answer?.permanentEmployees?.yesNo.toUpperCase()
        )
    )
        error.push(
            "permanent employees yes/no field absent or invalid (can only be YES, NO, N/A)"
        )
    if (!answer?.permanentEmployees?.details)
        error.push("permanent employees details absent")
    if (
        !answer?.otherEmployees?.yesNo ||
        !dropdownOptions.includes(answer?.otherEmployees?.yesNo.toUpperCase())
    )
        error.push(
            "other employees yes/no field absent or invalid (can only be YES, NO, N/A)"
        )
    if (!answer?.otherEmployees?.details)
        error.push("other employees details absent")
    if (
        !answer?.permanentWorkers?.yesNo ||
        !dropdownOptions.includes(answer?.permanentWorkers?.yesNo.toUpperCase())
    )
        error.push(
            "permanent workers yes/no field absent or invalid (can only be YES, NO, N/A)"
        )
    if (!answer?.permanentWorkers?.details)
        error.push("permanent workers details absent")
    if (
        !answer?.otherWorkers?.yesNo ||
        !dropdownOptions.includes(answer?.otherWorkers?.yesNo.toUpperCase())
    )
        error.push(
            "other workers yes/no field absent or invalid (can only be YES, NO, N/A)"
        )
    if (!answer?.otherWorkers?.details)
        error.push("other workers details absent")
    return { status: error.length === 0 ? true : false, error }
}

module.exports = { validateQ1, validateQ2, validateQ3, validateQ4, validateQ5 }
