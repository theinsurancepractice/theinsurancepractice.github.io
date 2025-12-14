import img from '../assets/stock-employee-benefits.jpg'

const EmployeeBenefits = () => (
  <div className="product container">
    <h2>Employee Benefits</h2>
    <div className="product-group">
      <img src={img} alt="Employee Benefits" />
      <p>Protect employees' health and financial well-being. This includes hospital and surgical, optional riders like general and specialist practitioners, as well as dental or personal accident coverage.</p>
    </div>
  </div>
)

export default EmployeeBenefits