import Image from 'next/image'
import edwinHooChongChin from '@/assets/edwin-hoo-chong-chin.jpg'

const EdwinHooChongChin = () => (
  <div className="member container">
    <div className="member-left">
      <Image src={edwinHooChongChin} alt="Edwin Hoo Chong Chin" loading="eager" className="team-member-photo member-photo" />
      <div className="team-member-divider member-divider-top"></div>
      <h2 className="member-name">Edwin Hoo Chong Chin</h2>
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

export default EdwinHooChongChin