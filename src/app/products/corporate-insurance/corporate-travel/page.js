import Image from 'next/image'
import img from '@/assets/stock-corporate-travel.jpg'

const CorporateTravel = () => (
  <div className="product container">
    <h2>Corporate Travel</h2>
    <div className="product-group">
      <Image src={img} alt="Corporate Travel" />
      <p>Protects employees travelling for business against unexpected incidents, such as medical emergencies, trip cancellations, lost baggage, travel delays, and accident-related injuries.</p>
    </div>
  </div>
)

export default CorporateTravel