import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App/components/App.jsx';
import {Provider} from 'react-redux'
import {configureStore } from '@reduxjs/toolkit'

//const store = configureStore({reducer: undefined})

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  document.getElementById('root')
);
