const Offcanvas2 = () => {
  const [showOffcanvas2, setShowOffcanvas2] = useState(false)
  const [closingOffcanvas2, setClosingOffcanvas2] = useState(false)

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
  )
}

export default Offcanvas2