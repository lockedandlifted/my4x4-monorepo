import { useState } from 'react'
import { Button, H2, YStack } from '@my/ui'
import { LinearGradient } from '@tamagui/linear-gradient'
import NextImage from 'next/image'
import { DashboardModal } from '@uppy/react'

import type { Project } from '@prisma/client'

import { trpc } from 'app/utils/trpc'

import useImageUrl from 'app/hooks/useImageUrl'
import useProjectImageUpload from 'app/hooks/useProjectImageUpload'

import PlaceholderUrl from './assets/placeholder.png'

type MainImageProps = {
  isLoading?: boolean,
  project: Project,
}

const MainImage = (props: MainImageProps) => {
  const { isLoading, project } = props

  const [uploadModalOpen, setUploadModalOpen] = useState(false)

  const {
    projects: {
      getProjectById: { invalidate: invalidateGetProjectById },
    },
    projectsImages: {
      getProjectsImages: { invalidate: invalidateGetProjectsImages },
    },
  } = trpc.useContext()

  const { uppy } = useProjectImageUpload({
    callbacks: {
      onSuccess: () => {
        invalidateGetProjectById({ id: project?.id })
        invalidateGetProjectsImages({ projectId: project?.id })
      },
    },
    projectId: project?.id,
  })

  const image = project?.projectsImages?.[0]?.image
  const hasImage = !!image

  const { imageUrl } = useImageUrl({
    enabled: hasImage,
    path: image?.fileKey,
    transformation: [{
      focus: 'auto',
      height: '710',
      width: '568',
    }],
  })

  const GradientComponent = hasImage ? LinearGradient : YStack

  return (
    <YStack
      borderRadius={20}
      overflow="hidden"
      position="relative"
      maxWidth="100%"
      aspectRatio="4/5"
    >
      {hasImage && imageUrl && <NextImage alt="Project Main Image" fill src={imageUrl} style={{ objectFit: 'cover' }} />}

      {!isLoading && !hasImage && (
        <NextImage
          alt="Image Placeholder"
          fill
          src={PlaceholderUrl}
          style={{ marginTop: 'auto', objectFit: 'cover', opacity: 0.3 }}
        />
      )}

      <GradientComponent
        colors={['rgba(0,0,0,0.90)', 'rgba(0,0,0,0.60)', 'rgba(0,0,0,0)']}
        locations={[0, 0.6, 1]}
        end={{ x: 0, y: 0 }}
        height="30%"
        marginTop="auto"
        start={{ x: 0, y: 1 }}
        width="100%"
        zIndex={1}
      >
        <YStack display="flex" height="100%" padding="$space.5" position="relative" width="100%">
          <YStack marginTop="auto">
            <H2
              color={hasImage ? 'white' : 'black'}
              marginBottom={hasImage ? '$4' : '$8'}
            >
              {project?.title}
            </H2>
          </YStack>
        </YStack>

        {!hasImage && !!uppy && (
          <Button
            backgroundColor="$blue8"
            onClick={() => setUploadModalOpen(true)}
            marginTop="auto"
            size="$4"
            zIndex={1}
            width="100%"
          >
            Upload a Photo
          </Button>
        )}
      </GradientComponent>

      {uppy && (
        <DashboardModal
          doneButtonHandler={() => setUploadModalOpen(false)}
          onRequestClose={() => setUploadModalOpen(false)}
          open={uploadModalOpen}
          uppy={uppy}
        />
      )}
    </YStack>
  )
}

export default MainImage
