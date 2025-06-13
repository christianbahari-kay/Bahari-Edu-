import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 
const firebaseConfig = {
  apiKey: "AIzaSyAxNUw9Ro1KEB1MT5NfaB58vPWVLiG9pbM",
  authDomain: "bahari-edu.firebaseapp.com",
  projectId: "bahari-edu",
  storageBucket: "bahari-edu.appspot.com", 
  messagingSenderId: "947027537120",
  appId: "1:947027537120:web:071403ec3f8ac695a3f485",
  measurementId: "G-HE58DF9ZHZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); 
const provider = new GoogleAuthProvider(); 

export { app, auth, provider }; 
