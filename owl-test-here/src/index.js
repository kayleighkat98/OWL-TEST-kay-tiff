import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import participants from './Store'

ReactDOM.render(<App color='red' participants={participants} />, document.getElementById('root'));