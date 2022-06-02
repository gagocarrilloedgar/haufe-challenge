import { CharacterDTO, CharacterRequest } from './Character'

export interface CharacterServices {
  saveFavaouriteChar(
    character: CharacterRequest
  ): Promise<{ success: string | null; error: string | null }>
  getCharacters(): Promise<{ sucess: CharacterDTO[] | null; error: string | null }>
}
