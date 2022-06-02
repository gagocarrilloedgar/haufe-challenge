export interface Character {
  _id: string
  apiId: string
  favourite?: boolean
  createdAt: Date
  updatedAt: Date
}

export type Optional<T> = T | null | undefined

export type NewCharacter = Optional<Character>

export interface CharacterRequest {
  apiId: string
  favourite?: boolean
}

export interface CharacterDTO {
  id: string
  name: string
  status: string
  species: string
  origin: {
    name: string
    url: string
  }
}

export interface CharacterDetailDTO {
  id: string
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  created: string
  url: string
}
