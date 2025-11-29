"use client";

import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import  { Application } from '@splinetool/runtime'

export function ParticleSphere() {
  const [splineApp, setSplineApp] = useState(null)

  function onLoad(spline) {
    console.log('Spline loaded, trying setZoom...')
    setSplineApp(spline)
  }

  // Remove the zoom adjustment logic
  useEffect(() => {
    const handleResize = () => {
      // No zoom adjustment logic
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Adjust to check if splineApp supports the required methods
  useEffect(() => {
    if (splineApp && typeof splineApp.setZoom === 'function') {
      splineApp.setZoom(1); // Set a fixed zoom level
    }

    // Check if splineApp supports event handling
    if (splineApp && typeof splineApp.addEventListener === 'function') {
      splineApp.addEventListener('mouseWheel', (e) => e.preventDefault()); // Prevent zooming
      splineApp.addEventListener('hover', (e) => e.preventDefault()); // Disable hover effects
    }
  }, [splineApp]);

  return (
    <Spline 
      scene="/scene-f0f0f0.splinecode"
      onLoad={onLoad}
      style={{ width: '100%', height: '100%' }}
    />
  )
}