import { useEffect } from 'react'
import {
  Button,
  H1,
  Paragraph,
  YStack,
} from '@my/ui'
import { Linking, Platform } from 'react-native';
import { Stack } from 'expo-router'
import Constants, { ExecutionEnvironment } from 'expo-constants';
import InAppBrowser from 'react-native-inappbrowser-reborn'

import { KindeSDK } from '@kinde-oss/react-native-sdk-0-7x';

const client = new KindeSDK(
  process.env.KINDE_ISSUER_URL || '',
  process.env.KINDE_NATIVE_POST_CALLBACK_URL || '',
  process.env.KINDE_CLIENT_ID || '',
  process.env.KINDE_NATIVE_POST_LOGOUT_REDIRECT_URL || '',
)


const handleSignUp = async () => {
  const token = await client.register();
  if (token) {
    console.log('handleSignUp', { token })
  }
};

const handleSignIn = async () => {
  const token = await client.login();
  if (token) {
    console.log('handleSignIn', { token })
  }
}

function AuthScreen() {
  console.log(client)

  useEffect(() => {
    Linking.getInitialURL()
      .then((url) => {
        if (url) {
          console.log({ url })
        }
      })
      .catch((err) => console.error("An error occurred", err));
  
    Linking.addEventListener('url', (event) => {
      if (event.url) {
        console.log({ event })
      }
    })
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Auth',
        }}
      />
      <YStack f={1} jc="center" ai="center" p="$4" space>
        <YStack space="$4" maw={600}>
          <H1 ta="center">Authenticate</H1>
          <Paragraph ta="center">
            Here's a basic starter to show navigating from one screen to another. This screen uses the
            same code on Next.js and React Native.
          </Paragraph>

          <Button onPress={handleSignUp}>Sign Up</Button>
          <Button onPress={handleSignIn}>Sign In</Button>
        </YStack>
      </YStack>
    </>
  )
}

export default AuthScreen
