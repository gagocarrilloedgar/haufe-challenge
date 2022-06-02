import bcrypt from 'bcrypt'

const encrypt = async (notEncryptedPassword: string): Promise<string> => {
  const salt = await bcrypt.genSalt(12)
  return bcrypt.hash(notEncryptedPassword, salt)
}

const compare = async (client: string, server: string) => bcrypt.compare(client, server)

const changedPasswordAfter = (passwordChangedAt: number, JWTTimestamp: number) => {
  if (!passwordChangedAt) return false

  const changedTimestamp = passwordChangedAt / 1000
  return JWTTimestamp < changedTimestamp
}

export { changedPasswordAfter, encrypt, compare }
