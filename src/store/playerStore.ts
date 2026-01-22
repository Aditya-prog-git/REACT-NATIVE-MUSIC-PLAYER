import { create } from "zustand"
import { Audio } from "expo-av"
import { storage } from "../storage/mmkv"

type Song = {
  id: string
  name: string
  image: string
  url: string
  artist: string
  localUri?: string
}

type RepeatMode = "off" | "all" | "one"

type State = {
  queue: Song[]
  currentIndex: number
  sound: Audio.Sound | null
  isPlaying: boolean
  position: number
  duration: number
  shuffle: boolean
  repeat: RepeatMode
  setQueue: (q: Song[], i: number) => Promise<void>
  toggle: () => Promise<void>
  seek: (p: number) => Promise<void>
  next: () => Promise<void>
  prev: () => Promise<void>
  toggleShuffle: () => void
  toggleRepeat: () => void
}

export const usePlayerStore = create<State>((set, get) => ({
  queue: [],
  currentIndex: 0,
  sound: null,
  isPlaying: false,
  position: 0,
  duration: 1,
  shuffle: false,
  repeat: "off",

  setQueue: async (q, i) => {
    storage.set("queue", JSON.stringify(q))
    storage.set("index", i.toString())
    await get().sound?.unloadAsync()
    const s = new Audio.Sound()
    await s.loadAsync({ uri: q[i].localUri || q[i].url }, { shouldPlay: true })
    s.setOnPlaybackStatusUpdate((st: any) => {
      if (!st.isLoaded) return
      set({ position: st.positionMillis, duration: st.durationMillis || 1 })
      if (st.didJustFinish) get().next()
    })
    set({ queue: q, currentIndex: i, sound: s, isPlaying: true })
  },

  toggle: async () => {
    const { sound, isPlaying } = get()
    if (!sound) return
    isPlaying ? await sound.pauseAsync() : await sound.playAsync()
    set({ isPlaying: !isPlaying })
  },

  seek: async p => {
    const { sound } = get()
    if (!sound) return
    await sound.setPositionAsync(p)
  },

  next: async () => {
    const { queue, currentIndex, shuffle, repeat } = get()
    let nextIndex = shuffle
      ? Math.floor(Math.random() * queue.length)
      : currentIndex + 1

    if (nextIndex >= queue.length) {
      if (repeat === "all") nextIndex = 0
      else return
    }

    if (repeat === "one") nextIndex = currentIndex

    get().setQueue(queue, nextIndex)
  },

  prev: async () => {
    const i = Math.max(0, get().currentIndex - 1)
    get().setQueue(get().queue, i)
  },

  toggleShuffle: () => set(s => ({ shuffle: !s.shuffle })),
  toggleRepeat: () =>
    set(s => ({
      repeat: s.repeat === "off" ? "all" : s.repeat === "all" ? "one" : "off"
    }))
}))
