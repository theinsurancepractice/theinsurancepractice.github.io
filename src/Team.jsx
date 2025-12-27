import { NavLink } from 'react-router'
import tanTzeTingAleathea from './assets/tan-tze-ting-aleathea.jpg'
import bensonTan from './assets/benson-tan.jpg'
import samuelChew from './assets/samuel-chew.jpg'
import shaneTanLongKiat from './assets/shane-tan-long-kiat.jpg'
import brandonTan from './assets/brandon-tan.jpg'

const Team = () => (
  <div className="team container">
    <h2>Our Team</h2>
    <div className="team-members">
      <div className="team-member">
        <div className="team-member-top">
          <img src={tanTzeTingAleathea} alt="Tan Tze Ting Aleathea" className="team-member-photo" />
          <div className="team-member-divider"></div>
          <h3 className="team-member-name">Tan Tze Ting Aleathea</h3>
          <p className="team-member-role">Assistant Manager</p>
          <p className="team-member-info">
            If I had to describe myself in three words, they would be <span className="bold">empathetic</span>, <span className="bold">responsive</span>, and <span className="bold">humorous</span>.
          </p>
        </div>
        <NavLink to="/our-team/tan-tze-ting-aleathea" className="team-member-link">View Profile</NavLink>
      </div>
      <div className="team-member">
        <div className="team-member-top">
          <img src={bensonTan} alt="Benson Tan" className="team-member-photo" />
          <div className="team-member-divider"></div>
          <h3 className="team-member-name">Benson Tan</h3>
          <p className="team-member-role">General Insurance Agent</p>
          <p className="team-member-info">
            I am committed to maintaining a high level of professional competence, and this drives the way I serve every client.
          </p>
        </div>
        <NavLink to="/our-team/benson-tan" className="team-member-link">View Profile</NavLink>
      </div>
      <div className="team-member">
        <div className="team-member-top">
          <img src={samuelChew} alt="Samuel Chew" className="team-member-photo" />
          <div className="team-member-divider"></div>
          <h3 className="team-member-name">Samuel Chew</h3>
          <p className="team-member-role">General Insurance Agent</p>
          <p className="team-member-info">
            I am dedicated to giving my best in every client interaction.
          </p>
        </div>
        <NavLink to="/our-team/samuel-chew" className="team-member-link">View Profile</NavLink>
      </div>
      <div className="team-member">
        <div className="team-member-top">
          <img src={shaneTanLongKiat} alt="Shane Tan Long Kiat" className="team-member-photo" />
          <div className="team-member-divider"></div>
          <h3 className="team-member-name">Shane Tan Long Kiat</h3>
          <p className="team-member-role">General Insurance Agent</p>
          <p className="team-member-info">
            I believe consistent service is the cornerstone of long-term business resilience.
          </p>
        </div>
        <NavLink to="/our-team/shane-tan-long-kiat" className="team-member-link">View Profile</NavLink>
      </div>
      <div className="team-member">
        <div className="team-member-top">
          <img src={brandonTan} alt="Brandon Tan" className="team-member-photo" />
          <div className="team-member-divider"></div>
          <h3 className="team-member-name">Brandon Tan</h3>
          <p className="team-member-role">General Insurance Agent</p>
          <p className="team-member-info">
            
          </p>
        </div>
        <NavLink to="/our-team/brandon-tan" className="team-member-link">View Profile</NavLink>
      </div>
    </div>
  </div>
)

export default Team