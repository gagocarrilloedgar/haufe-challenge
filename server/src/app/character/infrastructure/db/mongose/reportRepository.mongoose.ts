import { CharacterRepository, CharacterRequest } from 'src/app/character/domain/interfaces'

import { ReportMongoModel } from './reportSchema.mongoose'

export const characterMongoRepository = (): CharacterRepository => {
  const updateCharacter = async (character: CharacterRequest): Promise<any> => {
    const query = { apiId: character.apiId }
    const update = character
    const options = { upsert: true, new: true, setDefaultsOnInsert: true }

    return ReportMongoModel.findOneAndUpdate(query, update, options)
  }

  return {
    updateCharacter
  }
}
