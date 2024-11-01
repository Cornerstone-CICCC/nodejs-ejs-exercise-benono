import express from "express"
import path from "path"
import dotenv from "dotenv"
import pageRouter from "./routes/page.routes"
import apiRouter from "./routes/api.routes"
dotenv.config()
const app = express()

// Set view engine to EJS
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "../src/views"))

// Middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true })) // accept form submittions

// Routes
app.use("/", pageRouter)
app.use("/api", apiRouter)

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`)
})
