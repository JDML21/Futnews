
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBQ8kukb2CP_q05ZQZyqy3JVPM4sxMTU_E",
  authDomain: "futnews-441cd.firebaseapp.com",
  projectId: "futnews-441cd",
  storageBucket: "futnews-441cd.appspot.com",
  messagingSenderId: "23209404299",
  appId: "1:23209404299:web:40a915ed3d002e119ef18e",
  measurementId: "G-R6HWJS44RJ"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);