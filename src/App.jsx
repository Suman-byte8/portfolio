import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Hero from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import Contact from './pages/Contact'
import PriceSheet from './components/PriceSheet'

const App = () => {
  return (
    <BrowserRouter>
      <div className='w-full flex flex-col items-center justify-center px-6 py-4'>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<PriceSheet />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App