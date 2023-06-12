import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCTA1SuNYS0FjsGnp5oJtkl9hmtKsO4TdI",
        authDomain: "creatinai.firebaseapp.com",
        projectId: "creatinai",
        storageBucket: "creatinai.appspot.com",
        messagingSenderId: "651791342084",
        appId: "1:651791342084:web:b3bd886b7ab80b9f6a3351"
      });

var db=firebaseApp.firestore();
var auth = firebase.auth();
export default auth;
export {db};