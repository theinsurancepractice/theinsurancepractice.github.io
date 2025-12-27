import img from '../assets/stock-rental-bond.png'

const RentalBond = () => (
  <div className="product container">
    <h2>Rental Bond</h2>
    <div className="product-group">
      <img src={img} alt="Rental Bond" onLoad={e => e.target.classList.add('visible')} />
      <p>Security deposit paid by a tenant at the start of a lease to protect the landlord against unpaid rent, property damage, or breaches of the rental agreement. The bond is held for the duration of the tenancy and is refundable at the end, provided the tenant meets all lease obligations and leaves the property in good condition.</p>
    </div>
  </div>
)

export default RentalBond