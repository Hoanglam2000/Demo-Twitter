import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID,
    // measurementId: process.env.REACT_APP_MEASUREMENT_ID,
    // apiKey: 'AIzaSyB8FWrTVh9LkHQwVULp8G9UJQQsvsEA54w',
    authDomain: 'twiter-f57a8.firebaseapp.com',
    projectId: 'twiter-f57a8',
    storageBucket: 'twiter-f57a8.appspot.com',
    messagingSenderId: '81437412547',
    appId: '1:81437412547:web:3a46f02ce2dbb34416a676',
    measurementId: 'G-Q800805CJR',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);