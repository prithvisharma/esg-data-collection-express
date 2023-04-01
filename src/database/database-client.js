const MongoClient = require("mongodb").MongoClient
const MONGO_DB_URL = process.env.MONGO_DB_URL

const database = {
    user: null,
    report: null,
}

function connectDb(callback) {
    MongoClient.connect(MONGO_DB_URL, function (err, mongoClient) {
        console.log("mongo db connecting")
        if (err) {
            console.log(err)
            return callback(err)
        }
        const dbclient = mongoClient.db("esg-data-collection-db")
        database.user = dbclient.collection("user")
        database.report = dbclient.collection("report")
        console.log("mongo db connected")
        return callback()
    })
}

module.exports = { connectDb, database }
