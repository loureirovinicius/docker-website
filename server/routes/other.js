import express, { Router } from "express";
import path from 'path'

import OthersController from "../controllers/OthersController.js";

const routes = new Router

/* In case you're not going to use docker, you'll need to change the directory ('..', '..', 'public'). The path referred here is related to container's workdir.
*/
const staticFile = path.resolve('public/')

routes.get('/others/notes', OthersController.index)
routes.post('/others/notes', OthersController.store)
routes.put('/others/notes/:note_id', OthersController.update)
routes.delete('/others/notes', OthersController.delete)

routes.use('/others', express.static(staticFile, { index: 'other.html'}))

export default routes;