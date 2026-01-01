import Image from 'next/image'
import img from '@/assets/stock-business-packages.webp'

const BusinessPackages = () => (
  <div className="product container">
    <h2>Business Packages</h2>
    <div className="product-group">
      <Image src={img} alt="Business Packages" loading="eager" />
      <p>Bundled insurance solution designed to protect businesses from common operational risks. It typically combines key coverages — such as property insurance, business interruption, and public liability — into a single, cost-effective policy. Ideal for SMEs seeking comprehensive protection in one convenient plan.</p>
    </div>
  </div>
)

export default BusinessPackages