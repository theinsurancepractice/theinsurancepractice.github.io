import Image from 'next/image'
import img from '@/assets/stock-pet.jpg'

const Pet = () => (
  <div className="product container">
    <h2>Pet</h2>
    <div className="product-group">
      <Image src={img} alt="Pet" />
      <p>Provides financial protection for pet owners against veterinary expenses arising from accidents, illnesses, or routine care for their pets.</p>
    </div>
  </div>
)

export default Pet