import { CharacterRepository } from 'app/character/domain/interfaces'
import { getCharacters } from '../infrastructure'
import { saveFavaouriteChar } from './saveFavaouriteChar'

export const characterServices = (characterRepository: CharacterRepository) => {
  return {
    saveFavaouriteChar: saveFavaouriteChar(characterRepository.updateCharacter)
    getCharacters: ()=>{}
  }
}
