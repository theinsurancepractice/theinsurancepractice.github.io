import Image from 'next/image'
import ohYongShengXavier from '@/assets/oh-yong-sheng-xavier.webp'

const OhYongShengXavier = () => (
  <div className="member container">
    <div className="member-left">
      <Image src={ohYongShengXavier} alt="Oh Yong Sheng Xavier" loading="eager" className="team-member-photo member-photo" />
      <div className="team-member-divider member-divider-top"></div>
      <h2 className="member-name">Oh Yong Sheng Xavier</h2>
      <p className="member-role">General Insurance Agent</p>
      <div className="team-member-divider member-divider-bottom"></div>
    </div>
    <div className="member-right">
      <p className="member-paragraph">I am deeply service-oriented and take pride in going the extra mile for my clients, especially during stressful or uncertain situations. Insurance matters often arise unexpectedly, which is why I remain committed to being present, reliable, and solution-focused—whether it's explaining policy details, assisting with claims, or addressing urgent concerns beyond standard office hours.</p>
      <p className="member-paragraph">Proactivity is central to how I work. I do my best to stay available around the clock, understanding that emergencies don't follow schedules. By responding promptly and anticipating clients' needs, I help resolve issues efficiently and minimise disruption, giving clients confidence that they have dependable support when it matters most.</p>
      <p className="member-paragraph">Empathy guides every interaction. I value listening to people from all walks of life and take time to understand each client's background and experiences. This allows me to provide advice that is thoughtful, relevant, and tailored, ensuring clients feel heard, respected, and supported.</p>
      <p className="member-paragraph">Together, these principles shape a relationship built on trust and continuity. My goal is to offer not just insurance solutions, but ongoing reassurance and consistent support as clients navigate life's changes and business challenges.</p>
    </div>
  </div>
)

export default OhYongShengXavier