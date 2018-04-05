import http from 'http'
import Debug from 'debug'
import app from './app'
import mongoose, { Mongoose } from 'mongoose'
import { mongoUrl, port } from './config'


const debug = new Debug('jordi-overflow:root')

mongoose.Promise = global.Promise

async function start() {
    await mongoose.connect(mongoUrl)

app.listen(port, () => {
    debug(`Server running at port ${port}`)
    })
}
start()
