import React, { StrictMode } from 'react'
import ReactDOM ,{ createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
 import AuthProvider from './context/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
//    <App />
//    </AuthProvider>
  </React.StrictMode>,
)
