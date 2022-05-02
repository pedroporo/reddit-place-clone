import { initializeApp } from 'firebase/app'
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
  // apiKey: process.env.REACT_APP_APIKEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASEURL,
  // projectId: process.env.REACT_APP_PROJECTID,
  // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_APPID,
  apiKey: "AIzaSyD4r0jad7ygncgsC-8dmGltDwQwkt9gUwg",
  authDomain: "placetest-f71e3.firebaseapp.com",
  databaseURL: "https://placetest-f71e3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "placetest-f71e3",
  storageBucket: "placetest-f71e3.appspot.com",
  messagingSenderId: "768069945327",
  appId: "1:768069945327:web:995227b8029f96b26ed81a"
});

const realtime = getDatabase(firebaseApp);
export const auth = getAuth(firebaseApp);
export default realtime;


