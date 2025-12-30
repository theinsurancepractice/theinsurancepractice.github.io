import Image from 'next/image'
import img from '@/assets/stock-travel.jpg'

const Travel = () => (
  <div className="product container">
    <h2>Travel</h2>
    <div className="product-group">
      <Image src={img} alt="Travel" />
      <p>Protects travellers against unexpected events during a trip, such as medical emergencies, trip cancellations, lost or delayed baggage, and travel inconveniences.</p>
    </div>
  </div>
)

export default Travel