import Link from 'next/link'
import Image from 'next/image'
import tanTzeTingAleathea from '@/assets/tan-tze-ting-aleathea.webp'
import bensonTan from '@/assets/benson-tan.webp'
import samuelChew from '@/assets/samuel-chew.webp'
import shaneTanLongKiat from '@/assets/shane-tan-long-kiat.webp'
import brandonTan from '@/assets/brandon-tan.webp'
import ohYongShengXavier from '@/assets/oh-yong-sheng-xavier.webp'
import sohYongTat from '@/assets/soh-yong-tat.webp'
import chermaineSimHuiPing from '@/assets/chermaine-sim-hui-ping.webp'
import edwinHooChongChin from '@/assets/edwin-hoo-chong-chin.webp'
import jamesNgCheanMing from '@/assets/james-ng-chean-ming.webp'
import lindaChuaPeiMei from '@/assets/linda-chua-pei-mei.webp'
import reneDangSiaoLing from '@/assets/rene-dang-siao-ling.webp'

const Team = () => (
  <div className="team container">
    <h2>Our Team</h2>
    <div className="team-members">
      <div className="team-member">
        <div className="team-member-top">
          <Image src={tanTzeTingAleathea} alt="Tan Tze Ting Aleathea" loading="eager" className="team-member-photo" />
          <div className="team-member-divider"></div>
          <h3 className="team-member-name">Tan Tze Ting Aleathea</h3>
          <p className="team-member-role">Assistant Manager</p>
          <p className="team-member-info">
            If I had to describe myself in three words, they would be <span className="bold">empathetic</span>, <span className="bold">responsive</span>, and <span className="bold">humorous</span>.
          </p>
        </div>
        <Link href="/our-team/tan-tze-ting-aleathea" className="team-member-link">View Profile</Link>
      </div>
      <div className="team-member">
        <div className="team-member-top">
          <Image src={bensonTan} alt="Benson Tan" loading="eager" className="team-member-photo" />
          <div className="team-member-divider"></div>
          <h3 className="team-member-name">Benson Tan</h3>
          <p className="team-member-role">General Insurance Agent</p>
          <p className="team-member-info">
            I am committed to maintaining a high level of professional competence, and this drives the way I serve every client.
          </p>
        </div>
        <Link href="/our-team/benson-tan" className="team-member-link">View Profile</Link>
      </div>
      <div className="team-member">
        <div className="team-member-top">
          <Image src={samuelChew} alt="Samuel Chew" loading="eager" className="team-member-photo" />
          <div className="team-member-divider"></div>
          <h3 className="team-member-name">Samuel Chew</h3>
          <p className="team-member-role">General Insurance Agent</p>
          <p className="team-member-info">
            I am dedicated to giving my best in every client interaction.
          </p>
        </div>
        <Link href="/our-team/samuel-chew" className="team-member-link">View Profile</Link>
      </div>
      <div className="team-member">
        <div className="team-member-top">
          <Image src={shaneTanLongKiat} alt="Shane Tan Long Kiat" loading="eager" className="team-member-photo" />
          <div className="team-member-divider"></div>
          <h3 className="team-member-name">Shane Tan Long Kiat</h3>
          <p className="team-member-role">General Insurance Agent</p>
          <p className="team-member-info">
            I believe consistent service is the cornerstone of long-term business resilience.
          </p>
        </div>
        <Link href="/our-team/shane-tan-long-kiat" className="team-member-link">View Profile</Link>
      </div>
      <div className="team-member">
        <div className="team-member-top">
          <Image src={brandonTan} alt="Brandon Tan" loading="eager" className="team-member-photo" />
          <div className="team-member-divider"></div>
          <h3 className="team-member-name">Brandon Tan</h3>
          <p className="team-member-role">General Insurance Agent</p>
          <p className="team-member-info">
            At the heart of my practice is a strong commitment to being genuinely client-centric.
          </p>
        </div>
        <Link href="/our-team/brandon-tan" className="team-member-link">View Profile</Link>
      </div>
      <div className="team-member">
        <div className="team-member-top">
          <Image src={ohYongShengXavier} alt="Oh Yong Sheng Xavier" loading="eager" className="team-member-photo" />
          <div className="team-member-divider"></div>
          <h3 className="team-member-name">Oh Yong Sheng Xavier</h3>
          <p className="team-member-role">General Insurance Agent</p>
          <p className="team-member-info">
            I am deeply service-oriented and take pride in going the extra mile for my clients.
          </p>
        </div>
        <Link href="/our-team/oh-yong-sheng-xavier" className="team-member-link">View Profile</Link>
      </div>
      <div className="team-member">
        <div className="team-member-top">
          <Image src={sohYongTat} alt="Soh Yong Tat" loading="eager" className="team-member-photo" />
          <div className="team-member-divider"></div>
          <h3 className="team-member-name">Soh Yong Tat</h3>
          <p className="team-member-role">General Insurance Agent</p>
          <p className="team-member-info">
            I am a resourceful insurance consultant who is constantly seeking out opportunities.
          </p>
        </div>
        <Link href="/our-team/soh-yong-tat" className="team-member-link">View Profile</Link>
      </div>
      <div className="team-member">
        <div className="team-member-top">
          <Image src={chermaineSimHuiPing} alt="Chermaine Sim Hui Ping" loading="eager" className="team-member-photo" />
          <div className="team-member-divider"></div>
          <h3 className="team-member-name">Chermaine Sim Hui Ping</h3>
          <p className="team-member-role">General Insurance Agent</p>
          <p className="team-member-info">
            I take a client-focused approach to insurance, believing that effective solutions begin with a clear understanding.
          </p>
        </div>
        <Link href="/our-team/chermaine-sim-hui-ping" className="team-member-link">View Profile</Link>
      </div>
      <div className="team-member">
        <div className="team-member-top">
          <Image src={edwinHooChongChin} alt="Edwin Hoo Chong Chin" loading="eager" className="team-member-photo" />
          <div className="team-member-divider"></div>
          <h3 className="team-member-name">Edwin Hoo Chong Chin</h3>
          <p className="team-member-role">General Insurance Agent</p>
          <p className="team-member-info">
            
          </p>
        </div>
        <Link href="/our-team/edwin-hoo-chong-chin" className="team-member-link">View Profile</Link>
      </div>
      <div className="team-member">
        <div className="team-member-top">
          <Image src={jamesNgCheanMing} alt="James Ng Chean Ming" loading="eager" className="team-member-photo" />
          <div className="team-member-divider"></div>
          <h3 className="team-member-name">James Ng Chean Ming</h3>
          <p className="team-member-role">General Insurance Agent</p>
          <p className="team-member-info">
            
          </p>
        </div>
        <Link href="/our-team/james-ng-chean-ming" className="team-member-link">View Profile</Link>
      </div>
      <div className="team-member">
        <div className="team-member-top">
          <Image src={lindaChuaPeiMei} alt="Linda Chua Pei Mei" loading="eager" className="team-member-photo" />
          <div className="team-member-divider"></div>
          <h3 className="team-member-name">Linda Chua Pei Mei</h3>
          <p className="team-member-role">General Insurance Agent</p>
          <p className="team-member-info">
            
          </p>
        </div>
        <Link href="/our-team/linda-chua-pei-mei" className="team-member-link">View Profile</Link>
      </div>
      <div className="team-member">
        <div className="team-member-top">
          <Image src={reneDangSiaoLing} alt="Rene Dang Siao Ling" loading="eager" className="team-member-photo" />
          <div className="team-member-divider"></div>
          <h3 className="team-member-name">Rene Dang Siao Ling</h3>
          <p className="team-member-role">General Insurance Agent</p>
          <p className="team-member-info">
            I believe the foundation of great insurance service lies in the details.
          </p>
        </div>
        <Link href="/our-team/rene-dang-siao-ling" className="team-member-link">View Profile</Link>
      </div>
    </div>
  </div>
)

export default Team