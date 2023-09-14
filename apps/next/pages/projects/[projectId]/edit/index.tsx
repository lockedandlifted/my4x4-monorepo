import Head from 'next/head'
import EditProject from 'app/screens/projects/EditProject'

import DefaultLayout from 'layouts/DefaultLayout'

function EditProjectPage() {
  return (
    <DefaultLayout>
      <Head>
        <title>Project</title>
      </Head>
      <EditProject />
    </DefaultLayout>
  )
}

export default EditProjectPage
