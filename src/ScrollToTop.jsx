import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router'

const ScrollToTop = () => {
  const navigationType = useNavigationType()
  const { pathname } = useLocation()

  useEffect(() => {
    if (navigationType !== 'POP') {
      window.scrollTo(0, 0)
    }
  }, [navigationType, pathname])

  return null
}

export default ScrollToTop