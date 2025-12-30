import Link from 'next/link'
import HomeHeight from '@/components/HomeHeight'
import TriangleSvg from '@/svg/TriangleSvg'

const Home = () => (
  <>
    <HomeHeight>
      <h1>
        <span className="home-your-peace">Your Peace,</span>{' '}
        <span className="home-we-mind">We Mind</span>
      </h1>
      <p className="home-description">In an unpredictable world, the right insurance protects not just your wealth, but your family, your business, and everything you've worked so hard to build. From consultation to claims, we are your complete, one-stop insurance solution under a single trusted roof.</p>
    </HomeHeight>
    <div className="home-enquire-container container">
      <Link href="/contact-us" className="home-enquire">
        Enquire Now
        <TriangleSvg angle={270} color="white"/>
      </Link>
    </div>
  </>
)

export default Home