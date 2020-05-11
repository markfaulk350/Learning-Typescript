// 3rd Party Imports
import express, { Application, Request, Response } from 'express'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'

// Personal Imports
import { router } from './routes/loginRoutes'

const app: Application = express()

// 3rd Party Middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['asdfg'] }))

// Personal Middleware
app.use(router)


app.listen(3000, () => {
    console.log('Listening on http://localhost:3000')
})