import Image from 'next/image'
import img from '@/assets/stock-workmen-compensation.webp'

const WorkmenCompensation = () => (
  <div className="product container">
    <h2>Workmen Compensation</h2>
    <div className="product-group">
      <Image src={img} alt="Workmen Compensation" loading="eager" />
      <p>Covers employees who suffer work-related injuries or occupational diseases. It typically pays for medical expenses, lost wages, rehabilitation, and compensation required under workplace injury laws.</p>
    </div>
  </div>
)

export default WorkmenCompensation