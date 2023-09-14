import { Button, H1, YStack } from '@my/ui'
import { useRouter } from 'next/router'

import { trpc } from 'app/utils/trpc'

import DefaultLayout from 'layouts/DefaultLayout'
import Actions from '@components/Project/Actions'
import MainImage from '@components/Project/MainImage'

function UserLoginPage() {
  return (
    <DefaultLayout>
      <H1>Login or Sign Up</H1>

      <YStack marginTop="$8">
        <Button
          tag="a"
          href="/api/auth/register"
        >
          Sign Up
        </Button>

        <Button
          tag="a"
          href="/api/auth/login"
          marginTop="$2"
        >
          Login
        </Button>
      </YStack>
    </DefaultLayout>
  )
}

export default UserLoginPage
