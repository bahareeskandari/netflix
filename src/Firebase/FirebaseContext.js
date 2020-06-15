import React, { createContext, useContext } from 'react'
import firebase from 'firebase'
import 'firebase/firestore'
import { UserContext } from '../components/UserContext'
let Keys
if (process.env.NODE_ENV === 'production') {
  Keys = {
    REACT_APP_APIKEY: process.env.REACT_APP_APIKEY,
    REACT_APP_AUTHDOMAIN: process.env.REACT_APP_AUTHDOMAIN,
    REACT_APP_PROJECTID: process.env.REACT_APP_PROJECTID

  }
} else {
  Keys = require('../Keys.json')
}

firebase.initializeApp({
  apiKey: Keys.REACT_APP_APIKEY,
  authDomain: Keys.REACT_APP_AUTHDOMAIN,
  projectId: Keys.REACT_APP_PROJECTID
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
