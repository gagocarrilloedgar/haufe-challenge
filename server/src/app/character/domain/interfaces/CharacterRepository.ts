import { NewCharacter, CharacterRequest } from './Character'

export interface CharacterRepository {
  updateCharacter(character: CharacterRequest): Promise<NewCharacter>
}
