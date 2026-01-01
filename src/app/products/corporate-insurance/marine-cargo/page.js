import Image from 'next/image'
import img from '@/assets/stock-marine-cargo.webp'

const MarineCargo = () => (
  <div className="product container">
    <h2>Marine Cargo</h2>
    <div className="product-group">
      <Image src={img} alt="Marine Cargo" loading="eager" />
      <p>Protects goods transported by sea, air, or land against loss or damage during transit. It covers risks such as accidents, theft, rough handling, and natural hazards that may occur from the point of origin to the final destination.</p>
    </div>
  </div>
)

export default MarineCargo