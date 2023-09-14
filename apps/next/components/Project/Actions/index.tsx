import { Button, H4 } from '@my/ui'

import type { Project } from '@prisma/client'

type ActionsProps = {
  callbacks?: {
    publishProject: VoidFunction,
    unpublishProject: VoidFunction,
  },
  editMode?: boolean,
  project: Project,
}

const Actions = (props: ActionsProps) => {
  const { callbacks, editMode = false, project } = props

  return (
    <>
      <H4 fontSize="$5" marginBottom="$2" marginTop="$2">
        Actions
      </H4>

      {editMode && !project?.published && callbacks?.publishProject && (
        <Button
          onClick={callbacks.publishProject}
          size="$4"
        >
          Publish Project
        </Button>
      )}

      {editMode && project?.published && callbacks?.unpublishProject && (
        <Button
          onClick={callbacks.unpublishProject}
          size="$4"
        >
          Unpublish Project
        </Button>
      )}

      {!editMode && (
        <>
          <Button
            tag="a"
            theme="blue_active"
            color="white"
            href={`/${project?.slug}/questions`}
            size="$4"
          >
            Ask a Question
          </Button>

          <Button
            tag="a"
            href="/projects/new"
            marginTop="$2"
            size="$4"
          >
            Add a Build
          </Button>

          <Button
            tag="a"
            href="/search"
            marginTop="$2"
            size="$4"
          >
            Browse Builds
          </Button>
        </>
      )}
    </>

  )
}

export default Actions
