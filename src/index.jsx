import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import HomePage from './components';
// import Inputindex from './components/inputIndex';
import IndexReducer from './components/useReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Inputindex /> */}
    {/* <HomePage /> */}
    <IndexReducer />
  </React.StrictMode>
);