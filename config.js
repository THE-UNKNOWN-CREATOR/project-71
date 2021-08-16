import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
    apiKey: "AIzaSyBX5Fpj2aNjd-IjXDPBQvGrYcjcazTG7NY",
    authDomain: "project-71-5a064.firebaseapp.com",
    projectId: "project-71-5a064",
    storageBucket: "project-71-5a064.appspot.com",
    messagingSenderId: "826478060964",
    appId: "1:826478060964:web:e914acb0475bb6d2860d31"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

