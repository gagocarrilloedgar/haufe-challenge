import { NewCharacter, CharacterRequest } from 'app/character/domain/interfaces'

export const saveFavaouriteChar =
  (updateCharacter: (character: CharacterRequest) => Promise<NewCharacter>) =>
  async (character: CharacterRequest) => {
    const report = await updateCharacter(character)

    if (report) return { success: 'Character udpated successfully', error: null }
    return { success: null, error: 'Error updating character' }
  }
