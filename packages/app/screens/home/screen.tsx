import {
  Anchor,
  Button,
  H1,
  H2,
  H3,
  Paragraph,
  ScrollView,
  Separator,
  Sheet,
  Text,
  useToastController,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/navigation'
import { Link } from 'solito/link'

import useSession from "app/hooks/useSession"

import { trpc } from 'app/utils/trpc'

export function HomeScreen() {
  const sessionPayload = useSession({ includeUser: true })
  const { isAuthenticated, login, logout, user } = sessionPayload

  const linkProps = useLink({
    href: '/user/nate',
  })

  const projectsQuery = trpc.projects.getProjects.useQuery({ limit: 10 })
  const { data: projects } = projectsQuery

  return (
    <ScrollView>
      <YStack f={1} jc="center" ai="center" p="$4" space>
        <YStack space="$4" maw={600}>
          <H1 ta="center">Welcome to Tamagui.</H1>
          <Paragraph ta="center">
            You are logged in as: {isAuthenticated ? user?.email : 'Not logged in'}
          </Paragraph>

          <Separator />

          {projects?.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}/edit`}>
              <Text>
                {project.title}
              </Text>
            </Link>
          ))}
        </YStack>

        <YStack>
          <Button {...linkProps}>Link to user</Button>
          <Button onPress={login} marginTop="$2">Login</Button>
          <Button onPress={logout} marginTop="$2">Logout</Button>
        </YStack>

        <SheetDemo />
      </YStack>
    </ScrollView>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
