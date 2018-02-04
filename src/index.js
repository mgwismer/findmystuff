import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './components/App';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// let store = createStore(findMyStuff)

render(
  <Provider >
    <App />
  </Provider>,
  document.getElementById('root')
)

// ReactDOM.render(
//   <App />
//   document.getElementById('root')
// )


