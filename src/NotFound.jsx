import { NavLink } from 'react-router'
import TriangleSvg from './svg/TriangleSvg'

const NotFound = () => (
  <div className="not-found container">
    <h2>404</h2>
    <p>Sorry, we could not find the page you are looking for.</p>
    <NavLink to="/" end className="not-found-link">
      <span>Go back to homepage</span>
      <TriangleSvg angle={270} color="white"/>
    </NavLink>
  </div>
)

export default NotFound