import Image from 'next/image'
import brandonTan from '@/assets/brandon-tan.jpg'

const BrandonTan = () => (
  <div className="member container">
    <div className="member-left">
      <Image src={brandonTan} alt="Brandon Tan" loading="eager" className="team-member-photo member-photo" />
      <div className="team-member-divider member-divider-top"></div>
      <h2 className="member-name">Brandon Tan</h2>
      <p className="member-role">General Insurance Agent</p>
      <div className="team-member-divider member-divider-bottom"></div>
    </div>
    <div className="member-right">
      <p className="member-paragraph">At the heart of my practice is a strong commitment to being genuinely client-centric. I believe insurance should serve the client—not the other way around. Rather than pushing products for the sake of a sale, I prioritise understanding each client's unique situation, concerns, and goals. By taking time to educate clients clearly and honestly, I help them make informed decisions with confidence. Where appropriate, I recommend phased and realistic solutions that grow alongside their needs, ensuring coverage remains practical, sustainable, and relevant over time. My focus is always on building long-term trust, not one-time transactions.</p>
      <p className="member-paragraph">As a seasoned insurance consultant, I bring both experience and perspective to every conversation. Years in the industry have reinforced the importance of listening first. I take a consultative approach—asking the right questions, clarifying complexities in plain language, and tailoring recommendations that truly fit. Clients can expect advice that is thoughtful, transparent, and grounded in real-world practicality, rather than overly technical or sales-driven.</p>
      <p className="member-paragraph">Equally important is approachability. I'm easygoing by nature, and many clients tell me they feel comfortable speaking openly with me—even about uncertainties or concerns they may hesitate to raise elsewhere. I aim to create a safe, pressure-free space where questions are welcomed and discussions are collaborative.</p>
      <p className="member-paragraph">Whether you are an individual or a business seeking reliable insurance guidance, you can expect a trusted partner who puts your interests first, communicates clearly, and supports you for the long term.</p>
    </div>
  </div>
)

export default BrandonTan