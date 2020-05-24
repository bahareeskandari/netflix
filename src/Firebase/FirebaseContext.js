import { createContext } from 'react'
import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAB6_zqp4uJCjtiMOflBDIlZkASotSjXVg',
  authDomain: 'netflix-75751.firebaseapp.com',
  databaseURL: 'https:netflix-75751.firebaseio.com',
  projectId: 'netflix-75751',
  storageBucket: 'netflix-75751.appspot.com',
  messagingSenderId: '419828713469',
  appId: '1:419828713469:web:04f7fcd042feab69897b94'
}

firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId
})

export const db = firebase.firestore()
export const provider = new firebase.auth.GoogleAuthProvider()
export const FirebaseContext = createContext(db)
export default FirebaseContext
