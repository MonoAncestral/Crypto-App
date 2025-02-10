# Crypto Tracker Mobile App

## Overview

A React Native mobile application for tracking cryptocurrency prices and details, built using TypeScript and following modern mobile development best practices.

## Features

- 📊 Real-time cryptocurrency price tracking
- 🔍 Search and filter cryptocurrencies
- 💹 Detailed cryptocurrency information
- 💡 USD currency conversion
- 📱 Compatible with iOS and Android

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- Yarn or npm
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/MonoAncestral/Crypto-App.git
cd Crypto-App
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. For iOS, install pod dependencies:
```bash
cd ios && pod install && cd ..
```

## Running the Application

### iOS
```bash
yarn ios
# or
npx react-native run-ios
```

### Android
```bash
yarn android
# or
npx react-native run-android
```

## Project Structure

```
src/
│
├── components/           # Reusable UI components
│   └── CryptoListItem.tsx
│
├── hooks/              # Application hooks
│   ├── useCryptoList.ts
│   └── useCryptoDetail.ts
│
├── screens/              # Application screens
│   ├── CryptoListScreen.tsx
│   └── CryptoDetailScreen.tsx
│
├── services/             # API and data services
│   └── CryptoService.ts
│
├── styles/              # Application styles
│   ├── detailStyles.ts
│   └── listStyles.ts
│
└── types/                # TypeScript type definitions
    └── CryptoTypes.ts
```

## Technologies Used

- React Native
- TypeScript
- Axios
- React Navigation
- Coinlore API

## API Reference

This app uses the Coinlore API for cryptocurrency data:
https://www.coinlore.com/cryptocurrency-data-api

## Performance Optimizations

- Efficient list rendering with FlatList
- Memoized filtering
- Loading states
- Error handling


