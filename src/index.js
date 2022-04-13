import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom'
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux';

const container = document.getElementById('root')
const root = ReactDom.createRoot(container)

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
  
const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(rootReducer, enhancer)


root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)


