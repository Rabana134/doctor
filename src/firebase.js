import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/database"
import 'firebase/compat/storage';

var app = firebase.initializeApp({
    apiKey: "AIzaSyDz85UAjLpAti-POk2uKWXtPfyYwDUhkQY",
    authDomain: "doctor-1f1c1.firebaseapp.com",
    projectId: "doctor-1f1c1",
    storageBucket: "doctor-1f1c1.appspot.com",
    messagingSenderId: "357544247538",
    appId: "1:357544247538:web:b5aa2aa35e7d78ba04106b",
    databaseURL: "https://doctor-1f1c1-default-rtdb.europe-west1.firebasedatabase.app"
})
export const storage = app.storage();

export var auth = app.auth();
export default app