import express, { Router } from "express";
import path from 'path'

const routes = new Router

/* In case you're not going to use docker, you'll need to change the directory ('..', '..', 'public'). The path referred here is related to container's workdir.
*/
const staticFile = path.resolve('public/')

routes.use('/commands', express.static(staticFile, { index: 'command.html'}))

export default routes;