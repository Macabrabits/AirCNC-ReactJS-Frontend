import React from 'react';
import './App.css';
import './services/api'

import logo from './assets/logo.svg'

import Routes from './routes'


function App() {
  return (
    <div className="container">
      <img src={logo} alt="aircnc"/>
      <div className="content">
        <Routes />
        
      </div>
    </div>
  );
}

export default App;
