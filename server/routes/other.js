import express, { Router } from "express";
import path from 'path'

import OthersController from "../controllers/OthersController.js";

const routes = new Router

/* In case you're not going to use docker, you'll need to change the directory ('..', '..', 'public'). The path referred here is related to container's workdir.
*/
const staticFile = path.resolve('public/')

routes.get('/others/notes', OthersController.index)
routes.post('/others/notes', 
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
(req, res, next) => {
    const error = validationResult(req)
    if(!error.isEmpty()) {
        return res.status(400).json({ message: error.array() })
    }

    return next()
}, OthersController.store)

routes.put('/others/notes/:note_id', OthersController.update)
routes.delete('/others/notes', OthersController.delete)

routes.use('/others', express.static(staticFile, { index: 'other.html'}))

export default routes;