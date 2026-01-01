'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import logoBlueBg from '@/assets/logo-blue-bg.webp'
import logoWhiteBg from '@/assets/logo-white-bg.webp'
import ChatBubbleSvg from '@/svg/ChatBubbleSvg'
import HamburgerSvg from '@/svg/HamburgerSvg'
import FacebookSvg from '@/svg/FacebookSvg'
import InstagramSvg from '@/svg/InstagramSvg'
import LinkedInSvg from '@/svg/LinkedInSvg'
import TriangleSvg from '@/svg/TriangleSvg'
import XSvg from '@/svg/XSvg'
import { FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL, MIN_DESKTOP_WIDTH } from '@/constants'

const Nav = () => {
  const pathname = usePathname()
  const personalInsuranceActive = [
    '/products/personal-insurance',
    '/products/personal-insurance/travel',
    '/products/personal-insurance/domestic-worker',
    '/products/personal-insurance/golfer',
    '/products/personal-insurance/pet',
    '/products/personal-insurance/fire',
    '/products/personal-insurance/medical-plans',
    '/products/personal-insurance/personal-accident',
    '/products/personal-insurance/motor'
  ].includes(pathname)
  const corporateInsuranceActive = [
    '/products/corporate-insurance',
    '/products/corporate-insurance/fire-all-risk',
    '/products/corporate-insurance/business-packages',
    '/products/corporate-insurance/contractor-all-risk',
    '/products/corporate-insurance/machinery-all-risk',
    '/products/corporate-insurance/plate-glass',
    '/products/corporate-insurance/cyber-risk',
    '/products/corporate-insurance/directors-and-officers',
    '/products/corporate-insurance/fidelity-guarantee',
    '/products/corporate-insurance/product-liability',
    '/products/corporate-insurance/public-liability',
    '/products/corporate-insurance/professional-indemnity',
    '/products/corporate-insurance/workmen-compensation',
    '/products/corporate-insurance/foreign-worker-medical',
    '/products/corporate-insurance/security-bond',
    '/products/corporate-insurance/performance-bond',
    '/products/corporate-insurance/rental-bond',
    '/products/corporate-insurance/undertaking-bond',
    '/products/corporate-insurance/employee-benefits',
    '/products/corporate-insurance/corporate-travel',
    '/products/corporate-insurance/medical-plans',
    '/products/corporate-insurance/commercial-motor-fleet',
    '/products/corporate-insurance/marine-cargo',
    '/products/corporate-insurance/freight-forwarder',
    '/products/corporate-insurance/inland-transit',
    '/products/corporate-insurance/warehouseman-liability'
  ].includes(pathname)
  const productsActive = personalInsuranceActive || corporateInsuranceActive
  const servicesActive = ['/services/existing-businesses', '/services/new-businesses'].includes(pathname)
  const teamActive = [
    '/our-team',
    '/our-team/tan-tze-ting-aleathea',
    '/our-team/benson-tan',
    '/our-team/samuel-chew',
    '/our-team/shane-tan-long-kiat',
    '/our-team/brandon-tan'
  ].includes(pathname)
  const careersActive = ['/careers/broking-staff', '/careers/administrative-staff'].includes(pathname)
  const [navbarProductsTriangleAngle, setNavbarProductsTriangleAngle] = useState(0)
  const [navbarServicesTriangleAngle, setNavbarServicesTriangleAngle] = useState(0)
  const [navbarCareersTriangleAngle, setNavbarCareersTriangleAngle] = useState(0)
  
  const [showOffcanvas, setShowOffcanvas] = useState(false)                              // Show or hide offcanvas
  const [showOffcanvasProducts, setShowOffcanvasProducts] = useState(false)              // Show or hide offcanvas products
  const [offcanvasProductsTransition, setOffcanvasProductsTransition] = useState(false)  // Turn on or off transition for offcanvas products
  const [showOffcanvasServices, setShowOffcanvasServices] = useState(false)              // Show or hide offcanvas services
  const [offcanvasServicesTransition, setOffcanvasServicesTransition] = useState(false)  // Turn on or off transition for offcanvas services
  const [showOffcanvasCareers, setShowOffcanvasCareers] = useState(false)                // Show or hide offcanvas careers
  const [offcanvasCareersTransition, setOffcanvasCareersTransition] = useState(false)    // Turn on or off transition for offcanvas careers
  const [offcanvasTabIndex, setOffcanvasTabIndex] = useState(0)                          // Set to -1 to disable keyboard navigation when vw >= 1024px
  
  // Close offcanvas when location changes
  useEffect(() => handleCloseOffcanvas(), [pathname])
  
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

  useEffect(() => {
    const handleResizeOffcanvasCareers = () => {
      const offcanvasSublinks = document.querySelector('.offcanvas-sublinks.careers')
      if (showOffcanvasCareers) {
        offcanvasSublinks.style.maxHeight = offcanvasSublinks.scrollHeight + 'px'
      }
    }
    window.addEventListener('resize', handleResizeOffcanvasCareers)
    return () => window.removeEventListener('resize', handleResizeOffcanvasCareers)
  }, [showOffcanvasCareers])

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

  const showNavbarSublinksCareers = () => {
    const navbarSublinks = document.querySelector('.navbar-sublinks.careers')
    navbarSublinks.style.maxHeight = navbarSublinks.scrollHeight + 'px'
    setNavbarCareersTriangleAngle(180)
  }

  const hideNavbarSublinksCareers = () => {
    const navbarSublinks = document.querySelector('.navbar-sublinks.careers')
    navbarSublinks.style.maxHeight = '0px'
    setNavbarCareersTriangleAngle(0)
  }

  const handleShowOffcanvas = () => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    setShowOffcanvas(true)
    document.body.classList.add('no-scroll')
    document.body.style.paddingRight = scrollbarWidth + 'px'
  }
  
  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false)
    document.body.classList.remove('no-scroll')
    document.body.style.paddingRight = ''
  }

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

  const handleToggleOffcanvasCareers = () => {
    const offcanvasSublinks = document.querySelector('.offcanvas-sublinks.careers')
    const handleTransitionEnd = () => {
      offcanvasSublinks.removeEventListener('transitionend', handleTransitionEnd)
      setOffcanvasCareersTransition(false)
    }
    offcanvasSublinks.addEventListener('transitionend', handleTransitionEnd)
    if (showOffcanvasCareers) {
      offcanvasSublinks.style.maxHeight = '0px'
    } else {
      offcanvasSublinks.style.maxHeight = offcanvasSublinks.scrollHeight + 'px'
    }
    setOffcanvasCareersTransition(true)
    setShowOffcanvasCareers(!showOffcanvasCareers)
  }

  return (
    <>
      <nav className={`navbar ${showOffcanvas ? 'hidden' : ''}`}>
        <div className="navbar-left">
          <div className="offcanvas-button" onClick={handleShowOffcanvas}>
            <HamburgerSvg />
          </div>
          <Link href="/" className="navbar-link navbar-link-logo">
            <Image src={logoWhiteBg} alt="The Insurance Practice Logo" className="navbar-logo" width="264" height="141" loading="eager" />
          </Link>
          <Link href="/" className={`navbar-link ${pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link href="/about-us" className={`navbar-link ${pathname === '/about-us' ? 'active' : ''}`}>
            About Us
          </Link>
          <div 
            onMouseEnter={showNavbarSublinksProducts}
            onFocus={showNavbarSublinksProducts}
            onMouseLeave={hideNavbarSublinksProducts}
            onBlur={hideNavbarSublinksProducts}
            className={`navbar-link ${productsActive ? 'active' : ''}`}
          >
            Products
            <TriangleSvg angle={navbarProductsTriangleAngle} color="#238dc1" />
            <div className="navbar-sublinks products">
              <div className="navbar-sublinks-border">
                <Link href="/products/personal-insurance" className={`navbar-sublink ${personalInsuranceActive ? 'active' : ''}`}>
                  Personal Insurance
                </Link>
                <div className="navbar-sublink-divider"></div>
                <Link href="/products/corporate-insurance" className={`navbar-sublink ${corporateInsuranceActive ? 'active' : ''}`}>
                  Corporate Insurance
                </Link>
              </div>
            </div>
          </div>
          <Link href="/our-team" className={`navbar-link ${teamActive ? 'active' : ''}`}>
            Our Team
          </Link>
          <div 
            onMouseEnter={showNavbarSublinksServices}
            onFocus={showNavbarSublinksServices}
            onMouseLeave={hideNavbarSublinksServices}
            onBlur={hideNavbarSublinksServices}
            className={`navbar-link ${servicesActive ? 'active' : ''}`}
          >
            Services
            <TriangleSvg angle={navbarServicesTriangleAngle} color="#238dc1" />
            <div className="navbar-sublinks services">
              <div className="navbar-sublinks-border">
                <Link href="/services/existing-businesses" className={`navbar-sublink ${pathname === '/services/existing-businesses' ? 'active' : ''}`}>
                  Existing Businesses
                </Link>
                <div className="navbar-sublink-divider"></div>
                <Link href="/services/new-businesses" className={`navbar-sublink ${pathname === '/services/new-businesses' ? 'active' : ''}`}>
                  New Businesses
                </Link>
              </div>
            </div>
          </div>
          <Link href="/our-partners" className={`navbar-link ${pathname === '/our-partners' ? 'active' : ''}`}>
            Our Partners
          </Link>
          <div
            onMouseEnter={showNavbarSublinksCareers}
            onFocus={showNavbarSublinksCareers}
            onMouseLeave={hideNavbarSublinksCareers}
            onBlur={hideNavbarSublinksCareers}
            className={`navbar-link ${careersActive ? 'active' : ''}`}
          >
            Careers
            <TriangleSvg angle={navbarCareersTriangleAngle} color="#238dc1" />
            <div className="navbar-sublinks careers">
              <div className="navbar-sublinks-border">
                <Link href="/careers/broking-staff" className={`navbar-sublink ${pathname === '/careers/broking-staff' ? 'active' : ''}`}>
                  Broking Staff
                </Link>
                <div className="navbar-sublink-divider"></div>
                <Link href="/careers/administrative-staff" className={`navbar-sublink ${pathname === '/careers/administrative-staff' ? 'active' : ''}`}>
                  Administrative Staff
                </Link>
              </div>
            </div>
          </div>
          <Link href="/workshop" className={`navbar-link ${pathname === '/workshop' ? 'active' : ''}`}>
            Workshop
          </Link>
        </div>
        <div className="navbar-right">
          <Link href="/contact-us" className="navbar-contact">
            Contact Us
            <ChatBubbleSvg />
          </Link>
          {/* <div className="navbar-location">
            <Image src={mapMarker} alt="Map Marker" className="map-marker" />
          </div> */}
        </div>
      </nav>

      {showOffcanvas && <div onClick={handleCloseOffcanvas} className="offcanvas-backdrop"></div>}

      <nav className={`offcanvas ${showOffcanvas ? 'show' : ''}`}>
        <div className="offcanvas-left">
          <div>
            <Link href="/" onClick={handleCloseOffcanvas} tabIndex={offcanvasTabIndex} className="offcanvas-link">
              <Image src={logoBlueBg} alt="The Insurance Practice Logo" className="offcanvas-logo" />
            </Link>
            <Link href="/" onClick={handleCloseOffcanvas} tabIndex={offcanvasTabIndex} className="offcanvas-link">
              Home
            </Link>
            <div className="offcanvas-divider"></div>
            <Link href="/about-us" onClick={handleCloseOffcanvas} tabIndex={offcanvasTabIndex} className="offcanvas-link">
              About Us
            </Link>
            <div className="offcanvas-divider"></div>
            <div onClick={handleToggleOffcanvasProducts} className={`offcanvas-link top ${showOffcanvasProducts ? 'show' : ''}`}>
              Products
              <TriangleSvg angle={showOffcanvasProducts ? 180 : 0} color="white" />
            </div>
            <div className={`offcanvas-sublinks products ${offcanvasProductsTransition ? 'transition' : ''}`}>
              <Link href="/products/personal-insurance" onClick={handleCloseOffcanvas} tabIndex={offcanvasTabIndex} className="offcanvas-sublink">
                Personal Insurance
              </Link>
              <Link href="/products/corporate-insurance" onClick={handleCloseOffcanvas} tabIndex={offcanvasTabIndex} className="offcanvas-sublink">
                Corporate Insurance
              </Link>
            </div>
            <div onClick={showOffcanvasProducts ? undefined : handleToggleOffcanvasProducts} className={`offcanvas-link-bottom ${showOffcanvasProducts ? 'show' : ''}`}></div>
            <div className="offcanvas-divider"></div>
            <Link href="/our-team" onClick={handleCloseOffcanvas} tabIndex={offcanvasTabIndex} className="offcanvas-link">
              Our Team
            </Link>
            <div className="offcanvas-divider"></div>
            <div onClick={handleToggleOffcanvasServices} className={`offcanvas-link top ${showOffcanvasServices ? 'show' : ''}`}>
              Services
              <TriangleSvg angle={showOffcanvasServices ? 180 : 0} color="white" />
            </div>
            <div className={`offcanvas-sublinks services ${offcanvasServicesTransition ? 'transition' : ''}`}>
              <Link href="/services/existing-businesses" onClick={handleCloseOffcanvas} tabIndex={offcanvasTabIndex} className="offcanvas-sublink">
                Existing Businesses
              </Link>
              <Link href="/services/new-businesses" onClick={handleCloseOffcanvas} tabIndex={offcanvasTabIndex} className="offcanvas-sublink">
                New Businesses
              </Link>
            </div>
            <div onClick={showOffcanvasServices ? undefined : handleToggleOffcanvasServices} className={`offcanvas-link-bottom ${showOffcanvasServices ? 'show' : ''}`}></div>
            <div className="offcanvas-divider"></div>
            <Link href="/our-partners" onClick={handleCloseOffcanvas} tabIndex={offcanvasTabIndex} className="offcanvas-link">
              Our Partners
            </Link>
            <div className="offcanvas-divider"></div>
            <div onClick={handleToggleOffcanvasCareers} className={`offcanvas-link top ${showOffcanvasCareers ? 'show' : ''}`}>
              Careers
              <TriangleSvg angle={showOffcanvasCareers ? 180 : 0} color="white" />
            </div>
            <div className={`offcanvas-sublinks careers ${offcanvasCareersTransition ? 'transition' : ''}`}>
              <Link href="/careers/broking-staff" onClick={handleCloseOffcanvas} tabIndex={offcanvasTabIndex} className="offcanvas-sublink">
                Broking Staff
              </Link>
              <Link href="/careers/administrative-staff" onClick={handleCloseOffcanvas} tabIndex={offcanvasTabIndex} className="offcanvas-sublink">
                Administrative Staff
              </Link>
            </div>
            <div onClick={showOffcanvasCareers ? undefined : handleToggleOffcanvasCareers} className={`offcanvas-link-bottom ${showOffcanvasCareers ? 'show' : ''}`}></div>
            <div className="offcanvas-divider"></div>
            <Link href="/workshop" onClick={handleCloseOffcanvas} tabIndex={offcanvasTabIndex} className="offcanvas-link">
              Workshop
            </Link>
          </div>
          <div className="offcanvas-socials">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" tabIndex={offcanvasTabIndex} className="offcanvas-icon">
              <FacebookSvg />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" tabIndex={offcanvasTabIndex} className="offcanvas-icon">
              <InstagramSvg />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" tabIndex={offcanvasTabIndex} className="offcanvas-icon">
              <LinkedInSvg />
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
    </>
  )
}

export default Nav