import Image from 'next/image'
import img from '@/assets/stock-fidelity-guarantee.webp'

const FidelityGuarantee = () => (
  <div className="product container">
    <h2>Fidelity Guarantee</h2>
    <div className="product-group">
      <Image src={img} alt="Fidelity Guarantee" loading="eager" />
      <p>Protects a business against financial loss caused by fraudulent or dishonest acts committed by its employees, such as theft of money, property, or valuables.</p>
    </div>
  </div>
)

export default FidelityGuarantee