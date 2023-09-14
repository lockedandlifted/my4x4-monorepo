import { useTheme } from 'tamagui'
import { Instagram, Link, SizableText, TikTok, XStack, YStack } from '@my/ui'

type FooterProps = {
  generatedAt?: string,
}

const Footer = ({ generatedAt }: FooterProps) => {
  const theme = useTheme()
  const color = theme.color.get()
  
  return (
    <YStack
    marginTop="$8"
    width="100%"
    paddingVertical="$2"
    >
      <YStack marginBottom="$4">
        <Link fontWeight="bold" href="/" marginBottom="$2">MY4X4 Builds, Parts and Community</Link>

        <Link href="/posts">All Forum Posts</Link>

        <Link href="posts?categoryKey=competitions">Latest 4X4 Competitions</Link>

        <Link href="posts?categoryKey=events">Upcoming 4X4 Events</Link>

        <Link href="/search">Browse all 4X4 Builds by Manufacturer</Link>

        <Link href="/searchByPart">Browse all 4X4 Builds by Parts</Link>
      </YStack>

      <YStack marginBottom="$4">
        <Link fontWeight="bold" href="/" marginBottom="$2">Company</Link>

        <Link href="/about">About Us</Link>

        <Link href="/privacyPolicy">Privacy Policy</Link>

        <Link href="mailto:support@lockedandlifted4x4.com?subject=Suggestion for MY4X4">Got a Suggestion?</Link>
      </YStack>

      <XStack alignItems="center" paddingVertical="$2" justifyContent="space-between" marginBottom="$2">
        <XStack alignItems='center'>
          <SizableText fontSize={14} color="gray">
            MY4X4.INFO © 2023
          </SizableText>

          <Link color="gray" href="https://www.kengreeff.com" marginLeft="$1">by Initium Studio</Link>
        </XStack>

        <XStack>
          <Link href="https://www.instagram.com/locked.and.lifted/" rel="nofollow">
            <Instagram fillColor={color} height={18} width={18}/>
          </Link>

          <Link
            href="https://www.tiktok.com/@lockedandlifted"
            rel="nofollow"
            style={{ marginLeft: '8px' }}
          >
            <TikTok fillColor={color} height={18} width={18}/>
          </Link>
        </XStack>
      </XStack>

      {!!generatedAt && (
        <SizableText
          borderColor="$borderColor"
          borderTopWidth="1px"
          color="$gray8"
          fontSize={14}
          paddingBottom="$2" 
          paddingTop="$2"
        >
          Generated at {generatedAt}
        </SizableText>
      )}
    </YStack>
  )
}

export default Footer
