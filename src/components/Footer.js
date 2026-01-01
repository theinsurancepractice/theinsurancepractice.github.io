import Link from 'next/link'
import Image from 'next/image'
import logoBlueBg from '@/assets/logo-blue-bg.webp'
import FacebookSvg from '@/svg/FacebookSvg'
import InstagramSvg from '@/svg/InstagramSvg'
import LinkedInSvg from '@/svg/LinkedInSvg'
import { FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL } from '@/constants'

const Footer = () => (
  <footer className="footer">
    <div className="footer-container container">
      <Link href="/" className="footer-link">
        <Image src={logoBlueBg} alt="The Insurance Practice Logo" loading="eager" className="footer-logo" />
      </Link>
      <div className="footer-socials">
        <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FacebookSvg />
        </a>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="footer-icon">
          <InstagramSvg />
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="footer-icon">
          <LinkedInSvg />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer