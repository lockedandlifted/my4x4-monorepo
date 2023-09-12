import { useTheme } from 'tamagui'
import { Image, Link, LicensePlateLogo, Popover, XStack } from '@my/ui'
import { Menu, Search } from '@tamagui/lucide-icons'

import MainNavigationModal  from '@components/modals/MainNavigationModal'

import LoggedInUser from './LoggedInUser'

const Header = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure()

  const theme = useTheme()
  const logoColor = theme.color.get()

  return (
    <>
      <XStack
        alignItems="center"
        height={64}
        justifyContent="space-evenly"
        paddingBottom="$4"
        paddingTop="$4"
        width="100%"
      >
        <MainNavigationModal
          callbacks={{
            closeModal: () => console.log('click'),
          }}
          showModal={true}
        >
          <Link fontSize={28} width="28px">
            <Menu />
          </Link>
        </MainNavigationModal>

        <Link href="/" marginHorizontal="auto">
          <LicensePlateLogo fillColor={logoColor} height={31} width={82}/>
        </Link>

        <Link
          alignItems="center"
          display='flex'
          borderBottomLeftRadius={28}
          borderBottomRightRadius={28}
          borderTopLeftRadius={28}
          borderTopRightRadius={28}
          borderWidth={1}
          height={28}
          href="/search"
          justifyContent="center"
          marginRight="$2"
          width={28}
        >
          <Search size={16}/>
        </Link>

        <LoggedInUser />
      </XStack>
    </>
  )
}

export default Header
