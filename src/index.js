import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCPo_fvmkpaKLjIxPnG133nQImXSIFKRsU",
  authDomain: "jana-reactjs.firebaseapp.com",
  projectId: "jana-reactjs",
  storageBucket: "jana-reactjs.appspot.com",
  messagingSenderId: "336217115267",
  appId: "1:336217115267:web:330da3372c04e8e651e9b6",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
