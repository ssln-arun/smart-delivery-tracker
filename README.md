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

<p align="center">
  <img src="https://github.com/user-attachments/assets/e7b47ce9-fc0b-4935-ae8e-2cf241ea8409" alt="Screenshot 1" width="45%" />
  <img src="https://github.com/user-attachments/assets/74078e63-d698-41b4-8073-2520401208c7" alt="Screenshot 2" width="45%" />
</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/9856a74d-d39a-4fe8-9db5-2979b29b622e" alt="Screenshot 3" width="45%" />
  <img src="https://github.com/user-attachments/assets/df91aca6-58de-4ff7-a7c7-b2e53c00fdce" alt="Screenshot 4" width="45%" />
</p>

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
