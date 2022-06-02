import { Auth, AuthUser } from 'app/auth/domain/interfaces'

export const singup =
  (create: (aut: Auth) => Promise<AuthUser>) =>
  async (auth: Auth, encrypt: (password: string) => Promise<string>) => {
    const encryptedPassword = await encrypt(auth.password)

    const newUser = {
      email: auth.email,
      password: encryptedPassword
    }

    return create(newUser)
  }
