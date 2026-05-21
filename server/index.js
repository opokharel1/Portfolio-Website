require("dotenv").config()

const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const Contact = require("./models/Contact")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected")
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:")
    console.log(err)
  })

app.get("/", (req, res) => {
  res.send("Backend Running")
})

app.post("/api/contact", async (req, res) => {
  try {

    console.log("REQ BODY:")
    console.log(req.body)

    const newMessage = new Contact(req.body)

    await newMessage.save()

    res.json({
      success: true,
      message: "Message saved to database",
    })

  } catch (error) {
    console.log(error)

    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})
const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})