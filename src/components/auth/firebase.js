import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGxTetGhzkG71q2-VQZOvYNZsO-8nO0GU",
  authDomain: "netflix-clone-a5d1e.firebaseapp.com",
  projectId: "netflix-clone-a5d1e",
  storageBucket: "netflix-clone-a5d1e.appspot.com",
  messagingSenderId: "109586434814",
  appId: "1:109586434814:web:5702678f5c0526c092f3af",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
