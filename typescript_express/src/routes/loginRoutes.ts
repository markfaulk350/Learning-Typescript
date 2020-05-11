import { Router, Request, Response, NextFunction } from 'express'

// The original express type definition file didnt do a great job of handling the request body from the body-parser middleware
// We can extend the Request interface to fix the issue with the type definition file
// This will force us to handle the case where the request body might be undefined
interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined }
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
    if(req.session && req.session.loggedIn) {
        next()
        return
    }
    res.status(403)
    res.send('Not permitted')
}

const router = Router()

router.get('/login', (req: Request, res: Response) => {
    res.send(`
    <form method="POST">
        <div>
            <label>Email</label>
            <input name="email"/>
        </div>
        <div>
            <label>Password</label>
            <input name="password" type="password"/>
        </div>
        <button>Submit</button>
    </form>
    `)
})

router.post('/login', (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body

    if (email && password && email === 'markfaulk350@gmail.com' && password === 'password') {   // Type guard to check against undefined
        req.session = { loggedIn: true }
        res.redirect('/')
    } else {
        res.send("Invalid email or password!")
    }
})

router.get('/', (req: Request, res: Response) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
        <div>
            <div>You are logged in</div>
            <a href="/logout">Logout</a>
        </div>
        `)
    } else {
        res.send(`
        <div>
            <div>You are NOT logged in</div>
            <a href="/login">Login</a>
        </div>
        `)
    }
})

router.get('/logout', (req: Request, res: Response) => {
    req.session = undefined
    res.redirect('/')
})

router.get('/protected', requireAuth, (req: Request, res: Response) => {
    res.send('Welcome to protected route.')
})

// We have to use curly braces because we are not declaring and exporting on the same line
export { router }