import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

// Importing the Header component
import Header from './containers/Header/Header';

import router from "./index";

// Importing the global styles
import './styles/global.scss';

createRoot(document.getElementById('root')!).render(
  <>
    <Header />
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </>,
)
