import firebase from "firebase";
import "firebase/storage";

const Config = {
  apiKey: "AIzaSyC3cJTEj_aerYAHMpPK7Jej5xnbesH5vzY",
  authDomain: "ichproject-3f50d.firebaseapp.com",
  databaseURL: "https://ichproject-3f50d.firebaseio.com",
  projectId: "ichproject-3f50d",
  storageBucket: "ichproject-3f50d.appspot.com",
  messagingSenderId: "153594418624",
  appId: "1:153594418624:web:0952fcf56a7ca1fafa2425",
  measurementId: "G-XCX0SHR1XT"
};
// Initialize Firebase
firebase.initializeApp(Config);
export const storage = firebase.storage();

export default firebase;
