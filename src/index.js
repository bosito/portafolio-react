import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//import 'atropos/css'
import 'animate.css';

const reactElement = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  reactElement
);