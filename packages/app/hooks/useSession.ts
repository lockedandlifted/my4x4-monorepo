import { useEffect, useState } from 'react'
import { KindeSDK } from '@kinde-oss/react-native-sdk-0-7x'

import { trpc } from 'app/utils/trpc'

export const client = new KindeSDK(
  process.env.KINDE_ISSUER_URL || '',
  process.env.KINDE_NATIVE_POST_CALLBACK_URL || '',
  process.env.KINDE_CLIENT_ID || '',
  process.env.KINDE_NATIVE_POST_LOGOUT_REDIRECT_URL || '',
)

type User = {
  email: string, 
  family_name: string, 
  given_name: string, 
  id: string, 
  picture: string,
}

type DefaultState = {
  isAuthenticated: boolean,
  isLoading: boolean,
  kindeUser?: User,
}

const defaultState: DefaultState = {
  isAuthenticated: false,
  isLoading: true,
  kindeUser: undefined
}

type CheckIsAuthenticatedParams = {
  setState: (state: any) => void,
}

async function checkIsAuthenticated(params: CheckIsAuthenticatedParams) {
  const { setState } = params

  const isAuthenticated = await client.isAuthenticated
  const userDetails = await client.getUserDetails()

  setState((prevState) => {
    return {
      ...prevState,
      isAuthenticated,
      isLoading: false,
      kindeUser: userDetails,
    }
  })
}

type UseSessionOptions = {
  includeUser?: boolean,
}

function useSession(options: UseSessionOptions){
  const { includeUser = false } = options || {}

  const [state, setState] = useState(defaultState)
  const { isAuthenticated, isLoading, kindeUser } = state

  useEffect(() => {
    checkIsAuthenticated({ setState })
  }, [])

  const userQuery = trpc.users.findOrCreateUserForProviderById.useQuery(
    {
      provider: 'kinde',
      providerAccountId: kindeUser?.id || 'undefined',
    },
    { enabled: !!kindeUser?.id && includeUser },
  )
  const { data: user } = userQuery

  return {
    getToken: () => client.getToken(),
    isAuthenticated,
    isLoading,
    kindeUser,
    login: async () => {
      await client.login()
      await checkIsAuthenticated({ setState })
    },
    logout: async () => {
      await client.logout()
      await checkIsAuthenticated({ setState })
    },
    user,
  }
}

export default useSession
