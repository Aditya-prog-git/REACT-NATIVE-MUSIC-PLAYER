# React Native Music Player

A music streaming application built with **React Native (Expo)** using the **JioSaavn public API**.
The project focuses on clean architecture, global player state synchronization, and a polished playback experience.

---

## Features

* Song search using the JioSaavn API
* Home screen with dynamic results
* Full-screen music player
* Persistent mini player synced across navigation
* Play / pause, next / previous controls
* Seek bar with real-time progress
* Shuffle and repeat modes
* Background audio playback

---

## Tech Stack

* **React Native (Expo) + TypeScript**
* **React Navigation v6**
* **Zustand** for global state management
* **Expo AV** for audio playback
* **AsyncStorage** for persistence

> MMKV was explored for storage but AsyncStorage is used to ensure full compatibility with Expo Go during development.

---

## Architecture Overview

* Centralized player state using Zustand ensures perfect synchronization between:

  * Home screen
  * Mini player
  * Full player
* UI components are kept stateless where possible
* Audio lifecycle is managed in a single store to avoid desynchronization bugs

---

## Trade-offs & Decisions

* Offline downloads are planned but not enabled in the current Expo Go build
  (requires custom native builds for stable filesystem access)
* UI closely follows the provided Figma design, prioritizing usability over pixel-perfect replication
* Minimal abstractions are used to keep the codebase readable and maintainable

---

## Setup Instructions

### Prerequisites

* Node.js (v18+ recommended)
* Expo Go app (Android or iOS)

### Installation

```bash
npm install
```

### Run the app

```bash
npx expo start
```

Scan the QR code using **Expo Go** on your mobile device
(or press `a` to launch on an Android emulator if configured).

---

## Future Improvements

* Offline song downloads with local playback
* Queue reordering UI
* Dark / light theme toggle
* Improved error handling for network failures

---

## Demo & Submission

* Source code: GitHub repository
* Platform: Android (Expo)
* Demo: Available on request

---

## Notes

This project avoids mock data and uses real API responses throughout.
The focus is on correctness, synchronization, and clarity rather than over-engineering.
