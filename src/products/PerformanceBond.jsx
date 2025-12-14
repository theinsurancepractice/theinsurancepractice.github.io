import img from '../assets/stock-performance-bond.jpg'

const PerformanceBond = () => (
  <div className="product container">
    <h2>Performance Bond</h2>
    <div className="product-group">
      <img src={img} alt="Performance Bond" />
      <p>Financial guarantee issued by a bank or insurer to ensure that a contractor or service provider completes a project according to the agreed terms, standards, and timeline. If the contractor fails to perform, the bond compensates the client for losses or enables the project to be completed by another party.</p>
    </div>
  </div>
)

export default PerformanceBond