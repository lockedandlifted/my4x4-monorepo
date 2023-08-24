import { Button, Paragraph, YStack } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import React from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/navigation'

import { trpc } from 'app/utils/trpc'

const { useParam } = createParam<{ projectId: string }>()

function EditProjectScreen() {
  const [projectId] = useParam('projectId')
  const link = useLink({
    href: '/',
  })

  const projectQuery = trpc.projects.getProjectById.useQuery(
    { id: projectId },
    { enabled: !!projectId }
  )
  const { data: project } = projectQuery

  return (
    <YStack f={1} jc="center" ai="center" space>
      <Paragraph ta="center" fow="700">
        {`Project ID: ${projectId}`}
        {project?.title}
      </Paragraph>
      <Button {...link} icon={ChevronLeft}>
        Go Home
      </Button>
    </YStack>
  )
}

export default EditProjectScreen
