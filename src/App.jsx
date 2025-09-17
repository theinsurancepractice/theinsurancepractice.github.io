import { useState } from 'react'
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
  const [showOffcanvas, setShowOffcanvas] = useState(false)
  const [showOffcanvasExtension, setShowOffcanvasExtension] = useState(false)

  const [offcanvasWidth, setOffcanvasWidth] = useState('short')
  const [offcanvasExtension, setOffcanvasExtension] = useState('')
  const [offcanvasRightMargin, setOffcanvasRightMargin] = useState('offcanvas-right-margin-negative')
  const [offcanvasTransition, setOffcanvasTransition] = useState('offcanvas-transition-default')

  const handleShowOffcanvas = () => setShowOffcanvas(true)
  const handleCloseOffcanvas = () => setShowOffcanvas(false)


  const setOffcanvasLeftFlexBasis = () => {
    const offcanvasLeft = document.querySelector('.offcanvas-left')
    const currentWidth = offcanvasLeft.getBoundingClientRect().width
    offcanvasLeft.style.flexBasis = currentWidth + 'px'
  }

  const resetOffcanvasLeftFlexBasis = () => {
    const offcanvasLeft = document.querySelector('.offcanvas-left')
    offcanvasLeft.style.flexBasis = 'calc(100% - 3rem)'
  }

  const addOffcanvasEventListener = type => {
    const offcanvas = document.querySelector('.offcanvas')
    const handleOffcanvasTransitionend = e => {
      offcanvas.removeEventListener('transitionend', handleOffcanvasTransitionend)
      if (e.propertyName === 'width' && e.target.classList.contains('short')) {
        setOffcanvasExtension(type)
        setOffcanvasWidth('long')
      }
    }
    offcanvas.addEventListener('transitionend', handleOffcanvasTransitionend)
  }
  
  const handleShowExtension = type => {
    setOffcanvasLeftFlexBasis()
    setOffcanvasRightMargin('offcanvas-right-margin-zero')
    setShowOffcanvasExtension(true)
    
    // Switch extension
    if (offcanvasExtension !== '' && offcanvasExtension !== type) { 
      addOffcanvasEventListener(type)
      setOffcanvasTransition('offcanvas-transition-fast')
      setOffcanvasWidth('short')
    }

    // No extension currently open
    else {
      setOffcanvasTransition('offcanvas-transition-default')
      setOffcanvasExtension(type)
      setOffcanvasWidth('long')
    }
  }

  const handleExit = () => {
    setShowOffcanvasExtension(false)
    setOffcanvasWidth('short')
    setOffcanvasExtension('')
    setOffcanvasRightMargin('offcanvas-right-margin-negative')
    resetOffcanvasLeftFlexBasis()
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
            Consult Us
            <img src={chatBubble} alt="chat Bubble" className="chat-bubble" />
          </div>
        </div>
      </Navbar>

      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} onExited={handleExit} className={`offcanvas ${offcanvasWidth} ${offcanvasTransition}`}>
        <div className="offcanvas-left">
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
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FacebookSvg />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="offcanvas-instagram">
              <InstagramSvg />
            </a>
          </div>
        </div>
        {showOffcanvasExtension && <div className="offcanvas-extension"></div>}
        <div className={`offcanvas-extension-content ${offcanvasExtension === 'team' ? 'open' : ''}`}>teamteamteamteamteam</div>
        <div className={`offcanvas-extension-content ${offcanvasExtension === 'services' ? 'open' : ''}`}>services</div>
        <div className={`offcanvas-right ${offcanvasRightMargin}`} onClick={handleCloseOffcanvas}>
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
