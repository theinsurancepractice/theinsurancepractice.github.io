const OffcanvasExtension = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false)                    // Show or hide offcanvas
  const [closingOffcanvas, setClosingOffcanvas] = useState(false)              // Prevents user from clicking on the offcanvas when it is closing
  
  const [showOffcanvasExtension, setShowOffcanvasExtension] = useState(false)  // Show or hide offcanvas-extension
  const [offcanvasExtension, setOffcanvasExtension] = useState('team')         // Selects the extension to show
  
  // Remove visual artifacts between offcanvas-right and offcanvas-left when offcanvas-extension is hidden
  const [offcanvasRightMarginNegative, setOffcanvasRightMarginNegative] = useState(true)

  // Modify the transition speed when switching between extensions
  const [offcanvasExtensionTransitionFast, setOffcanvasExtensionTransitionFast] = useState(false)

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
          <div className="offcanvas-link">
            <span>About Us</span>
          </div>
          <div className="offcanvas-divider"></div>
          <div className="offcanvas-link">
            <span>Products</span>
          </div>
          <div className="offcanvas-divider"></div>
          <div onClick={() => handleShowExtension('team')} className="offcanvas-link">
            <span>Our Team</span>
            <TriangleSvg angle={0} color={"white"} />
          </div>
          <div className="offcanvas-divider"></div>
          <div onClick={() => handleShowExtension('services')} className="offcanvas-link">
            <span>Services</span>
            <TriangleSvg angle={0} color={"white"} />
          </div>
          <div className="offcanvas-divider"></div>
          <div className="offcanvas-link">
            <span>Our Partners</span>
          </div>
          <div className="offcanvas-divider"></div>
          <div className="offcanvas-link">
            <span>Careers</span>
          </div>
          <div className="offcanvas-divider"></div>
          <div className="offcanvas-link">
            <span>Activities</span>
          </div>
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
  )
}

export default OffcanvasExtension