import Image from 'next/image'
import tanTzeTingAleathea from '@/assets/tan-tze-ting-aleathea.jpg'

const TanTzeTingAleathea = () => (
  <div className="member container">
    <div className="member-left">
      <Image src={tanTzeTingAleathea} alt="Tan Tze Ting Aleathea" className="team-member-photo member-photo" />
      <div className="team-member-divider member-divider-top"></div>
      <h2 className="member-name">Tan Tze Ting Aleathea</h2>
      <p className="member-role">Assistant Manager</p>
      <div className="team-member-divider member-divider-bottom"></div>
    </div>
    <div className="member-right">
      <p className="member-paragraph">If I had to describe myself in three words, they would be <span className="bold">empathetic</span>, <span className="bold">responsive</span>, and <span className="bold">humorous</span>. Being empathetic means more than just listening; it's about truly understanding what my clients value and worry about. At work, I take time to hear out the unique concerns of corporate clients, carefully considering the nature of their business before recommending solutions. This allows me to craft customised insurance coverage that not only meets regulatory requirements but also provides a sense of assurance that their risks are being well-managed.</p>
      <p className="member-paragraph">Responsiveness is equally important to me. I believe that insurance is not just about policies—it's about timing, especially when urgent situations arise. That's why I make myself available round the clock, replying to emails, calls, or messages often within minutes. Clients appreciate that I keep things moving quickly, from policy issuance to claims processing, so they can focus on running their businesses without unnecessary delays.</p>
      <p className="member-paragraph">At the same time, I enjoy keeping things light-hearted. My sense of humor helps create an easy, enjoyable atmosphere with clients, reminding us that even in serious discussions about risk and protection, it's possible to smile and share a laugh. I've found that this not only makes meetings more pleasant but also builds stronger, lasting relationships.</p>
      <p className="member-paragraph">Beyond the office, I enjoy social drinking—whether it's sharing a casual evening with friends or meeting new people over a drink. It's a chance to relax, exchange stories, and enjoy good company, which keeps me refreshed and energized for the work I do.</p>
    </div>
  </div>
)

export default TanTzeTingAleathea