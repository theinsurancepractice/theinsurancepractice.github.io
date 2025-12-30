import Image from 'next/image'
import img from '@/assets/stock-freight-forwarder.jpg'

const FreightForwarder = () => (
  <div className="product container">
    <h2>Freight Forwarder</h2>
    <div className="product-group">
      <Image src={img} alt="Freight Forwarder" />
      <p>Protects freight forwarders against legal liabilities arising from loss, damage, or delay of goods while they are in their care, custody, or control. It also covers errors and omissions related to documentation, handling, or logistics services.</p>
    </div>
  </div>
)

export default FreightForwarder