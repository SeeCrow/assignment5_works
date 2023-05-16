import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAy-xje7aEIrJIgXDVPw-1QPsyKNY7OU68',
  authDomain: 'quitter2-48b1f.firebaseapp.com',
  projectId: 'quitter2-48b1f',
  storageBucket: 'quitter2-48b1f.appspot.com',
  messagingSenderId: '874450296619',
  appId: '1:874450296619:web:a1952968d02fac5b012f6'
}

// Initialize Firebase

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export default db
