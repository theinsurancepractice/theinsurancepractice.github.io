import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router"
import './index.css'
import App from './App.jsx'
import RemoveTrailingSlash from './RemoveTrailingSlash.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RemoveTrailingSlash />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
