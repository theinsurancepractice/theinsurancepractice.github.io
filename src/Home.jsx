import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router'
import { MIN_DESKTOP_WIDTH } from './constants'
import img from  './assets/administrative-staff.jpg'
import TriangleSvg from './svg/TriangleSvg'

const Home = () => {
  const homeRef = useRef(null)
  const homeImageBackgroundRef = useRef(null)

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      const entry = entries[0]
      if (homeImageBackgroundRef.current) {
        if (window.innerWidth < MIN_DESKTOP_WIDTH) {
          const height = entry.borderBoxSize[0].blockSize
          homeImageBackgroundRef.current.style.background = `linear-gradient(to bottom, rgba(255, 255, 255, 0.95) ${height}px, transparent)`
        } else {
          homeImageBackgroundRef.current.style.background = `linear-gradient(to right, rgba(255, 255, 255, 0.95) 50%, transparent)`
        }
      }
    })
    if (homeRef.current) {
      observer.observe(homeRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <img src={img} alt="home-image" className="home-image" />
      <div className="home-image-background" ref={homeImageBackgroundRef}></div>
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