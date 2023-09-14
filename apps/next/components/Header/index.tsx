import { useTheme } from 'tamagui'
import { Link, LicensePlateLogo, XStack } from '@my/ui'
import { Menu, Search } from '@tamagui/lucide-icons'

import MainNavigationPopover  from '@components/MainNavigationPopover'

import LoggedInUser from './LoggedInUser'

const Header = () => {
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
        <MainNavigationPopover>
          <Link fontSize={28} width="28px">
            <Menu />
          </Link>
        </MainNavigationPopover>

        <Link href="/" marginHorizontal="auto">
          <LicensePlateLogo fillColor={logoColor} height={31} width={82}/>
        </Link>

        <Link
          alignItems="center"
          display='flex'
          borderColor="$borderColor"
          borderRadius={28}
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
