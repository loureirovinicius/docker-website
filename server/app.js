import express from 'express'

import homepage from './routes/homepage.js'
import commands from './routes/command.js'
import concepts from './routes/concept.js'
import others from './routes/other.js'

class App {
    constructor() {
        this.server = express();
        this.routes();
        this.middleware()
    }

    // Not actually using this, but in case you need, it's already set. Just put it into constructor.
    middleware() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(homepage);
        this.server.use(commands);
        this.server.use(concepts);
        this.server.use(others);
    }
}

export default new App().server
