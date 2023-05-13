import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as firebase from 'firebase';
import 'firebase/firestore'
import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBtu2h9tSdN3-0QEGHGWJh0O0QaRnwvZfA",
  authDomain: "cart-847e2.firebaseapp.com",
  projectId: "cart-847e2",
  storageBucket: "cart-847e2.appspot.com",
  messagingSenderId: "96433264588",
  appId: "1:96433264588:web:576ba4580e47bdf4ba2f69"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

