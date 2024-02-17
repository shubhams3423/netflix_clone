import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDX_k9AWwpSyu4K07SPmNYpT3KfUppV-Fg",
  authDomain: "netflix-clone-d03f0.firebaseapp.com",
  projectId: "netflix-clone-d03f0",
  storageBucket: "netflix-clone-d03f0.appspot.com",
  messagingSenderId: "323382545127",
  appId: "1:323382545127:web:7d259f86691ce742833042",
  measurementId: "G-GH5J7MHL9G",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
