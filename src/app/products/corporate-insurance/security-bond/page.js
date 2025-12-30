import Image from 'next/image'
import img from '@/assets/stock-security-bond.jpg'

const SecurityBond = () => (
  <div className="product container">
    <h2>Security Bond</h2>
    <div className="product-group">
      <Image src={img} alt="Security Bond" />
      <p>Financial guarantee (required by government authorities) that an employer will meet specific obligations, such as ensuring the proper care, conduct, and repatriation of a foreign worker. If these obligations are not fulfilled, the bond may be forfeited.</p>
    </div>
  </div>
)

export default SecurityBond