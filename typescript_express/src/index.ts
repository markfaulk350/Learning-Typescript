import express, { Request, Response } from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send(`
    <h1>Home Page</h1>
    `)
})

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000')
})