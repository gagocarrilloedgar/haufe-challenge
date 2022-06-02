import { Document, Schema, model, Model } from 'mongoose'

import { Character } from 'app/character/domain/interfaces'

export type CharacterEntity = Document & Character
export type ICharacterMongoModel = Model<CharacterEntity>

const CharacterSchema = new Schema(
  {
    apiId: {
      type: String,
      required: true,
      unique: true
    },
    favourite: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

export const ReportMongoModel: ICharacterMongoModel = model<CharacterEntity>(
  'Character',
  CharacterSchema
)
