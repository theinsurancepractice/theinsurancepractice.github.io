import img from '../assets/stock-warehouseman-liability.jpg'

const WarehousemanLiability = () => (
  <div className="product container">
    <h2>Warehouseman Liability</h2>
    <div className="product-group">
      <img src={img} alt="Warehouseman Liability" onLoad={e => e.target.classList.add('visible')} />
      <p>Protects logistics operators, warehouse owners, and carriers against legal liabilities for loss or damage to customers' goods while they are stored or transported under their care, custody, or control.</p>
    </div>
  </div>
)

export default WarehousemanLiability