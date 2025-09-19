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
  const [showOffcanvas, setShowOffcanvas] = useState(false)                   // Show or hide the offcanvas
  const [closingOffcanvas, setClosingOffcanvas] = useState(false)             // Prevents user from clicking on the offcanvas when it is closing
  const [offcanvasWidth, setOffcanvasWidth] = useState('short')               // Change the length of the offcanvas
  const [offcanvasExtension, setOffcanvasExtension] = useState('')            // Selects the extension to show
  
  // Remove visual artifacts between offcanvas-right and offcanvas-left when offcanvasWidth is short
  const [offcanvasRightMargin, setOffcanvasRightMargin] = useState('offcanvas-right-margin-negative')

  // Modify the transition speed when switching between extensions
  const [offcanvasTransition, setOffcanvasTransition] = useState('offcanvas-transition-default')

  const [offcanvasZindex, setOffcanvasZindex] = useState('offcanvas-z-index-negative')

  // useEffect(() => {
  //   window.addEventListener('resize', handleCloseOffcanvas)
  //   return () => {
  //     window.removeEventListener('resize', handleCloseOffcanvas)
  //   }
  // }, [])

  const handleShowOffcanvas = () => {
    setOffcanvasWidth('short')
    setClosingOffcanvas(false)
    setOffcanvasZindex('offcanvas-z-index-positive')
    setShowOffcanvas(true)
  }
  const handleCloseOffcanvas = () => {
    const offcanvas = document.querySelector('.offcanvas')
    offcanvas.addEventListener('transitionend', e => {
      if (e.propertyName === 'left' && e.target.classList.contains('hide-offcanvas')) {
        handleExitOffcanvas()
      }
    })
    
    setClosingOffcanvas(true)
    setOffcanvasWidth('short')
    setShowOffcanvas(false)

    // Alternatively, set a timeout equal to the CSS transition duration
    // setTimeout(() => {
    //   handleExitOffcanvas()
    // }, 300)
  }
  const handleExitOffcanvas = () => {
    setOffcanvasExtension('')
    setOffcanvasRightMargin('offcanvas-right-margin-negative')
    setClosingOffcanvas(false)
    setOffcanvasZindex('offcanvas-z-index-negative')
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
    setOffcanvasRightMargin('offcanvas-right-margin-zero')
    
    // Switch extension
    if (offcanvasExtension !== '' && offcanvasExtension !== type && offcanvasWidth === 'long') { 
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
        className={`${offcanvasWidth} ${offcanvasTransition} ${offcanvasZindex} ${showOffcanvas ? 'show-offcanvas' : 'hide-offcanvas'}`}
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
        {offcanvasExtension !== "" && 
          <div className="offcanvas-extension">
            {offcanvasExtension === "team" 
            ? <div>teamteamteamteamteam</div>
            : <div>services</div>
            }
          </div>
        }
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
