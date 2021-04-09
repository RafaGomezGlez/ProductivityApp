import firebase from 'firebase'



export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()
