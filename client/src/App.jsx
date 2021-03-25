import React from 'react';
import './App.css';

import background from './assets/images/BackgroundImage.png'

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})`, height: 'auto', width: '100%' }}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;