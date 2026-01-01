import Image from 'next/image'
import img from '@/assets/stock-fire.webp'

const Fire = () => (
  <div className="product container">
    <h2>Fire</h2>
    <div className="product-group">
      <Image src={img} alt="Fire" loading="eager" />
      <p>Protects property and assets against damage or loss caused by fire, lightning, and explosions.</p>
    </div>
  </div>
)

export default Fire