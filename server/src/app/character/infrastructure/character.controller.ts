import { Response, Request, NextFunction } from 'express'
import httpStatus from 'http-status'

import { catchAsync } from 'shared/utils'
import { CharacterDTO, CharacterRequest } from 'app/character/domain/interfaces'

const updateFavourite = (
  updateCharacter: (
    characterRequest: CharacterRequest
  ) => Promise<{ success: string | null; error: string | null }>
) =>
  catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
    const body = req.body

    const chart = await updateCharacter(body)

    if (chart.error) return res.status(httpStatus.BAD_REQUEST).send(chart.error)

    res.status(httpStatus.OK).send({ message: 'To be defined' })
  })

const getCharacters = (
  getAllCharacters: () => Promise<{ success: CharacterDTO[] | null; error: string | null }>
) =>
  catchAsync(async (_req: Request, res: Response, _next: NextFunction) => {
    const characters = await getAllCharacters()

    if (characters.error) return res.status(httpStatus.BAD_REQUEST).send(characters.error)

    res.status(httpStatus.OK).send(characters.error)
  })

export { updateFavourite, getCharacters }
