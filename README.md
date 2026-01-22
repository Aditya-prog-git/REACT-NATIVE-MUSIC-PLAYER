<!-- Banner -->
<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=220&section=header&text=React%20Native%20Music%20Player&fontSize=48&fontAlignY=38&animation=twinkling&fontColor=white" width="100%"/>
</div>

<p align="center">
  <b>Production-focused music streaming app · Built with Expo & TypeScript</b>
</p>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%">

---

## ✨ Overview

> A **React Native music streaming application** built using the **JioSaavn public API**, focused on player synchronization, clean architecture, and interview-ready engineering decisions.

This project emphasizes **how a real music player behaves**, not just how it looks.

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%">

---

## 🎧 Core Features

<div align="center">

| Feature | Description |
|------:|-------------|
| 🎵 Search | Search songs using real JioSaavn API |
| ▶️ Player | Full-screen audio player |
| 📌 Mini Player | Persistent & synced across navigation |
| ⏯ Controls | Play / Pause / Next / Previous |
| 🎚 Seek Bar | Real-time progress tracking |
| 🔀 Shuffle | Randomized playback mode |
| 🔁 Repeat | Off / All / One |
| 🌙 Background | Audio continues in background |

</div>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%">

---

## 🧭 Architecture Philosophy

<div align="center">

| Principle | Implementation |
|--------:|----------------|
| Single source of truth | Zustand-based global player store |
| Sync guarantee | Mini Player & Full Player share state |
| Stateless UI | Screens focus only on rendering |
| Predictable audio | Centralized audio lifecycle |

</div>

Each screen reacts to **player state**, never controls it independently.

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%">

---

## 🧠 Player State Design (Quick View)

<div align="center">

### `Queue → Current Index → Audio Instance → UI Sync`

</div>

- Queue persistence handled centrally  
- Navigation does not reset playback  
- Player state survives screen transitions  

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%">

---

## ⚙️ Tech Stack

<div align="center">

| Layer | Technology |
|----|-----------|
| 📱 Framework | React Native (Expo) |
| 🧠 Language | TypeScript |
| 🧭 Navigation | React Navigation v6 |
| 🎶 Audio | Expo AV |
| 🗂 State | Zustand |
| 💾 Storage | AsyncStorage |
| 🌐 API | JioSaavn (public) |

</div>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%">

---

## 🧪 Development Setup

### Prerequisites
- Node.js (v18+ recommended)
- Expo Go (Android / iOS)

### Install dependencies
```bash
npm install
Run the app
npx expo start
```
Scan the QR code using Expo Go on your phone
(or press a if an Android emulator is already running).

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%">
⚖️ Trade-offs & Decisions
Offline downloads are planned but disabled in the Expo Go build

AsyncStorage used for compatibility during development

UI follows Figma closely while prioritizing usability over pixel perfection

No mock data used — all results come from real APIs

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%">
🚀 Future Enhancements
Offline playback with local caching

Queue reordering UI

Dark / Light theme toggle

Improved network error handling

Playlist & artist detail screens

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%">
📦 Submission Notes
Platform: Android (Expo)

Source: GitHub repository

Demo: Available on request

This project avoids over-engineering and focuses on correctness, synchronization, and maintainability.

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%">
🧠 Final Thought
<div align="center">
“A music player is only as good as its sync.”
</div> 
