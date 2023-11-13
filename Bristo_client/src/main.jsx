import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './page/Router'
import {  HelmetProvider } from 'react-helmet-async';
import Authprovider from './page/privet/Authprovider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Authprovider>

  <HelmetProvider>
  <RouterProvider router={router}>
    </RouterProvider>
  </HelmetProvider>
  
  </Authprovider>
  </React.StrictMode>,
)
