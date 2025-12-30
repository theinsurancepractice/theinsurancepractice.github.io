import Image from 'next/image'
import img from '@/assets/stock-machinery-all-risk.jpg'

const MachineryAllRisk = () => (
  <div className="product container">
    <h2>Machinery All Risk</h2>
    <div className="product-group">
      <Image src={img} alt="Machinery All Risk" />
      <p>Protects machinery and equipment against sudden, accidental, and unforeseen physical loss or damage while in operation, at rest, or during maintenance. It goes beyond basic fire coverage to include risks such as breakdowns, impact, collision, and other unexpected incidents.</p>
    </div>
  </div>
)

export default MachineryAllRisk