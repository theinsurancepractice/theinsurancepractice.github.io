import Image from 'next/image'
import img from '@/assets/stock-contractor-all-risk.webp'

const ContractorAllRisk = () => (
  <div className="product container">
    <h2>Contractor All Risk</h2>
    <div className="product-group">
      <Image src={img} alt="Contractor All Risk" loading="eager" />
      <p>Comprehensive protection for construction projects against accidental physical loss or damage during the course of work. It typically covers two main areas: Material Damage – Protects the project site, building works, materials, and equipment against events such as fire, theft, collapse, or other unforeseen accidents. Third-Party Liability – Covers legal liabilities arising from accidental bodily injury or property damage to third parties caused by construction activities. Ideal for contractors, developers, and project owners.</p>
    </div>
  </div>
)

export default ContractorAllRisk