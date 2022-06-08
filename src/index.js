import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import './index.css';

async function getQuote() {
  let message = await axios.get('https://api.kanye.rest/')
  return message.data.quote;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  App()
);

function App() {
  
  return (
    <div>
      <h1>Kanye West quotes</h1>
      <h2>Kanye message: {}</h2>
    </div>
  )
}
