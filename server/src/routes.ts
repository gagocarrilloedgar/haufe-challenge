import { Router } from 'express'
import httpStatus from 'http-status'

import characterServices from 'app/character'
import { characterRouter } from 'app/character/infrastructure'

const router = Router()

export default () => {
  router.use('/characters', characterRouter(characterServices))
  router.use('/', (_req: any, res: any, _next: any) =>
    res.status(httpStatus.OK).send('Hello World')
  )
  return router
}
