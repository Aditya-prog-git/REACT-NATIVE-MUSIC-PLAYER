import { View, Text, FlatList, TouchableOpacity, TextInput } from "react-native"
import { useEffect, useState } from "react"
import axios from "axios"
import { usePlayerStore } from "../store/playerStore"

export default function HomeScreen({ navigation }: any) {
  const [query, setQuery] = useState("arijit")
  const [songs, setSongs] = useState<any[]>([])
  const setQueue = usePlayerStore(s => s.setQueue)

  useEffect(() => {
    axios
      .get(`https://saavn.sumit.co/api/search/songs?query=${query}`)
      .then(r => setSongs(r.data.data.results))
  }, [query])

  const mapped = songs.map((s, i) => ({
    id: s.id,
    name: s.name,
    image: s.image[2].link,
    url: s.downloadUrl[s.downloadUrl.length - 1].link,
    artist: s.primaryArtists
  }))

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput value={query} onChangeText={setQuery} style={{ borderWidth: 1, padding: 12 }} />
      <FlatList
        data={mapped}
        keyExtractor={i => i.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => {
            setQueue(mapped, index)
            navigation.navigate("Player")
          }}>
            <Text>{item.name}</Text>
            <Text>{item.artist}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
