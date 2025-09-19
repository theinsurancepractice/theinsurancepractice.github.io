import { useState, useEffect } from 'react'
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
import './App.css'

const App = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false)                    // Show or hide offcanvas
  const [closingOffcanvas, setClosingOffcanvas] = useState(false)              // Prevents user from clicking on the offcanvas when it is closing
  
  const [showOffcanvasExtension, setShowOffcanvasExtension] = useState(false)  // Show or hide offcanvas-extension
  const [offcanvasExtension, setOffcanvasExtension] = useState('team')         // Selects the extension to show
  
  // Remove visual artifacts between offcanvas-right and offcanvas-left when offcanvas-extension is hidden
  const [offcanvasRightMarginNegative, setOffcanvasRightMarginNegative] = useState(true)

  // Modify the transition speed when switching between extensions
  const [offcanvasExtensionTransitionFast, setOffcanvasExtensionTransitionFast] = useState(false)

  // useEffect(() => {
  //   window.addEventListener('resize', handleCloseOffcanvas)
  //   return () => {
  //     window.removeEventListener('resize', handleCloseOffcanvas)
  //   }
  // }, [])

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

  return (
    <>
      <Navbar expand="lg" className="navbar">
        <div className="navbar-left">
          <div className="offcanvas-button" onClick={handleShowOffcanvas}>
            <HamburgerSvg />
          </div>
        </div>
        <div className="navbar-right">
          {/* <div className="navbar-location">
            <img src={mapMarker} alt="Map Marker" className="map-marker" />
          </div> */}
          <div className="navbar-consult">
            <span>Consult Us</span>
            <img src={chatBubble} alt="chat Bubble" className="chat-bubble" />
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
              <TriangleSvg />
            </div>
            <div className="offcanvas-divider"></div>
            <div onClick={() => handleShowExtension('services')} className="offcanvas-link">
              <span>Services</span>
              <TriangleSvg />
            </div>
            <div className="offcanvas-divider"></div>
            <div className="offcanvas-link">
              <span>Contact Us</span>
            </div>
          </div>
          <div className="offcanvas-socials">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="offcanvas-icon">
              <FacebookSvg />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="offcanvas-icon">
              <InstagramSvg />
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

      <div>Your Insurance needs?</div>
      <div>We've got you covered</div>
    </>
  )
}

export default App
