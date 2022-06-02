import { Auth } from 'app/auth/domain/interfaces'

export const login =
  (findOne: (email: string) => Promise<Auth>) =>
  async (auth: Auth, compare: (client: string, server: string) => Promise<boolean>) => {
    const authorised = await findOne(auth.email)

    if (!authorised || !compare(auth.password, authorised.password))
      return { success: null, error: 'Invalid email or password' }

    return { success: authorised }
  }
