import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVoG-oxA9XVjxmHERrUM3D4k3B4wFL4C8",
    authDomain: "linkedin-clone-3e21a.firebaseapp.com",
    projectId: "linkedin-clone-3e21a",
    storageBucket: "linkedin-clone-3e21a.appspot.com",
    messagingSenderId: "906464100415",
    appId: "1:906464100415:web:e42d84822a08073da5f88a",
    measurementId: "G-YEQZGS1VJB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); //connect firebase

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export{db, auth}; //pour acceder a ces constantes dans d'autres composants

