import firebase from 'firebase';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyAtQIiyFIa7snK0qFN09sh9FCx-7yM03p4",
  authDomain: "contactform-a74ba.firebaseapp.com",
  databaseURL: "https://contactform-a74ba.firebaseio.com",
  projectId: "contactform-a74ba",
  storageBucket: "contactform-a74ba.appspot.com",
  messagingSenderId: "370861288645",
  appId: "1:370861288645:web:3e1fb5d6bd79bec42294ac",
  measurementId: "G-W5LF7G6DYG"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();