'use client'

import { useEffect, useRef } from 'react'
import { MIN_DESKTOP_WIDTH } from '@/constants'

const HomeHeight = ({ children }) => {
  const homeRef = useRef(null)

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      if (window.innerWidth < MIN_DESKTOP_WIDTH) {
        const entry = entries[0]
        const height = entry.borderBoxSize[0].blockSize
        document.documentElement.style.setProperty('--home-height', `${height}px`)
        document.documentElement.style.setProperty('--home-opacity', `0.95`)
      }
    })
    if (homeRef.current) {
      observer.observe(homeRef.current)
    }
    return () => {
      observer.disconnect()
      document.documentElement.style.removeProperty('--home-height')
      document.documentElement.style.removeProperty('--home-opacity')
    }
  }, [])

  return <div className="home container" ref={homeRef}>{children}</div>
}

export default HomeHeight