import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { RouterProvider } from 'react-router-dom'
// import routers from './routes'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    {/* <RouterProvider router={routers} /> */}
    <App />

  </StrictMode>,
)
