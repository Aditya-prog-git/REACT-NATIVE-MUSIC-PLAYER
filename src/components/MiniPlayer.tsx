import { View, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { usePlayerStore } from "../store/playerStore"

export default function MiniPlayer() {
  const { queue, currentIndex, toggle, isPlaying } = usePlayerStore()
  const nav = useNavigation<any>()
  const song = queue[currentIndex]

  if (!song) return null

  return (
    <TouchableOpacity onPress={() => nav.navigate("Player")}>
      <View style={{ height: 60, flexDirection: "row", justifyContent: "space-between", padding: 12 }}>
        <Text>{song.name}</Text>
        <TouchableOpacity onPress={toggle}>
          <Text>{isPlaying ? "Pause" : "Play"}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
