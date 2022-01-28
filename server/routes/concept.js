import express, { Router } from "express";
import path from 'path'

import ConceptsController from "../controllers/ConceptsController.js";

const routes = new Router

/* In case you're not going to use docker, you'll need to change the directory ('..', '..', 'public'). The path referred here is related to container's workdir.
*/
const staticFile = path.resolve('public/')

routes.use('/concepts', express.static(staticFile, { index: 'concept.html'}))

routes.get('/concepts/notes', ConceptsController.index)
routes.post('/concepts/notes',  
check('title')
    .notEmpty()
    .isLength({ min: 2, max: 20}),
check('topic')
    .notEmpty()
    .isLength({ min: 3}),
check('description')
    .notEmpty()
    .isLength({ min: 10}),
check('reference')
    .notEmpty()
    .isLength({ min: 15}),
check('technology')
    .notEmpty()
    .isLength({ min: 1, max: 15}),
(req, res, next) => {
    const error = validationResult(req)
    if(!error.isEmpty()) {
        return res.status(400).json({ message: error.array() })
    }

    return next()
}, ConceptsController.store)

routes.put('/concepts/notes/:note_id', ConceptsController.update)
routes.delete('/concepts/notes', ConceptsController.delete)

export default routes;