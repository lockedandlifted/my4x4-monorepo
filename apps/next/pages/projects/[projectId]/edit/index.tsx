import { useRouter } from 'next/router'

import { trpc } from 'app/utils/trpc'

import DefaultLayout from 'layouts/DefaultLayout'
import Actions from '@components/Project/Actions'
import MainImage from '@components/Project/MainImage'

function EditProjectPage() {
  const { query: { projectId } } = useRouter()

  const projectQuery = trpc.projects.getProjectById.useQuery(
    { id: projectId },
    { enabled: !!projectId },
  )
  const { data: project } = projectQuery

  return (
    <DefaultLayout>
      <MainImage project={project}/>
      <Actions project={project}/>
    </DefaultLayout>
  )
}

export default EditProjectPage
