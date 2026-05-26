require("dotenv").config()

const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const Contact = require("./models/Contact")

const app = express()

//Middleware
app.use(cors())
app.use(express.json())

// Safety check
if (!process.env.MONGO_URI) {
  console.log("MONGO_URI is missing")
  process.exit(1)
}

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected")
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:")
    console.log(err)
  })

  // Routes
app.get("/", (req, res) => {
  res.send("Backend Running")
})

app.post("/api/contact", async (req, res) => {
  try {

    console.log("REQ BODY:")
    console.log(req.body)

    const { name, email, message } = req.body

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      })
    }

    const newMessage = new Contact({
      name,
      email,
      message,
    })

    await newMessage.save()

    res.status(200).json({
      success: true,
      message: "Message saved to database",
    })

  } catch (error) {

    console.log("SERVER ERROR:")
    console.log(error.message)
    console.log(error.stack)

    res.status(500).json({
      success: false,
      message: error.message || "Server error",
    })
  }
})

// Port
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})