import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from '../src/Header/Header'
import Footer from  '../src/Footer/Footer'
import Home from '../src/Pages/Home'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>,)