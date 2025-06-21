import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import movieRoutes from './routes/movies'
import { log } from './utils/logger'

const app = express()
const PORT = process.env.SERVER_PORT || 8000

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))
app.use(express.json())

app.use('/api', movieRoutes)

app.listen(PORT, () => {
    log.info(`Server listening on http://localhost:${PORT}`)
})