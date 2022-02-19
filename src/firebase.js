import firebase from 'firebase/compat/app';
import "firebase/compat/database";

let config = {
    apiKey: "AIzaSyCC9fCsKIKEHS8kMz7p-0obJQUl8A_wPZ8",
    authDomain: "evita-rahman-wedding.firebaseapp.com",
    databaseURL: "https://evita-rahman-wedding-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "evita-rahman-wedding",
    storageBucket: "evita-rahman-wedding.appspot.com",
    messagingSenderId: "904130585404",
    appId: "1:904130585404:web:45d129b626ee6b03c27439"
};
firebase.initializeApp(config);
export default firebase.database();