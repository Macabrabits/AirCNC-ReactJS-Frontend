import React, { useState } from 'react';
import './App.css';
import './services/api'

import logo from './assets/logo.svg'
import api from './services/api';

function App() {
  const [email, setEmail] = useState('')


  async function handleSubmit(event){
    event.preventDefault()

    const response = await api.post('/sessions', { email })
    const { _id } = response.data

    localStorage.setItem('user', _id)
   
    console.log(email)
    
  }

  return (
    <div className="container">
      <img src={logo} alt="aircnc"/>
      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e 
          encontre <strong>talentos</strong> para seu negócio!
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input type="email" id="email" placeholder="Seu melhor e-mail"
          onChange={event => setEmail(event.target.value)}></input>
          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
