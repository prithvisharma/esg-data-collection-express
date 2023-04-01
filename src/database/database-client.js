const MongoClient = require("mongodb").MongoClient
const MONGO_DB_URL = process.env.MONGO_DB_URL

const database = {
    test: null,
}

function connectDb(callback) {
    MongoClient.connect(MONGO_DB_URL, function (err, mongoClient) {
        console.log("mongo db connecting")
        if (err) {
            console.log(err)
            return callback(err)
        }
        const dbclient = mongoClient.db("esg-data-collection-db")
        database.test = dbclient.collection("test")
        console.log("mongo db connected")
        return callback()
    })
}

module.exports = { connectDb, database }
