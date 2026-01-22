import { View, Text, TouchableOpacity } from "react-native"
import Slider from "@react-native-community/slider"
import { usePlayerStore } from "../store/playerStore"

export default function PlayerScreen() {
  const {
    queue,
    currentIndex,
    toggle,
    next,
    prev,
    seek,
    position,
    duration,
    isPlaying,
    shuffle,
    repeat,
    toggleShuffle,
    toggleRepeat
  } = usePlayerStore()

  const song = queue[currentIndex]
  if (!song) return null

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 22 }}>{song.name}</Text>
      <Text>{song.artist}</Text>

      <Slider
        value={position}
        minimumValue={0}
        maximumValue={duration}
        onSlidingComplete={seek}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={toggleShuffle}>
          <Text>Shuffle {shuffle ? "On" : "Off"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleRepeat}>
          <Text>Repeat {repeat}</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 24 }}>
        <TouchableOpacity onPress={prev}><Text>Prev</Text></TouchableOpacity>
        <TouchableOpacity onPress={toggle}><Text>{isPlaying ? "Pause" : "Play"}</Text></TouchableOpacity>
        <TouchableOpacity onPress={next}><Text>Next</Text></TouchableOpacity>
      </View>
    </View>
  )
}
