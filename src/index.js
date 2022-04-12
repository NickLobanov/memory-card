import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom'

const container = document.getElementById('root')
const root = ReactDom.createRoot(container)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)


