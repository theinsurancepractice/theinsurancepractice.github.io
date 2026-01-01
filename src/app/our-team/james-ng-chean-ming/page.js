import Image from 'next/image'
import jamesNgCheanMing from '@/assets/james-ng-chean-ming.webp'

const JamesNgCheanMing = () => (
  <div className="member container">
    <div className="member-left">
      <Image src={jamesNgCheanMing} alt="James Ng Chean Ming" loading="eager" className="team-member-photo member-photo" />
      <div className="team-member-divider member-divider-top"></div>
      <h2 className="member-name">James Ng Chean Ming</h2>
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

export default JamesNgCheanMing