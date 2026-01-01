import Image from 'next/image'
import img from '@/assets/stock-inland-transit.webp'

const InlandTransit = () => (
  <div className="product container">
    <h2>Inland Transit</h2>
    <div className="product-group">
      <Image src={img} alt="Inland Transit" loading="eager" />
      <p>Protects goods being transported within a country against accidental loss or damage during transit by road, rail, or inland waterways. It covers risks such as collision, overturning, theft, and other unforeseen incidents from the point of dispatch to final delivery.</p>
    </div>
  </div>
)

export default InlandTransit