import {Router, Request, Response} from 'express'

const router = Router();

router.get('/mensajes',(req: Request, resp: Response) => {
    resp.json({
        ok: true,
        mensaje: "all is ok..!!! "
    })
})

router.post('/status',(req: Request, resp: Response) => {

    let cuerpo = req.body.algo
    // let id = req.params.algo

    console.log(cuerpo)

    resp.json({
        ok: true,
        mensaje: "status is ok..!!! "
    })
})

router.post('/status/:id',(req: Request, resp: Response) => {
    let cuerpo = req.body.algo
    let id = req.params.id

    console.log(id)
    console.log(cuerpo)

    resp.json({
        ok: true,
        mensaje: "status 2 is ok..!!! "
    })
})

export default router