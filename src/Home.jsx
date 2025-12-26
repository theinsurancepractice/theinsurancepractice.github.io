import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router'
import { MIN_DESKTOP_WIDTH } from './constants'
import TriangleSvg from './svg/TriangleSvg'

const Home = () => {
  const homeRef = useRef(null)

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      if (window.innerWidth < MIN_DESKTOP_WIDTH) {
        const entry = entries[0]
        const height = entry.borderBoxSize[0].blockSize
        document.documentElement.style.setProperty('--home-height', `${height}px`)
      }
    })
    if (homeRef.current) {
      observer.observe(homeRef.current)
    }
    return () => {
      observer.disconnect()
      document.documentElement.style.removeProperty('--home-height')
    }
  }, [])

  return (
    <>
      <div className="home container" ref={homeRef}>
        <h1>
          <span className="home-your-peace">Your Peace,</span>{' '}
          <span className="home-we-mind">We Mind</span>
        </h1>
        <p className="home-description">In an unpredictable world, the right insurance protects not just your wealth, but your family, your business, and everything you've worked so hard to build. From consultation to claims, we are your complete, one-stop insurance solution under a single trusted roof.</p>
      </div>
      <div className="home-enquire-container container">
        <NavLink to="/contact-us" end className="home-enquire">
          Enquire Now
          <TriangleSvg angle={270} color="white"/>
        </NavLink>
      </div>
    </>
  )
}

export default Home