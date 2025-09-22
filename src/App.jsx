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
import Contact from './Contact.jsx'
import Home from './Home.jsx'
import Partners from './Partners.jsx'
import Team from './Team.jsx'
import './App.css'

const FACEBOOK_URL = "https://www.facebook.com/"
const INSTAGRAM_URL = "https://www.instagram.com/"
const MIN_DESKTOP_WIDTH = 1024

const App = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false)                    // Show or hide offcanvas

  // useEffect(() => {
  //   window.addEventListener('resize', handleCloseOffcanvas)
  //   return () => {
  //     window.removeEventListener('resize', handleCloseOffcanvas)
  //   }
  // }, [])

  // Close offcanvas if window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MIN_DESKTOP_WIDTH) {
        handleCloseOffcanvas()
        // handleCloseOffcanvas2()
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleShowOffcanvas = () => {
    setShowOffcanvas(true)
  }

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false)
  }

  return (
    <>
      <Navbar expand="lg" className="navbar">
        <div className="navbar-left">
          <div className="offcanvas-button" onClick={handleShowOffcanvas}>
            <HamburgerSvg />
          </div>
          <NavLink to="/" end className="navbar-link">
            <span>Home</span>
          </NavLink>
          <NavLink to="/about-us" end className="navbar-link">
            <span>About Us</span>
          </NavLink>
          <div className="navbar-link">
            <span>Products</span>
            <TriangleSvg angle={0} color={"#238dc1"} />
          </div>
          <NavLink to="/our-team" end className="navbar-link">
            <span>Our Team</span>
          </NavLink>
          <div className="navbar-link">
            <span>Services</span>
            <TriangleSvg angle={0} color={"#238dc1"} />
          </div>
          <NavLink to="/our-partners" end className="navbar-link">
            <span>Our Partners</span>
          </NavLink>
          <NavLink to="/careers" end className="navbar-link">
            <span>Careers</span>
          </NavLink>
          <NavLink to="/activities" end className="navbar-link">
            <span>Activities</span>
          </NavLink>
        </div>
        <div className="navbar-right">
          {/* <div className="navbar-location">
            <img src={mapMarker} alt="Map Marker" className="map-marker" />
          </div> */}
          <NavLink to="/contact-us" end className="navbar-consult">
            <span>Contact Us</span>
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
              <span>Home</span>
            </NavLink>
            <div className="offcanvas-divider"></div>
            <NavLink to="/about-us" end onClick={handleCloseOffcanvas} className="offcanvas-link">
              <span>About Us</span>
            </NavLink>
            <div className="offcanvas-divider"></div>
            <div onClick={() => {}} className="offcanvas-link">
              <span>Products</span>
              <TriangleSvg angle={0} color={"white"} />
            </div>
            <div className="offcanvas-divider"></div>
            <NavLink to="/our-team" end onClick={handleCloseOffcanvas} className="offcanvas-link">
              <span>Our Team</span>
            </NavLink>
            <div className="offcanvas-divider"></div>
            <div onClick={() => {}} className="offcanvas-link">
              <span>Services</span>
              <TriangleSvg angle={0} color={"white"} />
            </div>
            <div className="offcanvas-divider"></div>
            <NavLink to="/our-partners" end onClick={handleCloseOffcanvas} className="offcanvas-link">
              <span>Our Partners</span>
            </NavLink>
            <div className="offcanvas-divider"></div>
            <NavLink to="/careers" end onClick={handleCloseOffcanvas} className="offcanvas-link">
              <span>Careers</span>
            </NavLink>
            <div className="offcanvas-divider"></div>
            <NavLink to="/activities" end onClick={handleCloseOffcanvas} className="offcanvas-link">
              <span>Activities</span>
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
        <Route path="/about-us" element={<About />} />
        <Route path="/our-team" element={<Team />} />
        <Route path="/our-partners" element={<Partners />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
