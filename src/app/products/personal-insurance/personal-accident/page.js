import Image from 'next/image'
import img from '@/assets/stock-personal-accident.webp'

const PersonalAccident = () => (
  <div className="product container">
    <h2>Personal Accident</h2>
    <div className="product-group">
      <Image src={img} alt="Personal Accident" loading="eager" />
      <p>Provides financial protection in the event of accidental injury, disability, or death. It covers medical expenses, compensation for loss of income, and other accident-related costs.</p>
    </div>
  </div>
)

export default PersonalAccident