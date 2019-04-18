## Pre-requisite:

1. node 8.3+
2. watchman
3. react-native cli
4. Xcode if iOS
5. Android Studio if Android

## Initial Set Up
Run command
```
yarn
```
or
```
npm install
```

## Run in iOS Simulator
Run command:
```
react-native run-ios
```

## Run in Android Emulator

1. open Android Studio
2. Set up a device in AVD manager
3. Run commands:
```
react-native run-android
```

## Google API

This project is dependent on a working google API

1. Go to https://console.developers.google.com/
2. Create a project if you don't have one already
3. Under Dashboard of the create project hit  `+ ENABLE APIS AND SERVICES` and add the google books API to your project
4. Under credentials, create an API key type credential, and set restrictions to none
5. Copy the API key and pop it into the service call in `App.js`

The same key can be used for both the react and react native project