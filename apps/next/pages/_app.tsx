import '@tamagui/core/reset.css'
import '@tamagui/font-inter/css/400.css'
import '@tamagui/font-inter/css/700.css'
import 'raf/polyfill'

import React from 'react'
import Head from 'next/head'
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs"
import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'

import { Provider } from 'app/provider'

import { trpc } from 'app/utils/trpc.web'

import type { SolitoAppProps } from 'solito'

import '@uppy/core/dist/style.min.css'
import '@uppy/dashboard/dist/style.min.css'
import '@uppy/drag-drop/dist/style.min.css'
import '@uppy/file-input/dist/style.min.css'
import '@uppy/progress-bar/dist/style.min.css'

if (process.env.NODE_ENV === 'production') {
  require('../public/tamagui.css')
}

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>MY4X4</title>
        <meta name="description" content="Tamagui, Solito, Expo & Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <KindeProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </KindeProvider>
    </>
  )
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useRootTheme()

  return (
    <NextThemeProvider
      onChangeTheme={(next) => {
        setTheme(next as any)
      }}
    >
      <Provider disableRootThemeClass defaultTheme={theme}>
        {children}
      </Provider>
    </NextThemeProvider>
  )
}

export default trpc.withTRPC(MyApp)
