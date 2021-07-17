import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { store } from './store.js';

const render = () => {
  ReactDOM.render(
  <React.StrictMode>
    <App
      state={store.getState()} 
      dispatch={store.dispatch}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
}

store.subscribe(render);
render()
reportWebVitals();
