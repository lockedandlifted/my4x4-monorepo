import { useThemeSetting } from '@tamagui/next-theme'
import { YStack } from '@my/ui'
import { Button } from 'tamagui'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'

import Footer from '@components/Footer'
import Header from '@components/Header'

interface DefaultLayoutProps {
  children: React.ReactNode,
  generatedAt?: string,
}

const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children, generatedAt } = props

  const themePayload = useThemeSetting()
  const { current, set } = themePayload

  const { asPath } = useRouter()

  return (
      <YStack
        justifyContent="center" 
        marginHorizontal="auto"
        padding="$4"
        width="100%"
        $gtSm={{
          maxWidth: 600,
        }}
      >
        <DefaultSeo
          title="MY4X4 | Detailed info and specs of your favourite 4wds"
          description="Add your build. Find and research similar builds to get inspiration."
          canonical={`https://www.my4x4.info${asPath}`}
          additionalLinkTags={[
            {
              rel: 'icon',
              href: '/favicon.ico',
            },
          ]}
          facebook={{
            appId: '100089112092156',
          }}
          openGraph={{
            description: 'Add your build. Find and research similar builds to get inspiration.',
            images: [
              {
                url: 'https://www.my4x4.info/og-image.jpg',
              },
            ],
            title: 'MY4X4 | Detailed info and specs of your favourite 4wds',
            type: 'website',
            url: `https://www.my4x4.info${asPath}`,
          }}
        />

      <Button onClick={() => set(current === 'light' ? 'dark' : 'light')}>
        <Button.Text>Toggle Theme</Button.Text>
      </Button>

        <Header />

        <YStack paddingBottom="$4" paddingTop="$4" width="100%">
          {children}
        </YStack>

        <Footer generatedAt={generatedAt} />
      </YStack>
  )
}

export default DefaultLayout
