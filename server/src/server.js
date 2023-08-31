const path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()
const { errorHandler } = require('./middleware/error.middleware')
const { logger } = require('./middleware/logger.middleware')
const connectDB = require('./config/db')
const corsOptions = require('./config/corsOptions')
const PORT = process.env.PORT || 5000

// Connect to database
connectDB()

const app = express()
app.use(logger)
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/users', require('./routes/user.routes'))
app.use('/api/tickets', require('./routes/ticket.routes'))

// Serve Frontend
if (process.env.NODE_ENV === 'production') {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, '../../client/build')))

  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Support-ticket' })
  })
}

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
