import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SafeAreaView } from "react-native"
import { useEffect } from "react"
import { Audio } from "expo-av"
import HomeScreen from "./src/screens/HomeScreen"
import PlayerScreen from "./src/screens/PlayerScreen"
import MiniPlayer from "./src/components/MiniPlayer"

const Stack = createNativeStackNavigator()

export default function App() {
  useEffect(() => {
    Audio.setAudioModeAsync({
      staysActiveInBackground: true,
      playsInSilentModeIOS: true
    })
  }, [])

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Player" component={PlayerScreen} />
        </Stack.Navigator>
        <MiniPlayer />
      </SafeAreaView>
    </NavigationContainer>
  )
}
