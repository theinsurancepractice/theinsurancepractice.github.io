import Image from 'next/image'
import bensonTan from '@/assets/benson-tan.jpg'

const BensonTan = () => (
  <div className="member container">
    <div className="member-left">
      <Image src={bensonTan} alt="Benson Tan" className="team-member-photo member-photo" />
      <div className="team-member-divider member-divider-top"></div>
      <h2 className="member-name">Benson Tan</h2>
      <p className="member-role">General Insurance Agent</p>
      <div className="team-member-divider member-divider-bottom"></div>
    </div>
    <div className="member-right">
      <p className="member-paragraph">I am committed to maintaining a high level of professional competence, and this drives the way I serve every client. By continuously updating my knowledge of insurance products, underwriting requirements, and the ever-changing market landscape, I ensure that the advice and solutions I provide are always relevant, accurate, and aligned with each client's unique situation. Staying current is not just part of my job — it is a responsibility I take seriously because clients deserve clarity and confidence when making important financial decisions.</p>
      <p className="member-paragraph">My approach is deeply customer-focused. I believe trust is earned through transparency, honesty, and consistent support. Whether a client is reviewing their existing coverage, exploring new options, or facing an unexpected challenge, I make it a point to be present, attentive, and dependable. Building long-term relationships means showing up not only when things are smooth, but also when clients need reassurance, guidance, or someone who simply listens.</p>
      <p className="member-paragraph">Beyond work, I am an adventurer at heart. I love exploring new places, embracing unfamiliar experiences, and pushing myself beyond my comfort zone. My hikes across Mount Rinjani, Mount Kinabalu, the Everest region, Fansipan, Ben Nevis, and many other trails have shaped my outlook on resilience and curiosity. These journeys keep me grounded, open-minded, and constantly driven to take on new challenges — qualities that I bring into both my personal life and my professional practice.</p>
    </div>
  </div>
)

export default BensonTan