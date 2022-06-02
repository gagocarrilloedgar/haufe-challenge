import { Router } from 'express'

import { CharacterServices } from 'src/app/character/domain/interfaces'
import { validateRequest } from 'shared/middlewares/validateRequest'

import { getCharacters, updateFavourite } from './character.controller'

const router = Router()

// We will pass the reporting service once we know more about the domain and the use cases
export const characterRouter = (services: CharacterServices) => {
  router.post('/', validateRequest(), getCharacters(services.getCharacters))

  /**
   * @swagger
   * /characters/generateSongReport:
   *  post:
   *   description: Generate a song report
   *  tags:
   *  - Reporting
   * parameters:
   * - name: body
   */
  router.patch('/:apiId/favourite', validateRequest(), updateFavourite(services.saveFavaouriteChar))

  return router
}
