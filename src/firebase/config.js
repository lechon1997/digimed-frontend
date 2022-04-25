import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCV8uXrLb2bq8Qg_npXwQteIV2rNbt87AE",
  authDomain: "digimed-ab36d.firebaseapp.com",
  projectId: "digimed-ab36d",
  storageBucket: "digimed-ab36d.appspot.com",
  messagingSenderId: "848567345209",
  appId: "1:848567345209:web:34d0def09480f08aa1ede8",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
