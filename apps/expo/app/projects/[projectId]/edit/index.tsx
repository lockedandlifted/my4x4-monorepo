import { Stack } from 'expo-router'
import EditProject from 'app/screens/projects/EditProject'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Project',
        }}
      />
      <EditProject />
    </>
  )
}
