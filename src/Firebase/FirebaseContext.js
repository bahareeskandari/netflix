import React, { createContext, useContext } from 'react'
import firebase from 'firebase'
import 'firebase/firestore'
import { UserContext } from '../components/UserContext'

// todo: flytta även alla dessa till keys.json se min andra kommentar
// import keys from '../../keys.json'
// const {apiKey, etc, etc} = keys

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

export const FirebaseProvider = (props) => {
  const { user, setUser } = useContext(UserContext)

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user.providerData[0])
      console.log(user.providerData[0].displayName)
      if (!user.providerData.length) return
      window.localStorage.setItem('user', JSON.stringify(user.providerData[0]))
    } else {
      const user = window.localStorage.getItem('user')

      const userData = JSON.parse(user)
      if (userData) { setUser(userData) } else {
        setUser(null)
      }
    }
  })

  return (
    <FirebaseContext.Provider value={db}>
      {props.children}
    </FirebaseContext.Provider>
  )
}

/*

*/
