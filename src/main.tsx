import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChromeGrid } from './components/ui/chrome-grid'

const rootEl = document.getElementById('chrome-grid-root')
if (rootEl) {
  createRoot(rootEl).render(
    <React.StrictMode>
      <ChromeGrid />
    </React.StrictMode>
  )
}
