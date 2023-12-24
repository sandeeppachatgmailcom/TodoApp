import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBi5ybnqmE3NKKq8f9hywnFp7ixFdHsJ2w",
  authDomain: "meta-gear-397809.firebaseapp.com",
  projectId: "meta-gear-397809",
  storageBucket: "meta-gear-397809.appspot.com",
  messagingSenderId: "75139760459",
  appId: "1:75139760459:web:3f1913102df5167d82a8ce",
  measurementId: "G-FYDTEETQPP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default getFirestore(app);
