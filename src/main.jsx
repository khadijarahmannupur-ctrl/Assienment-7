import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/Router.jsx'
import { RouterProvider } from 'react-router/dom'
import TimeLineProvider from './context/TimeLineProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimeLineProvider>
      <RouterProvider router={router} />
    </TimeLineProvider>
  </StrictMode>,
)
