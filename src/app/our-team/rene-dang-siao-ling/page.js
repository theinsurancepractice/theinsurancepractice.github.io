import Image from 'next/image'
import reneDangSiaoLing from '@/assets/rene-dang-siao-ling.webp'

const ReneDangSiaoLing = () => (
  <div className="member container">
    <div className="member-left">
      <Image src={reneDangSiaoLing} alt="Rene Dang Siao Ling" loading="eager" className="team-member-photo member-photo" />
      <div className="team-member-divider member-divider-top"></div>
      <h2 className="member-name">Rene Dang Siao Ling</h2>
      <p className="member-role">General Insurance Agent</p>
      <div className="team-member-divider member-divider-bottom"></div>
    </div>
    <div className="member-right">
      <p className="member-paragraph">I believe the foundation of great insurance service lies in the details. I take a meticulous approach to reviewing policies, comparing options, and ensuring every aspect of coverage is properly structured and clearly understood. By paying close attention to the finer points, I help safeguard clients against overlooked gaps or unexpected surprises, so their assets are protected exactly as intended.</p>
      <p className="member-paragraph">When unforeseen events occur, timely and clear support matters. Rather than automated responses or delayed follow-ups, I make it a priority to be readily available when clients need guidance. Whether it involves reporting an incident, navigating a claim, or addressing urgent questions, I provide direct and dependable assistance throughout the process. My aim is to simplify complex situations and ensure clients feel supported when their coverage needs to perform.</p>
      <p className="member-paragraph">At the core of my work is a belief in genuine, trusted relationships. I bring authenticity and transparency to every conversation, keeping discussions straightforward and honest. By communicating openly and working collaboratively, I build lasting trust with clients and create partnerships that extend beyond individual policies.</p>
      <p className="member-paragraph">Through careful attention, reliable support, and a sincere approach, I strive to deliver insurance advice that offers clarity, confidence, and peace of mind over the long term.</p>
    </div>
  </div>
)

export default ReneDangSiaoLing