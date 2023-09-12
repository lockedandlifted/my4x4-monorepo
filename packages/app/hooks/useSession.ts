import { useEffect, useState } from 'react'
import { KindeSDK } from '@kinde-oss/react-native-sdk-0-7x';

export const client = new KindeSDK(
  process.env.KINDE_ISSUER_URL || '',
  process.env.KINDE_NATIVE_POST_CALLBACK_URL || '',
  process.env.KINDE_CLIENT_ID || '',
  process.env.KINDE_NATIVE_POST_LOGOUT_REDIRECT_URL || '',
)

const defaultState = {
  isAuthenticated: false,
  isLoading: true,
}

function useSession(){
  const [state, setState] = useState(defaultState)
  const { isAuthenticated, isLoading } = state

  useEffect(() => {
    async function checkIsAuthenticated() {
      const isAuthenticated = await client.isAuthenticated

      setState((prevState) => {
        return {
          ...prevState,
          isAuthenticated,
          isLoading: false,
        }
      })
    }

    checkIsAuthenticated()
  }, [])

  return {
    getToken: () => client.getToken(),
    isAuthenticated,
    isLoading,
    user: {},
  }
}

export default useSession
