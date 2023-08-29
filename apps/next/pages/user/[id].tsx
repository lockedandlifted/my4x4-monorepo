import { UserDetailScreen } from 'app/screens/user/detail-screen'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>User</title>
      </Head>
      <UserDetailScreen />
    </>
  )
}
