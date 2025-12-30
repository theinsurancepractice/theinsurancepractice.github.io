import Image from 'next/image'
import img from '@/assets/stock-domestic-worker.jpg'

const DomesticWorker = () => (
  <div className="product container">
    <h2>Domestic Worker</h2>
    <div className="product-group">
      <Image src={img} alt="Domestic Worker" />
      <p>Provides essential protection for employers and their domestic helpers, covering medical expenses, personal accident benefits, hospitalisation, and employer's liability. It ensures compliance with regulatory requirements while safeguarding both the helper's well-being and the employer's financial responsibilities.</p>
    </div>
  </div>
)

export default DomesticWorker