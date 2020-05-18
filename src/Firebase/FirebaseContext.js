import React, { createContext } from 'react'
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
    appId: '1:419828713469:web:04f7fcd042feab69897b94'
  }
  // export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: firebaseConfig.apiKey,
      authDomain: firebaseConfig.authDomain,
      projectId: firebaseConfig.projectId
    })
  } else {
    firebase.app()
  }

  const db = firebase.firestore()
  const provider = new firebase.auth.GoogleAuthProvider()
  const isAuth = () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user.providerData[0])
      } else {
        console.log('doesnt exist')
      }
    })
  }
  const setUser = (userObject) => {
    console.log('funkar')
    if (!userObject.providerData.length) return
    const user = userObject.providerData[0]
    window.localStorage.setItem('user', JSON.stringify(user))
  }

  const getUser = () => {
    const user = window.localStorage.getItem('user')
    return JSON.parse(user)
  }
  const onClickLogin = () => {
    isAuth()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const token = result.credential.accessToken
        console.log(token, 'token')
        const user = result.user
        setUser()
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
    <FirebaseContext.Provider value={{ onClickLogin, isAuth }}>
      {props.children}
    </FirebaseContext.Provider>
  )
}
