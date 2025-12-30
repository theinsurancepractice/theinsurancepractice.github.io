import Image from 'next/image'
import img from '@/assets/stock-foreign-worker-medical.jpg'

const ForeignWorkerMedical = () => (
  <div className="product container">
    <h2>Foreign Worker Medical</h2>
    <div className="product-group">
      <Image src={img} alt="Foreign Worker Medical" />
      <p>Essential healthcare coverage for foreign employees, covering hospitalisation, surgery, and other medical treatment costs arising from illness or injury. It helps employers meet regulatory requirements while ensuring that foreign workers receive timely and adequate medical care.</p>
    </div>
  </div>
)

export default ForeignWorkerMedical