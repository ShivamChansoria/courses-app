import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux';
import { store } from './Store/Store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ToastContainer />
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
