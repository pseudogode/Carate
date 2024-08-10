import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/Home.tsx'
import Market from './pages/market/market.tsx'
import Verify from './pages/verify/verify.tsx'
import Contacts from './pages/contacts/contacts.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='market' element={<Market/>}/>
          <Route path='verify' element={<Verify/>}/>
          <Route path='contacts' element={<Contacts/>}/>
        </Route>
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
