import { CustomToast, TamaguiProvider, TamaguiProviderProps, ToastProvider } from '@my/ui'
import { useColorScheme } from 'react-native'

import { ImageKitContextProvider } from './ImageKit'
import { ToastViewport } from './ToastViewport'
import { TRPCProvider } from './TRPCProvider'

import config from '../tamagui.config'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const scheme = useColorScheme()
  return (
    <TamaguiProvider
      config={config}
      disableInjectCSS
      defaultTheme={scheme === 'dark' ? 'dark' : 'light'}
      {...rest}
    >
      <ToastProvider
        swipeDirection="horizontal"
        duration={6000}
        native={
          [
            /* uncomment the next line to do native toasts on mobile. NOTE: it'll require you making a dev build and won't work with Expo Go */
            // 'mobile'
          ]
        }
      >
        <TRPCProvider>
          <ImageKitContextProvider>
            {children}
          </ImageKitContextProvider>
        </TRPCProvider>

        <CustomToast />
        <ToastViewport />
      </ToastProvider>
    </TamaguiProvider>
  )
}
