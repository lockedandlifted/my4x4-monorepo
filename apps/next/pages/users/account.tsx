import { Button, H1 } from '@my/ui'
import { useRouter } from 'next/router'

import { trpc } from 'app/utils/trpc'

import DefaultLayout from 'layouts/DefaultLayout'
import Actions from '@components/Project/Actions'
import MainImage from '@components/Project/MainImage'

function UserAccountPage() {
  return (
    <DefaultLayout>
      <H1>Account</H1>

      <Button
        tag="a"
        href="/api/auth/logout"
      >
        Logout
      </Button>
    </DefaultLayout>
  )
}

export default UserAccountPage
