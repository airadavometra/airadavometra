import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDM9POv7pcuZYvmkR_yENT5KAH1W9LpDDw",
  authDomain: "airadavometra-63c2c.firebaseapp.com",
  projectId: "airadavometra-63c2c",
  storageBucket: "airadavometra-63c2c.appspot.com",
  messagingSenderId: "629142799555",
  appId: "1:629142799555:web:ff45809b967dfa3590ce76",
  measurementId: "G-JB08TDD1QQ",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
