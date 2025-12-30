import Image from 'next/image'
import img from '@/assets/stock-golfer.jpg'

const Golfer = () => (
  <div className="product container">
    <h2>Golfer</h2>
    <div className="product-group">
      <Image src={img} alt="Golfer" />
      <p>Provides coverage for amateur and professional golfers against personal accidents, loss or damage to golf equipment, and liability for accidental injury or property damage to others while playing.</p>
    </div>
  </div>
)

export default Golfer