import express, { Router } from "express";
import CommandsController from "../controllers/CommandsController.js";
import { body, check, validationResult } from 'express-validator'
import path from 'path'

const routes = new Router

/* In case you're not going to use docker, you'll need to change the directory ('..', '..', 'public'). The path referred here is related to container's workdir.
*/
const staticFile = path.resolve('public/')

routes.use('/commands', express.static(staticFile, { index: 'command.html'}))

routes.get('/commands/notes', CommandsController.index)
routes.post('/commands/notes', 
check('title')
    .notEmpty()
    .isLength({ min: 2, max: 20}),
check('command')
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
}, CommandsController.store)

routes.put('/commands/notes/:note_id', CommandsController.update)
routes.delete('/commands/notes', CommandsController.delete)

export default routes;