import { Car, Home, MessagesSquare, PlusCircle } from '@tamagui/lucide-icons'
import { ListItem, Popover, YStack } from 'tamagui' 

type MainNavigationModalProps = {
  callbacks: {
    closeModal: VoidFunction,
  },
  children: React.ReactNode,
  showModal: boolean,
}

const MainNavigationModal = (props: MainNavigationModalProps) => {
  const { callbacks: { closeModal }, children, showModal } = props

  return (
    <Popover allowFlip open={showModal}size="$5">
      <Popover.Trigger asChild>
        {children}
      </Popover.Trigger>

      <Popover.Content
        borderWidth={1}
        borderColor="$borderColor"
        enterStyle={{ y: -10, opacity: 0 }}
        exitStyle={{ y: -10, opacity: 0 }}
        elevate
        padding="$space.2"
        animation={[
          'quick',
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}
      >
        <Popover.Arrow borderWidth={1} borderColor="$borderColor"/>

        <YStack space="$1">
          <ListItem hoverTheme icon={Home} title="Home" />

          <ListItem hoverTheme icon={MessagesSquare} title="Forum"/>

          <ListItem hoverTheme icon={Car} title="Latest Builds"/>

          <ListItem hoverTheme icon={PlusCircle} title="Add a Build"/>
        </YStack>
      </Popover.Content>
    </Popover>
  )
}

export default MainNavigationModal