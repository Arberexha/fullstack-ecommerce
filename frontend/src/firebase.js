import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyBofgfCQwK9fnrnjIO3HoRH-dn88LteKrE",
  authDomain: "register-87227.firebaseapp.com",
  projectId: "register-87227",
  storageBucket: "register-87227.appspot.com",
  messagingSenderId: "353071760344",
  appId: "1:353071760344:web:f0e30a3810ae61eb2028ad"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };