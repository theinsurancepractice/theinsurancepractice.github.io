import Image from 'next/image'
import lindaChuaPeiMei from '@/assets/linda-chua-pei-mei.jpg'

const LindaChuaPeiMei = () => (
  <div className="member container">
    <div className="member-left">
      <Image src={lindaChuaPeiMei} alt="Linda Chua Pei Mei" loading="eager" className="team-member-photo member-photo" />
      <div className="team-member-divider member-divider-top"></div>
      <h2 className="member-name">Linda Chua Pei Mei</h2>
      <p className="member-role">General Insurance Agent</p>
      <div className="team-member-divider member-divider-bottom"></div>
    </div>
    <div className="member-right">
      <p className="member-paragraph"></p>
      <p className="member-paragraph"></p>
      <p className="member-paragraph"></p>
    </div>
  </div>
)

export default LindaChuaPeiMei