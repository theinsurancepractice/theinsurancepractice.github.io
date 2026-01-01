import Image from 'next/image'
import img from '@/assets/stock-warehouseman-liability.webp'

const WarehousemanLiability = () => (
  <div className="product container">
    <h2>Warehouseman Liability</h2>
    <div className="product-group">
      <Image src={img} alt="Warehouseman Liability" loading="eager" />
      <p>Protects logistics operators, warehouse owners, and carriers against legal liabilities for loss or damage to customers' goods while they are stored or transported under their care, custody, or control.</p>
    </div>
  </div>
)

export default WarehousemanLiability