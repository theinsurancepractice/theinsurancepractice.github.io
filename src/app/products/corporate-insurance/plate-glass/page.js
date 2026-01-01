import Image from 'next/image'
import img from '@/assets/stock-plate-glass.webp'

const PlateGlass = () => (
  <div className="product container">
    <h2>Plate Glass</h2>
    <div className="product-group">
      <Image src={img} alt="Plate Glass" loading="eager" />
      <p>Protection against the accidental breakage of fixed glass installed on a property, such as shopfront panels, display windows, doors, or partitions. It covers the cost of repairing or replacing the damaged glass.</p>
    </div>
  </div>
)

export default PlateGlass