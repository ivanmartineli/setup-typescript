import express from 'express'
import route from './route'

/*
 pode ser também

const dotenv = require('dotenv')

dotenv.config()

const app = express()
const route = Router()

const port = process.env.PORT;

app.use(express.json())
app.use(router)

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'hello world with Typescript sucesss XPTO !!!' })
})


app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})

*/


const app = express();

app.use(express.json())
app.use(route);

app.listen(3000, () => {
    console.log('APP is running port 3000')
})
