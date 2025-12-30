import Image from 'next/image'
import img from '@/assets/stock-undertaking-bond.jpg'

const UndertakingBond = () => (
  <div className="product container">
    <h2>Undertaking Bond</h2>
    <div className="product-group">
      <Image src={img} alt="Undertaking Bond" />
      <p>Financial guarantee that ensures a party will fulfill specific commitments or obligations stated in an agreement. If the party fails to meet these obligations, the bond provides compensation to the beneficiary for any resulting losses.</p>
    </div>
  </div>
)

export default UndertakingBond