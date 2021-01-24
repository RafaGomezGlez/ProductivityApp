import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "xxxxxxx",
    authDomain: "xxxxx",
    projectId: "xxxxxx",
    storageBucket: "xxxxxx",
    messagingSenderId: "xxxxxx",
    appId: "xxxxxxxx",
    measurementId: "xxxxxx"
};

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()