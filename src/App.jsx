import { useState, useEffect } from 'react'
import { Routes, Route, NavLink, useLocation } from "react-router"
import chatBubble from './assets/chat-bubble.png'
import mapMarker from './assets/map-marker.png'
import FacebookSvg from './svg/FacebookSvg.jsx'
import HamburgerSvg from './svg/HamburgerSvg.jsx'
import InstagramSvg from './svg/InstagramSvg.jsx'
import TriangleSvg from './svg/TriangleSvg.jsx'
import XSvg from './svg/XSvg.jsx'
import About from './About.jsx'
import Activities from './Activities.jsx'
import Careers from './Careers.jsx'
import CompanyInsurance from './CompanyInsurance.jsx'
import Contact from './Contact.jsx'
import ExistingBusinesses from './ExistingBusinesses.jsx'
import Home from './Home.jsx'
import NewStartups from './NewStartups.jsx'
import Partners from './Partners.jsx'
import PersonalInsurance from './PersonalInsurance.jsx'
import Team from './Team.jsx'
import './App.css'

const FACEBOOK_URL = "https://www.facebook.com/"
const INSTAGRAM_URL = "https://www.instagram.com/"
const MIN_DESKTOP_WIDTH = 1024

const App = () => {
  const location = useLocation()
  const [navbarProductsTriangleAngle, setNavbarProductsTriangleAngle] = useState(0)
  const [navbarServicesTriangleAngle, setNavbarServicesTriangleAngle] = useState(0)
  
  const [showOffcanvas, setShowOffcanvas] = useState(false)                              // Show or hide offcanvas
  const [showOffcanvasProducts, setShowOffcanvasProducts] = useState(false)              // Show or hide offcanvas products
  const [offcanvasProductsTransition, setOffcanvasProductsTransition] = useState(false)  // Turn on or off transition for offcanvas products
  const [showOffcanvasServices, setShowOffcanvasServices] = useState(false)              // Show or hide offcanvas services
  const [offcanvasServicesTransition, setOffcanvasServicesTransition] = useState(false)  // Turn on or off transition for offcanvas services
  const [offcanvasTabIndex, setOffcanvasTabIndex] = useState(0)                          // Set to -1 to disable keyboard navigation when vw >= 1024px
  
  // Close offcanvas if window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MIN_DESKTOP_WIDTH) {
        handleCloseOffcanvas()
        setOffcanvasTabIndex(-1)
      } else {
        setOffcanvasTabIndex(0)
      }
    }
    if (window.innerWidth >= MIN_DESKTOP_WIDTH) {
      setOffcanvasTabIndex(-1)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleResizeOffcanvasProducts = () => {
      const offcanvasSublinks = document.querySelector('.offcanvas-sublinks.products')
      if (showOffcanvasProducts) {
        offcanvasSublinks.style.maxHeight = offcanvasSublinks.scrollHeight + 'px'
      }
    }
    window.addEventListener('resize', handleResizeOffcanvasProducts)
    return () => window.removeEventListener('resize', handleResizeOffcanvasProducts)
  }, [showOffcanvasProducts])

  useEffect(() => {
    const handleResizeOffcanvasServices = () => {
      const offcanvasSublinks = document.querySelector('.offcanvas-sublinks.services')
      if (showOffcanvasServices) {
        offcanvasSublinks.style.maxHeight = offcanvasSublinks.scrollHeight + 'px'
      }
    }
    window.addEventListener('resize', handleResizeOffcanvasServices)
    return () => window.removeEventListener('resize', handleResizeOffcanvasServices)
  }, [showOffcanvasServices])

  const showNavbarSublinksProducts = () => {
    const navbarSublinks = document.querySelector('.navbar-sublinks.products')
    navbarSublinks.style.maxHeight = navbarSublinks.scrollHeight + 'px'
    setNavbarProductsTriangleAngle(180)
  }

  const hideNavbarSublinksProducts = () => {
    const navbarSublinks = document.querySelector('.navbar-sublinks.products')
    navbarSublinks.style.maxHeight = '0px'
    setNavbarProductsTriangleAngle(0)
  }

  const showNavbarSublinksServices = () => {
    const navbarSublinks = document.querySelector('.navbar-sublinks.services')
    navbarSublinks.style.maxHeight = navbarSublinks.scrollHeight + 'px'
    setNavbarServicesTriangleAngle(180)
  }

  const hideNavbarSublinksServices = () => {
    const navbarSublinks = document.querySelector('.navbar-sublinks.services')
    navbarSublinks.style.maxHeight = '0px'
    setNavbarServicesTriangleAngle(0)
  }

  const handleShowOffcanvas = () => setShowOffcanvas(true)
  const handleCloseOffcanvas = () => setShowOffcanvas(false)

  const handleToggleOffcanvasProducts = () => {
    const offcanvasSublinks = document.querySelector('.offcanvas-sublinks.products')
    const handleTransitionEnd = () => {
      offcanvasSublinks.removeEventListener('transitionend', handleTransitionEnd)
      setOffcanvasProductsTransition(false)
    }
    offcanvasSublinks.addEventListener('transitionend', handleTransitionEnd)
    if (showOffcanvasProducts) {
      offcanvasSublinks.style.maxHeight = '0px'
    } else {
      offcanvasSublinks.style.maxHeight = offcanvasSublinks.scrollHeight + 'px'
    }
    setOffcanvasProductsTransition(true)
    setShowOffcanvasProducts(!showOffcanvasProducts)
  }
  
  const handleToggleOffcanvasServices = () => {
    const offcanvasSublinks = document.querySelector('.offcanvas-sublinks.services')
    const handleTransitionEnd = () => {
      offcanvasSublinks.removeEventListener('transitionend', handleTransitionEnd)
      setOffcanvasServicesTransition(false)
    }
    offcanvasSublinks.addEventListener('transitionend', handleTransitionEnd)
    if (showOffcanvasServices) {
      offcanvasSublinks.style.maxHeight = '0px'
    } else {
      offcanvasSublinks.style.maxHeight = offcanvasSublinks.scrollHeight + 'px'
    }
    setOffcanvasServicesTransition(true)
    setShowOffcanvasServices(!showOffcanvasServices)
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="offcanvas-button" onClick={handleShowOffcanvas}>
            <HamburgerSvg />
          </div>
          <NavLink to="/" end className="navbar-link">
            Home
          </NavLink>
          <NavLink to="/about-us" end className="navbar-link">
            About Us
          </NavLink>
          <div 
            onMouseEnter={showNavbarSublinksProducts}
            onFocus={showNavbarSublinksProducts}
            onMouseLeave={hideNavbarSublinksProducts}
            onBlur={hideNavbarSublinksProducts}
            className={`navbar-link ${location.pathname === '/products/personal-insurance' || location.pathname === '/products/company-insurance' ? 'active' : ''}`}
          >
            Products
            <TriangleSvg angle={navbarProductsTriangleAngle} color={"#238dc1"} />
            <div className="navbar-sublinks products">
              <div className="navbar-sublinks-border">
                <NavLink to="/products/personal-insurance" end className="navbar-sublink">
                  Personal Insurance
                </NavLink>
                <div className="navbar-sublink-divider"></div>
                <NavLink to="/products/company-insurance" end className="navbar-sublink">
                  Company Insurance
                </NavLink>
              </div>
            </div>
          </div>
          <NavLink to="/our-team" end className="navbar-link">
            Our Team
          </NavLink>
          <div 
            onMouseEnter={showNavbarSublinksServices}
            onFocus={showNavbarSublinksServices}
            onMouseLeave={hideNavbarSublinksServices}
            onBlur={hideNavbarSublinksServices}
            className={`navbar-link ${location.pathname === '/services/existing-businesses' || location.pathname === '/services/new-startups' ? 'active' : ''}`}
          >
            Services
            <TriangleSvg angle={navbarServicesTriangleAngle} color={"#238dc1"} />
            <div className="navbar-sublinks services">
              <div className="navbar-sublinks-border">
                <NavLink to="/services/existing-businesses" end className="navbar-sublink">
                  Existing Businesses
                </NavLink>
                <div className="navbar-sublink-divider"></div>
                <NavLink to="/services/new-startups" end className="navbar-sublink">
                  New Startups
                </NavLink>
              </div>
            </div>
          </div>
          <NavLink to="/our-partners" end className="navbar-link">
            Our Partners
          </NavLink>
          <NavLink to="/careers" end className="navbar-link">
            Careers
          </NavLink>
          <NavLink to="/activities" end className="navbar-link">
            Activities
          </NavLink>
        </div>
        <div className="navbar-right">
          <NavLink to="/contact-us" end className="navbar-contact">
            Contact Us
            <img src={chatBubble} alt="Chat Bubble" className="chat-bubble" />
          </NavLink>
          {/* <div className="navbar-location">
            <img src={mapMarker} alt="Map Marker" className="map-marker" />
          </div> */}
        </div>
      </nav>

      {showOffcanvas && <div onClick={handleCloseOffcanvas} className="offcanvas-backdrop"></div>}

      <nav className={`offcanvas ${showOffcanvas ? 'show' : ''}`}>
        <div className="offcanvas-left">
          <div>
            <NavLink to="/" end onClick={handleCloseOffcanvas} tabIndex={offcanvasTabIndex} className="offcanvas-link">
              Home
            </NavLink>
            <div className="offcanvas-divider"></div>
            <NavLink to="/about-us" end onClick={handleCloseOffcanvas} tabIndex={offcanvasTabIndex} className="offcanvas-link">
              About Us
            </NavLink>
            <div className="offcanvas-divider"></div>
            <div onClick={handleToggleOffcanvasProducts} className={`offcanvas-link top ${showOffcanvasProducts ? 'show' : ''}`}>
              Products
              <TriangleSvg angle={showOffcanvasProducts ? 180 : 0} color={"white"} />
            </div>
            <div className={`offcanvas-sublinks products ${offcanvasProductsTransition ? 'transition' : ''}`}>
              <NavLink to="/products/personal-insurance" end onClick={handleCloseOffcanvas} tabIndex={offcanvasTabIndex} className="offcanvas-sublink">
                Personal Insurance
              </NavLink>
              <NavLink to="/products/company-insurance" end onClick={handleCloseOffcanvas} tabIndex={offcanvasTabIndex} className="offcanvas-sublink">
                Company Insurance
              </NavLink>
            </div>
            <div onClick={showOffcanvasProducts ? undefined : handleToggleOffcanvasProducts} className={`offcanvas-link-bottom ${showOffcanvasProducts ? 'show' : ''}`}></div>
            <div className="offcanvas-divider"></div>
            <NavLink to="/our-team" end onClick={handleCloseOffcanvas} tabIndex={offcanvasTabIndex} className="offcanvas-link">
              Our Team
            </NavLink>
            <div className="offcanvas-divider"></div>
            <div onClick={handleToggleOffcanvasServices} className={`offcanvas-link top ${showOffcanvasServices ? 'show' : ''}`}>
              Services
              <TriangleSvg angle={showOffcanvasServices ? 180 : 0} color={"white"} />
            </div>
            <div className={`offcanvas-sublinks services ${offcanvasServicesTransition ? 'transition' : ''}`}>
              <NavLink to="/services/existing-businesses" end onClick={handleCloseOffcanvas} tabIndex={offcanvasTabIndex} className="offcanvas-sublink">
                Existing Businesses
              </NavLink>
              <NavLink to="/services/new-startups" end onClick={handleCloseOffcanvas} tabIndex={offcanvasTabIndex} className="offcanvas-sublink">
                New Startups
              </NavLink>
            </div>
            <div onClick={showOffcanvasServices ? undefined : handleToggleOffcanvasServices} className={`offcanvas-link-bottom ${showOffcanvasServices ? 'show' : ''}`}></div>
            <div className="offcanvas-divider"></div>
            <NavLink to="/our-partners" end onClick={handleCloseOffcanvas} tabIndex={offcanvasTabIndex} className="offcanvas-link">
              Our Partners
            </NavLink>
            <div className="offcanvas-divider"></div>
            <NavLink to="/careers" end onClick={handleCloseOffcanvas} tabIndex={offcanvasTabIndex} className="offcanvas-link">
              Careers
            </NavLink>
            <div className="offcanvas-divider"></div>
            <NavLink to="/activities" end onClick={handleCloseOffcanvas} tabIndex={offcanvasTabIndex} className="offcanvas-link">
              Activities
            </NavLink>
          </div>
          <div className="offcanvas-socials">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" tabIndex={offcanvasTabIndex}>
              <FacebookSvg width="1.4rem" height="1.4rem" color="white" />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" tabIndex={offcanvasTabIndex} className="offcanvas-icon">
              <InstagramSvg width="1.4rem" height="1.4rem" color="white" />
            </a>
          </div>
        </div>
        <div className="offcanvas-right" onClick={handleCloseOffcanvas}>
          <div className="offcanvas-right-top">
            <XSvg />
          </div>
          <div className="offcanvas-right-bottom"></div>
        </div>
      </nav>
    
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="products/personal-insurance" element={<PersonalInsurance />} />
          <Route path="products/company-insurance" element={<CompanyInsurance />} />
          <Route path="our-team" element={<Team />} />
          <Route path="services/existing-businesses" element={<ExistingBusinesses />} />
          <Route path="services/new-startups" element={<NewStartups />} />
          <Route path="our-partners" element={<Partners />} />
          <Route path="careers" element={<Careers />} />
          <Route path="activities" element={<Activities />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </>
  )
}

export default App
