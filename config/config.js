// You can call all your env variables here to use them in other files. Don't forget to set the .env file first! :)

import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve('.env')})

export const port = process.env.PORT
export const dbConnection = process.env.DBCONNECTION 