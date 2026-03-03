import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form from './pages/Form.jsx'
import Contact from './pages/Contact.jsx'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './pages/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />

  </StrictMode>,
)
