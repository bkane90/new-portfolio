import React from 'react';
import './App.css';

import background from './assets/images/BackgroundImage.png'

import Header from './components/Header';
import Footer from './components/Footer';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyDxTnJVMgrW1nMuPo8X2yH6RaV8x0WmX4k",
  authDomain: "mycontactform-bb717.firebaseapp.com",
  projectId: "mycontactform-bb717",
  storageBucket: "mycontactform-bb717.appspot.com",
  messagingSenderId: "437120159943",
  appId: "1:437120159943:web:a54edaaccc5b5e416daee2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})`, height: 'auto', width: '100%' }}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;