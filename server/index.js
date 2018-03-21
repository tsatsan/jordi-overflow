import http from 'http'
import Debug from 'debug'
import app from './app'
import mongoose, { Mongoose } from 'mongoose'
import { mongoUrl } from './config'

const PORT = 3000
const debug = new Debug('jordi-overflow:root')

mongoose. Promise = global.Promise

async function start() {
    await mongoose.connect(mongoUrl)

app.listen(PORT, () => {
    debug(`Server running at port ${PORT}`)
    })
}
start()
