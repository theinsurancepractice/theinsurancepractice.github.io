import Image from 'next/image'
import img from '@/assets/stock-motor.webp'

const Motor = () => (
  <div className="product container">
    <h2>Motor</h2>
    <div className="product-group">
      <Image src={img} alt="Motor" loading="eager" />
      <p>Protects vehicle owners against financial loss or liability arising from accidents, theft, fire, or third-party injury and property damage.</p>
    </div>
  </div>
)

export default Motor