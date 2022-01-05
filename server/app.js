import express from 'express'
import mongoose from 'mongoose'

import homepage from './routes/homepage.js'
import commands from './routes/command.js'
import concepts from './routes/concept.js'
import others from './routes/other.js'

import { dbConnection } from '../config/config.js'

class App {

    constructor() {
        this.server = express();
        this.middleware();
        this.routes();
        mongoose.connect(`${dbConnection}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }

    middleware() {
        this.server.use(express.json())
    }

    routes() {
        this.server.use(homepage);
        this.server.use(commands);
        this.server.use(concepts);
        this.server.use(others);
    }
}

export default new App().server
