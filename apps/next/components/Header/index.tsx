import { Image, Link, YStack } from '@my/ui'
import { Menu, Search } from '@tamagui/lucide-icons'

// import LoggedInUser from './LoggedInUser'

import LogoUrl from './assets/logo.svg'

const Header = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <YStack
        alignItems="center"
        height="64px"
        justifyContent="space-evenly"
        paddingBottom="$4"
        paddingTop="$4"
        width="100%"
      >
        <YStack width="60px">
          <Link onClick={() => console.log('click')} fontSize={28} width="28px">
            <Menu />
          </Link>
        </YStack>

        <Link href="/" marginX="auto">
          <Image source={LogoUrl} width={82} alt="MY4X4 Logo" />
        </Link>

        <YStack>
          <Link
            as="a"
            alignItems="center"
            justifyContent="center"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="100%"
            fontSize="sm"
            height="28px"
            href="/search"
            marginRight="1"
            width="28px"
          >
            <Search />
          </Link>

          {/* <LoggedInUser /> */}
        </YStack>
      </YStack>

      {/* <MainNavigationModal
        callbacks={{
          closeModal: onClose,
        }}
        showModal={isOpen}
      /> */}
    </>
  )
}

export default Header
