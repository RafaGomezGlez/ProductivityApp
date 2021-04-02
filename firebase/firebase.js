import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDUfkYTN0pBadzzd6DoeizppYNTSVi0U00",
  authDomain: "productivityapp-1fc42.firebaseapp.com",
  projectId: "productivityapp-1fc42",
  storageBucket: "productivityapp-1fc42.appspot.com",
  messagingSenderId: "208272456800",
  appId: "1:208272456800:web:09f70231f674855f6e1705",
  measurementId: "G-L15C4N18WD" }; 

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()
