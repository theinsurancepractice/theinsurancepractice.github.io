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
import Home from './Home.jsx'
import Contact from './Contact.jsx'
import './App.css'

const FACEBOOK_URL = "https://www.facebook.com/"
const INSTAGRAM_URL = "https://www.instagram.com/"
const MIN_DESKTOP_WIDTH = 1024

const App = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false)                    // Show or hide offcanvas
  const [closingOffcanvas, setClosingOffcanvas] = useState(false)              // Prevents user from clicking on the offcanvas when it is closing
  
  const [showOffcanvasExtension, setShowOffcanvasExtension] = useState(false)  // Show or hide offcanvas-extension
  const [offcanvasExtension, setOffcanvasExtension] = useState('team')         // Selects the extension to show
  
  // Remove visual artifacts between offcanvas-right and offcanvas-left when offcanvas-extension is hidden
  const [offcanvasRightMarginNegative, setOffcanvasRightMarginNegative] = useState(true)

  // Modify the transition speed when switching between extensions
  const [offcanvasExtensionTransitionFast, setOffcanvasExtensionTransitionFast] = useState(false)

  const [showOffcanvas2, setShowOffcanvas2] = useState(false)
  const [closingOffcanvas2, setClosingOffcanvas2] = useState(false)

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
        handleCloseOffcanvas2()
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleShowOffcanvas = () => {
    setShowOffcanvasExtension(false)
    setClosingOffcanvas(false)
    setShowOffcanvas(true)
  }

  const handleCloseOffcanvas = () => {
    const offcanvas = document.querySelector('.offcanvas')
    const handleExitOffcanvas = e => {
      offcanvas.removeEventListener('transitionend', handleExitOffcanvas)
      if (e.propertyName === 'transform' && e.target.classList.contains('hide-offcanvas')) {
        setClosingOffcanvas(false)
      }
    }
    offcanvas.addEventListener('transitionend', handleExitOffcanvas)

    const offcanvasExtension = document.querySelector('.offcanvas-extension')
    const handleExitOffcanvasExtension = e => {
      offcanvasExtension.removeEventListener('transitionend', handleExitOffcanvasExtension)
      if (e.propertyName === 'width' && !e.target.classList.contains('open')) {
        setOffcanvasRightMarginNegative(true)
      }
    }
    offcanvasExtension.addEventListener('transitionend', handleExitOffcanvasExtension)
    
    setOffcanvasExtensionTransitionFast(false)
    setClosingOffcanvas(true)
    setShowOffcanvasExtension(false)
    setShowOffcanvas(false)

    // Alternatively, set a timeout equal to the CSS transition duration
    // setTimeout(() => {
    //   handleExitOffcanvas()
    // }, 150)
  }

  const addOffcanvasExtensionEventListener = type => {
    const offcanvasExtension = document.querySelector('.offcanvas-extension')
    const handleOffcanvasExtensionTransitionend = e => {
      offcanvasExtension.removeEventListener('transitionend', handleOffcanvasExtensionTransitionend)
      if (e.propertyName === 'width' && !e.target.classList.contains('open')) {
        setOffcanvasExtension(type)
        setShowOffcanvasExtension(true)
      }
    }
    offcanvasExtension.addEventListener('transitionend', handleOffcanvasExtensionTransitionend)
  }
  
  const handleShowExtension = type => {
    setOffcanvasRightMarginNegative(false)
    
    // Switch extension
    if (offcanvasExtension !== type && showOffcanvasExtension) { 
      addOffcanvasExtensionEventListener(type)
      setOffcanvasExtensionTransitionFast(true)
      setShowOffcanvasExtension(false)
    }

    // No extension currently open
    else {
      setOffcanvasExtensionTransitionFast(false)
      setOffcanvasExtension(type)
      setShowOffcanvasExtension(true)
    }
  }

  const handleShowOffcanvas2 = () => {
    if (window.innerWidth < MIN_DESKTOP_WIDTH) {
      setClosingOffcanvas2(false)
      setShowOffcanvas2(true)
    }
  }

  const handleCloseOffcanvas2 = () => {
    const offcanvas2 = document.querySelector('.offcanvas2')
    const handleExitOffcanvas2 = e => {
      offcanvas2.removeEventListener('transitionend', handleExitOffcanvas2)
      if (e.propertyName === 'transform' && e.target.classList.contains('hide-offcanvas')) {
        setClosingOffcanvas2(false)
      }
    }
    offcanvas2.addEventListener('transitionend', handleExitOffcanvas2)
    
    setClosingOffcanvas2(true)
    setShowOffcanvas2(false)
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
          <div className="navbar-link">
            <span>Meet Our Team</span>
            <TriangleSvg angle={0} color={"maroon"} />
          </div>
          <div className="navbar-link">
            <span>Services</span>
            <TriangleSvg angle={0} color={"maroon"} />
          </div>
          <NavLink to="/contact-us" end className="navbar-link">
            <span>Contact Us</span>
          </NavLink>
        </div>
        <div className="navbar-right">
          {/* <div className="navbar-location">
            <img src={mapMarker} alt="Map Marker" className="map-marker" />
          </div> */}
          <div className="navbar-consult" onClick={handleShowOffcanvas2}>
            <TriangleSvg angle={0} color={"white"} />
            <span>Consult Us</span>
            <img src={chatBubble} alt="Chat Bubble" className="chat-bubble" />
          </div>
        </div>
      </Navbar>

      <Offcanvas 
        show={true} 
        backdrop={showOffcanvas} 
        onHide={handleCloseOffcanvas} 
        className={`${showOffcanvas ? 'show-offcanvas' : 'hide-offcanvas'}`}
      >
        <div className={`offcanvas-left ${closingOffcanvas ? 'closing' : ''}`}>
          <div>
            <div className="offcanvas-link">
              <span>Home</span>
            </div>
            <div className="offcanvas-divider"></div>
            <div onClick={() => handleShowExtension('team')} className="offcanvas-link">
              <span>Meet Our Team</span>
              <TriangleSvg angle={270} color={"white"} />
            </div>
            <div className="offcanvas-divider"></div>
            <div onClick={() => handleShowExtension('services')} className="offcanvas-link">
              <span>Services</span>
              <TriangleSvg angle={270} color={"white"} />
            </div>
            <div className="offcanvas-divider"></div>
            <div className="offcanvas-link">
              <span>Contact Us</span>
            </div>
          </div>
          <div className="offcanvas-socials">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="offcanvas-icon">
              <FacebookSvg width="1.4rem" height="1.4rem" color="white" />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="offcanvas-icon">
              <InstagramSvg width="1.4rem" height="1.4rem" color="white" />
            </a>
          </div>
        </div>
        <div className={`offcanvas-extension ${showOffcanvasExtension ? 'open' : ''} ${offcanvasExtensionTransitionFast ? 'fast' : ''}`}>
          {offcanvasExtension === "team" 
          ? <div>teamteamteamteamteam</div>
          : <div>services</div>
          }
        </div>
        <div className={`offcanvas-right ${offcanvasRightMarginNegative ? 'margin-negative' : ''}`} onClick={handleCloseOffcanvas}>
          <div className="offcanvas-right-top">
            <XSvg />
          </div>
          <div className="offcanvas-right-bottom"></div>
        </div>
      </Offcanvas>

      <Offcanvas
        show={true}
        bsPrefix="offcanvas2"
        placement="end"
        backdrop={showOffcanvas2} 
        onHide={handleCloseOffcanvas2} 
        className={`${showOffcanvas2 ? 'show-offcanvas' : 'hide-offcanvas'}`}
      >
        <div onClick={handleCloseOffcanvas2} className="offcanvas2-left">
          <div className="offcanvas2-left-top">
            <XSvg />
          </div>
          <div className="offcanvas2-left-bottom"></div>
        </div>
        <div className={`offcanvas2-right ${closingOffcanvas2 ? 'closing' : ''}`}>
          <div className="offcanvas2-consult">Consult Us</div>
          <div className="offcanvas2-socials">
            <span>Connect with us on:</span>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
              <FacebookSvg width="2rem" height="2rem" color="maroon" />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <InstagramSvg width="2rem" height="2rem" color="maroon" />
            </a>
          </div>
        </div>
      </Offcanvas>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
