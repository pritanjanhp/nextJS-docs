// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// // import { getAuth } from "firebase/auth";
// import "firebase/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// import {
//   getAuth,
//   onAuthStateChanged,
//   GoogleAuthProvider,
//   signInWithRedirect
// } from "firebase/auth";
// // import { GoogleAuthProvider } from "firebase/auth/web-extension";

// const auth = getAuth();
// const button = document.querySelector("button");
// onAuthStateChanged(auth, (user) => {
//   if (user === null) {
//     return "not Logged in";
//   }
//   console.log(user);
// });

// button?.addEventListener("click", (clickEvent) => {
//   signInWithRedirect(auth, new GoogleAuthProvider());
// });

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBDrQoFLHS8TMiUnxDdUQWGofa6Eq-b8w4",
//   authDomain: "nextjs-hp.firebaseapp.com",
//   projectId: "nextjs-hp",
//   storageBucket: "nextjs-hp.firebasestorage.app",
//   messagingSenderId: "818298834937",
//   appId: "1:818298834937:web:f98e50a48cf0d6c4663728",
//   measurementId: "G-XN350D7KE5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
// const db = getFirestore(app);
// // const auth = getAuth(app);

// export { db, auth, analytics };

// ----------------------------------------------
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDrQoFLHS8TMiUnxDdUQWGofa6Eq-b8w4",
  authDomain: "nextjs-hp.firebaseapp.com",
  projectId: "nextjs-hp",
  storageBucket: "nextjs-hp.firebasestorage.app",
  messagingSenderId: "818298834937",
  appId: "1:818298834937:web:f98e50a48cf0d6c4663728",
  measurementId: "G-XN350D7KE5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics =
  app.name && typeof window !== "undefined" ? getAnalytics(app) : null;
const db = getFirestore(app);
export { app, analytics, auth, db };
