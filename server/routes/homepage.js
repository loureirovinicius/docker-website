import express, { Router } from "express";
import HomepageController from "../controllers/HomepageController.js";
import path from 'path'

const routes = new Router

/* In case you're not going to use docker, you'll need to change the directory ('..', '..', 'public'). The path referred here is related to container's workdir.
*/
const staticFile = path.resolve('public/')

routes.get('/', HomepageController.status)

routes.use('/', express.static(staticFile, { index: 'homepage.html'}))


export default routes;