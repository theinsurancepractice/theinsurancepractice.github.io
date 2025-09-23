import { useState, useEffect } from 'react'
import { Routes, Route, NavLink } from "react-router"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Offcanvas from 'react-bootstrap/Offcanvas'
import mapMarker from './assets/map-marker.png'
import chatBubble from './assets/chat-bubble.png'
import HamburgerSvg from './svg/HamburgerSvg.jsx'
import FacebookSvg from './svg/FacebookSvg.jsx'
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
  const [showOffcanvas, setShowOffcanvas] = useState(false)                              // Show or hide offcanvas
  const [showOffcanvasProducts, setShowOffcanvasProducts] = useState(false)              // Show or hide offcanvas products
  const [offcanvasProductsTransition, setOffcanvasProductsTransition] = useState(false)  // Turn on or off transition for offcanvas products
  const [showOffcanvasServices, setShowOffcanvasServices] = useState(false)              // Show or hide offcanvas services
  const [offcanvasServicesTransition, setOffcanvasServicesTransition] = useState(false)  // Turn on or off transition for offcanvas services

  // Close offcanvas if window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MIN_DESKTOP_WIDTH) {
        handleCloseOffcanvas()
      }
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
      <Navbar expand="lg" className="navbar">
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
          <div className="navbar-link">
            Products
            <TriangleSvg angle={0} color={"#238dc1"} />
          </div>
          <NavLink to="/our-team" end className="navbar-link">
            Our Team
          </NavLink>
          <div className="navbar-link">
            Services
            <TriangleSvg angle={0} color={"#238dc1"} />
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
          {/* <div className="navbar-location">
            <img src={mapMarker} alt="Map Marker" className="map-marker" />
          </div> */}
          <NavLink to="/contact-us" end className="navbar-contact">
            Contact Us
            <img src={chatBubble} alt="Chat Bubble" className="chat-bubble" />
          </NavLink>
        </div>
      </Navbar>

      <Offcanvas 
        show={true} 
        backdrop={showOffcanvas} 
        onHide={handleCloseOffcanvas} 
        className={`${showOffcanvas ? 'show-offcanvas' : 'hide-offcanvas'}`}
      >
        <div className="offcanvas-left">
          <div>
            <NavLink to="/" end onClick={handleCloseOffcanvas} className="offcanvas-link">
              Home
            </NavLink>
            <div className="offcanvas-divider"></div>
            <NavLink to="/about-us" end onClick={handleCloseOffcanvas} className="offcanvas-link">
              About Us
            </NavLink>
            <div className="offcanvas-divider"></div>
            <div onClick={handleToggleOffcanvasProducts} className={`offcanvas-link top ${showOffcanvasProducts ? 'show' : ''}`}>
              Products
              <TriangleSvg angle={showOffcanvasProducts ? 180 : 0} color={"white"} />
            </div>
            <div className={`offcanvas-sublinks products ${offcanvasProductsTransition ? 'transition' : ''}`}>
              <NavLink to="/products/personal-insurance" end onClick={handleCloseOffcanvas} className="offcanvas-sublink">
                Personal Insurance
              </NavLink>
              <NavLink to="/products/company-insurance" end onClick={handleCloseOffcanvas} className="offcanvas-sublink">
                Company Insurance
              </NavLink>
            </div>
            <div onClick={showOffcanvasProducts ? undefined : handleToggleOffcanvasProducts} className={`offcanvas-link-bottom ${showOffcanvasProducts ? 'show' : ''}`}></div>
            <div className="offcanvas-divider"></div>
            <NavLink to="/our-team" end onClick={handleCloseOffcanvas} className="offcanvas-link">
              Our Team
            </NavLink>
            <div className="offcanvas-divider"></div>
            <div onClick={handleToggleOffcanvasServices} className={`offcanvas-link top ${showOffcanvasServices ? 'show' : ''}`}>
              Services
              <TriangleSvg angle={showOffcanvasServices ? 180 : 0} color={"white"} />
            </div>
            <div className={`offcanvas-sublinks services ${offcanvasServicesTransition ? 'transition' : ''}`}>
              <NavLink to="/services/existing-businesses" end onClick={handleCloseOffcanvas} className="offcanvas-sublink">
                Existing Businesses
              </NavLink>
              <NavLink to="/services/new-startups" end onClick={handleCloseOffcanvas} className="offcanvas-sublink">
                New Startups
              </NavLink>
            </div>
            <div onClick={showOffcanvasServices ? undefined : handleToggleOffcanvasServices} className={`offcanvas-link-bottom ${showOffcanvasServices ? 'show' : ''}`}></div>
            <div className="offcanvas-divider"></div>
            <NavLink to="/our-partners" end onClick={handleCloseOffcanvas} className="offcanvas-link">
              Our Partners
            </NavLink>
            <div className="offcanvas-divider"></div>
            <NavLink to="/careers" end onClick={handleCloseOffcanvas} className="offcanvas-link">
              Careers
            </NavLink>
            <div className="offcanvas-divider"></div>
            <NavLink to="/activities" end onClick={handleCloseOffcanvas} className="offcanvas-link">
              Activities
            </NavLink>
          </div>
          <div className="offcanvas-socials">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
              <FacebookSvg width="1.4rem" height="1.4rem" color="white" />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="offcanvas-icon">
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
      </Offcanvas>
      
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
    </>
  )
}

export default App
