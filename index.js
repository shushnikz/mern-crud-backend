const express = require("express");
const cors = require("cors")
const app = express();
const bodyParser = require("body-parser")


app.use(express.json())
app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))


const db = require("./db.js");
const userRoute = require("./routes/userRoute.js")

app.use("/", userRoute)

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})
