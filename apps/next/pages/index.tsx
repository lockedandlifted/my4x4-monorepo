import { HomeScreen } from 'app/screens/home/screen'
import Head from 'next/head'

import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import DefaultLayout from 'layouts/DefaultLayout'

const HomePage = ({ time }: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <DefaultLayout generatedAt={time}>
    <Head>
      <title>Home</title>
    </Head>

    <HomeScreen />
  </DefaultLayout>
)

export const getServerSideProps: GetServerSideProps<{ time: string }> = async ({
  res,
}) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=3600',
  )

  return {
    props: {
      time: new Date().toISOString(),
    },
  }
}

export default HomePage
