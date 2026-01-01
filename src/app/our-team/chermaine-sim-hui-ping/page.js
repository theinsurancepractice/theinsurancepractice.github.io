import Image from 'next/image'
import chermaineSimHuiPing from '@/assets/chermaine-sim-hui-ping.jpg'

const ChermaineSimHuiPing = () => (
  <div className="member container">
    <div className="member-left">
      <Image src={chermaineSimHuiPing} alt="Chermaine Sim Hui Ping" loading="eager" className="team-member-photo member-photo" />
      <div className="team-member-divider member-divider-top"></div>
      <h2 className="member-name">Chermaine Sim Hui Ping</h2>
      <p className="member-role">General Insurance Agent</p>
      <div className="team-member-divider member-divider-bottom"></div>
    </div>
    <div className="member-right">
      <p className="member-paragraph">I take a client-focused approach to insurance, believing that effective solutions begin with a clear understanding of each client's unique needs. Before making any recommendations, I invest time in listening, asking the right questions, and gaining insight into the client's priorities, risks, and long-term objectives. This ensures that every solution proposed is practical, relevant, and aligned with what truly matters to them.</p>
      <p className="member-paragraph">Trust is the foundation of my work. Clients value my consistency, discretion, and strong follow-through, knowing that they can rely on me to handle their matters with care and professionalism. I am committed to clear communication and dependable service, whether managing policy reviews, assisting with claims, or addressing ongoing insurance needs.</p>
      <p className="member-paragraph">Being proactive is central to how I support my clients. I follow up promptly, monitor policies closely, and take initiative to anticipate potential issues before they arise. By staying engaged and responsive, I help clients stay informed and prepared, rather than reactive.</p>
      <p className="member-paragraph">My approach is centred on building long-term relationships grounded in confidence and trust. By staying attentive, reliable, and proactive, I aim to be a dependable insurance partner who supports clients consistently. My focus is on providing clarity, peace of mind, and lasting value at every stage of their personal or business journey.</p>
    </div>
  </div>
)

export default ChermaineSimHuiPing