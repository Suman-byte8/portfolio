import React from 'react'
import { useLocation } from 'react-router-dom'

const PageTransition = ({ children }) => {
  const location = useLocation()
  
  return (
    <div 
      data-barba="container"
      data-barba-namespace={location.pathname}
    >
      <div className="page-wrapper">
        {children}
      </div>
      <div className="loading-screen"></div>
    </div>
  )
}

export default PageTransition