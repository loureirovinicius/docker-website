import fs from 'fs'
import path from 'path'

export default new class HomepageController {
    
    status(req, res, next) {

        /* In case you're not going to use docker, add '..' as the first parameter ('..', 'public', 'homepage.html'). The path refered here is related to container's workdir.
        */
        const file = path.resolve('public', 'homepage.html' )


        if (!fs.existsSync(file)) {
            res.status(500).send("Internal error. We're working to fix it.")
        }

        res.status(200)
        return next()
    }
}