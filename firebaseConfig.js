import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported  } from "firebase/analytics";

import {getReactNativePersistence, initializeAuth} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore, collection} from 'firebase/firestore'


// 1. create new project on firebase console
// 2. enable email and password auth provider in authentication
// 3. create a web app and copy the firebseConfigs below 

const firebaseConfig = {
  apiKey: "AIzaSyAoMg0CR94ovFrN1LIlC6n0LqcpLtJqyaE",
  authDomain: "meuappfirebase-2e4a6.firebaseapp.com",
  projectId: "meuappfirebase-2e4a6",
  storageBucket: "meuappfirebase-2e4a6.firebasestorage.app",
  messagingSenderId: "399221490576",
  appId: "1:399221490576:web:80247d0609b7ff8d802915"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

isSupported().then((supported) => {
  if (supported) {
    const analytics = getAnalytics(app);
  }
});

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const usersRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');
