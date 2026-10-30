import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import HuntApp from './HuntApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HuntApp />
  </StrictMode>,
)
