import img from '../assets/stock-plate-glass.jpg'

const PlateGlass = () => (
  <div className="product container">
    <h2>Plate Glass</h2>
    <div className="product-group">
      <img src={img} alt="Plate Glass" onLoad={e => e.target.classList.add('visible')} />
      <p>Protection against the accidental breakage of fixed glass installed on a property, such as shopfront panels, display windows, doors, or partitions. It covers the cost of repairing or replacing the damaged glass.</p>
    </div>
  </div>
)

export default PlateGlass