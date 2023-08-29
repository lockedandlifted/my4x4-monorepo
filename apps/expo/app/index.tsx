import { HomeScreen } from 'app/screens/home/screen'
import { Stack } from 'expo-router'
import { Image } from 'react-native'

function LogoTitle() {
  return (
    <Image
      style={{ width: 80, height: 21 }}
      source={require('../assets/logo.png')}
    />
  );
}

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
          headerTitle: props => <LogoTitle {...props} />,
        }}
      />
      <HomeScreen />
    </>
  )
}
