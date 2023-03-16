const mongoose = require("mongoose")
dbConnect()
async function dbConnect() {
    try {
        await mongoose.connect('mongodb+srv://mern-crud:Shush129@cluster0.4ismyhv.mongodb.net/mern-crud', { useNewUrlParser: true, useUnifiedTopology: true, })
        console.log("Mongodb connected successfully")
    } catch (error) {
        console.log("Mongodb connection fail")
    }
}

module.exports = mongoose