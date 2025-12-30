import Image from 'next/image'
import img from '@/assets/stock-public-liability.jpg'

const PublicLiability = () => (
  <div className="product container">
    <h2>Public Liability</h2>
    <div className="product-group">
      <Image src={img} alt="Public Liability" />
      <p>Protects businesses against legal and financial liabilities arising from accidental injury or property damage to third parties occurring in connection with their business activities.</p>
    </div>
  </div>
)

export default PublicLiability