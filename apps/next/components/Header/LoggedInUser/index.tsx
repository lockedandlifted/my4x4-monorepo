import { SizableText, YStack } from '@my/ui'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { User } from '@tamagui/lucide-icons'

import useImageUrl from '@hooks/useImageUrl'
// import useSession from '@hooks/useSession'

const LoggedInUser = () => {
  // const { isAuthenticated, user } = useSession({ includeUser: true })

  // const image = user?.usersImages?.[0]?.image
  // const hasImage = !!image

  // const { imageUrl } = useImageUrl({
  //   enabled: hasImage,
  //   path: image?.fileKey,
  //   transformation: [{
  //     focus: 'auto',
  //     height: '56',
  //     width: '56',
  //   }],
  // })

  return (
    <NextLink href="">
      <YStack
        alignItems="center"
        borderBottomLeftRadius={28}
        borderBottomRightRadius={28}
        borderTopLeftRadius={28}
        borderTopRightRadius={28}
        borderWidth={1}
        height={28}
        justifyContent="center"
        overflow="hidden"
        width={28}
      >
        <User size={16}/>

        {/* {!!imageUrl && (
          <NextImage
            alt="User Profile Image"
            height={28}
            width={28}
            src={imageUrl}
          />
        )} */}
      </YStack>
    </NextLink>
  )
}

export default LoggedInUser
