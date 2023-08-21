import { HomeScreen } from 'app/features/home/screen'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <a href="/api/auth/login">Sign In</a>
      <a href="/api/auth/register">Sign Up</a>
      <HomeScreen />
    </>
  )
}
