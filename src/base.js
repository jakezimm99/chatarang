import firebase from 'firebase/app'
import Rebase from 're-base'
import 'firebase/auth'
import 'firebase/database'


  const config = {
    apiKey: "AIzaSyDkupf2NGNbTwcNDBzwGxXXLirmD7Xp3XI",
    authDomain: "chatarang-4c888.firebaseapp.com",
    databaseURL: "https://chatarang-4c888.firebaseio.com",
    projectId: "chatarang-4c888",
    storageBucket: "",
    messagingSenderId: "147866628889"
  };

  const app = firebase.initializeApp(config);

  
  export const auth = firebase.auth()
  export const googleProvider = new firebase.auth.GoogleAuthProvider()


  const db = firebase.database(app);
  const base = Rebase.createClass(db);

  export default base
