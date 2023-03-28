import { Router, Request, Response } from "express"

const route = Router()

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'hello world with Typescript sucesss!!!' })
})

export default route