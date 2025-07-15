# Smart Delivery Tracker

<br>

## Overview

A real-time delivery location tracking application built with React, Vite, TypeScript, and Redux Toolkit. This app allows users (like delivery personnel) to track their current GPS location, view connectivity status, and sync location history even when offline using modern Web APIs.

## Tech Stack

- **Vite** Lightning-fast frontend tooling
- **React + TypeScript**  Component-based structure with type safety  
- **Redux Toolkit** State management for location and network 
- **Material UI (MUI)** Modern responsive UI components 
- **Geolocation API** Fetches live GPS coordinates 
- **Network Information API** Monitors internet status and speed 
- **Background Sync (Simulated)** Queues unsynced data while offline
  
## Features

- **Live GPS Location Tracking**  
  Automatically updates current latitude & longitude using browser geolocation.

- **Address Resolution**  
  Converts coordinates to a human-readable address using reverse geocoding.

- **Offline Support**  
  Stores unsynced locations while offline and syncs them when internet is back.

- **Network Status Monitoring**  
  Detects if the device is offline, online, or on a slow connection.

- **Manual Sync Button**  
  Allows users to manually sync stored locations to the backend (simulated).

- **Low Accuracy Detection**  
  Warns users if GPS accuracy is too low (e.g., indoors).

- **Fully Responsive UI**  
  Mobile-first layout using Material UI — ideal for real-world delivery agents.

---

## Project Preview

![Image01](https://github.com/user-attachments/assets/e10b3fda-558f-4e6d-992f-c6d2f990fa27)
![Image02](https://github.com/user-attachments/assets/99454749-0d90-4f1d-bb9e-9822f51c033e)
![Image03](https://github.com/user-attachments/assets/50869162-a429-40fc-93ff-f947548fb7d2)
![Image04](https://github.com/user-attachments/assets/129ce411-d768-45aa-8f2a-a460d4d08853)

## Installation

```bash
git clone https://github.com/ssln-arun/smart-delivery-tracker.git
cd smart-delivery-tracker
npm install
```

## Running the App

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Usage

- <strong>Track Live Location:</strong> Automatically updates and displays your location.
- <strong>Sync Locations:</strong> If offline, points are queued. Click “Sync” when back online.
- <strong>Refresh Button:</strong> “Refresh Location” to force an update.
- <strong>Check Address:</strong> Location is shown as both coordinates and a real address.
- <strong>Connectivity Alerts:</strong> See if you're on a slow or disconnected network.
