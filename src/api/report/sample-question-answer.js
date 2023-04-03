const SAMPLE_QUESTION_ANSWER = {
    Q1: {
        question: "General Questions",
        answer: {
            cin: "TESTCIN123",
            name: "TEST_COMPANY",
            yearOfIncorporation: "2023",
            registeredOfficeAddress: "Vasai, Mumbai",
            corporateOfficeAddress: "Vasai, Mumbai",
            email: "test@company.com",
            telephone: "9000000001",
            website: "https://www.test.com",
            reportingForFinancialYear: "2022-2023",
            stockExchanges: ["Nifty50", "Temp Stocks"],
            paidUpCapital: 9000000,
            contact: {
                name: "Prithvi",
                telephone: "9096410286",
                email: "prithvi@gmail.com",
            },
        },
    },
    Q2: {
        question:
            "Number of locations where plants and operations or offices of the entity are situated.",
        answer: {
            national: {
                numberOfPlants: 2,
                numberOfOffices: 3,
            },
            international: {
                numberOfPlants: 1,
                numberOfOffices: 6,
            },
        },
    },
    Q3: {
        question: "Brief on types of customers",
        answer: { typeOfCustomers: ["TYPE1", "TYPEX"] },
    },
    Q4: {
        question: "Details of employees and workers.",
        answer: {
            all: {
                permanentEmployees: {
                    total: 10,
                    maleNumber: 5,
                    femaleNumber: 5,
                },
                otherEmployees: {
                    total: 10,
                    maleNumber: 5,
                    femaleNumber: 5,
                },
                permanentWorkers: {
                    total: 10,
                    maleNumber: 5,
                    femaleNumber: 5,
                },
                otherWorkers: {
                    total: 10,
                    maleNumber: 5,
                    femaleNumber: 5,
                },
            },
            differentlyAbled: {
                permanentEmployees: {
                    total: 10,
                    maleNumber: 5,
                    femaleNumber: 5,
                },
                otherEmployees: {
                    total: 10,
                    maleNumber: 5,
                    femaleNumber: 5,
                },
                permanentWorkers: {
                    total: 10,
                    maleNumber: 5,
                    femaleNumber: 5,
                },
                otherWorkers: {
                    total: 10,
                    maleNumber: 5,
                    femaleNumber: 5,
                },
            },
        },
    },
    Q5: {
        question:
            "Is there a mechanism available to receive and redress grievances",
        answer: {
            permanentEmployees: {
                yesNo: "YES",
                details: "My details 1",
            },
            otherEmployees: {
                yesNo: "no",
                details: "My details 2",
            },
            permanentWorkers: {
                yesNo: "YES",
                details: "My details 3",
            },
            otherWorkers: {
                yesNo: "YES",
                details: "My details 4",
            },
        },
    },
}

module.exports = { SAMPLE_QUESTION_ANSWER }
