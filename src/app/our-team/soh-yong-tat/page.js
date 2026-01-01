import Image from 'next/image'
import sohYongTat from '@/assets/soh-yong-tat.webp'

const SohYongTat = () => (
  <div className="member container">
    <div className="member-left">
      <Image src={sohYongTat} alt="Soh Yong Tat" loading="eager" className="team-member-photo member-photo" />
      <div className="team-member-divider member-divider-top"></div>
      <h2 className="member-name">Soh Yong Tat</h2>
      <p className="member-role">General Insurance Agent</p>
      <div className="team-member-divider member-divider-bottom"></div>
    </div>
    <div className="member-right">
      <p className="member-paragraph">I am a resourceful insurance consultant who is constantly seeking out opportunities, insights, and practical solutions for my clients. Known for my strong industry connections and ability to uncover valuable “lobang” (useful tips and advantages), I actively explore different options to help clients secure coverage that is both effective and cost-efficient. My goal is always to add value beyond the policy itself.</p>
      <p className="member-paragraph">Being proactive is a key part of how I work. I actively look for new sources of information, partners, and solutions so that clients benefit from the latest developments in the market. Whether it's identifying better coverage terms, alternative insurers, or emerging risk considerations, I take initiative to stay ahead and share relevant insights with my clients.</p>
      <p className="member-paragraph">Adaptability allows me to work effectively across different environments and client profiles. I adjust my approach to suit varying industries, personalities, and situations, ensuring communication remains clear and practical. In a constantly evolving insurance landscape, this flexibility helps me respond quickly to change and provide steady, reliable support.</p>
      <p className="member-paragraph">By being resourceful, adaptable and taking the initiative, I strive to be a well-connected and forward-thinking insurance partner whom clients can rely on for timely advice and meaningful solutions.</p>
    </div>
  </div>
)

export default SohYongTat