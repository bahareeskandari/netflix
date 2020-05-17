import React, {useState, createContext} from 'react'
import firebase from 'firebase'
import 'firebase/firestore'

export const FirebaseContext = createContext(true)

export const FirebaseProvider = (props) => {
  const firebaseConfig = {
    apiKey: 'AIzaSyAB6_zqp4uJCjtiMOflBDIlZkASotSjXVg',
    authDomain: 'netflix-75751.firebaseapp.com',
    databaseURL: 'https:netflix-75751.firebaseio.com',
    projectId: 'netflix-75751',
    storageBucket: 'netflix-75751.appspot.com',
    messagingSenderId: '419828713469',
    appId: '1:419828713469:web:04f7fcd042feab69897b94',
  }

  firebase.initializeApp({
    apiKey: firebaseConfig.apiKey,
    authDomain: firebaseConfig.authDomain,
    projectId: firebaseConfig.projectId,
  })
  const db = firebase.firestore()
  const provider = new firebase.auth.GoogleAuthProvider()
  const onClickLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const token = result.credential.accessToken
        console.log(token, 'token')
        const user = result.user
        console.log(user, 'user')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.email
        const credential = error.credential
        console.log(errorCode, errorMessage, email, credential)
      })
  }
  return (
    <FirebaseContext.Provider value={{onClickLogin}}>{props.children}</FirebaseContext.Provider>
  )
}
