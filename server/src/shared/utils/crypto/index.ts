import crypto from 'crypto'

const createToken = () => crypto.randomBytes(32).toString('hex')
const newExpirationDate = () => Date.now() + 10 * 60 * 1000
const createHashedToken = (token: string) => crypto.createHash('sha256').update(token).digest('hex')
const createCode = () => crypto.randomInt(100000, 999999).toString()

const generateToken = () => {
  const verificationToken = createToken()
  const verificationExpires = newExpirationDate()
  const accountVerificationToken = createHashedToken(verificationToken)

  return { verificationToken, verificationExpires, accountVerificationToken }
}

export { generateToken, createHashedToken, createCode, createToken }
