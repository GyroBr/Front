import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Teste from './pages/Teste/Teste'
import Home from './pages/Home/Home'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </StrictMode>,
)