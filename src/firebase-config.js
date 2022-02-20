import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCHKzN0hZkxPYe_YK8YH7zo4T13z3vdgkc",
    authDomain: "fir-registration-e5c8b.firebaseapp.com",
    projectId: "fir-registration-e5c8b",
    storageBucket: "fir-registration-e5c8b.appspot.com",
    messagingSenderId: "857961681440",
    appId: "1:857961681440:web:48999a5a1ea2062ebee245"
  };

  const app = initializeApp(firebaseConfig);

  export const db=getFirestore()