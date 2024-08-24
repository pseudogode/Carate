import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/Home.tsx'
import Market from './pages/market/market.tsx'
import Order from './pages/order/order.tsx'
import Contacts from './pages/contacts/contacts.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='market' element={<Market/>}/>
          <Route path='order' element={<Order/>}/>
          <Route path='contacts' element={<Contacts/>}/>
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
