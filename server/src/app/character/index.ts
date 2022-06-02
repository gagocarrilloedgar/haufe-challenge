import { characterMongoRepository } from './infrastructure/db/mongose'

import { characterServices } from './application'

export default characterServices(characterMongoRepository())
