import express, { Router } from "express";
import path from 'path'

import ConceptsController from "../controllers/ConceptsController.js";

const routes = new Router

/* In case you're not going to use docker, you'll need to change the directory ('..', '..', 'public'). The path referred here is related to container's workdir.
*/
const staticFile = path.resolve('public/')

routes.use('/concepts', express.static(staticFile, { index: 'concept.html'}))

routes.get('/concepts', ConceptsController.index)
routes.post('/concepts', ConceptsController.store)
routes.put('/concepts/:note_id', ConceptsController.update)
routes.delete('/concepts', ConceptsController.delete)

export default routes;