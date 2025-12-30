import Image from 'next/image'
import samuelChew from '@/assets/samuel-chew.jpg'

const SamuelChew = () => (
  <div className="member container">
    <div className="member-left">
      <Image src={samuelChew} alt="Samuel Chew" className="team-member-photo member-photo" />
      <div className="team-member-divider member-divider-top"></div>
      <h2 className="member-name">Samuel Chew</h2>
      <p className="member-role">General Insurance Agent</p>
      <div className="team-member-divider member-divider-bottom"></div>
    </div>
    <div className="member-right">
      <p className="member-paragraph">I am dedicated to giving my best in every client interaction. Whether I'm preparing recommendations, reviewing policies, or guiding someone through an important decision, I bring consistent effort, thorough preparation, and reliable follow-through. Clients feel my commitment from the moment we begin working together, and I take pride in delivering a service experience built on care and professionalism.</p>
      <p className="member-paragraph">Trust is at the heart of my work. I believe that clear communication, steady actions, and genuine integrity are what make people feel confident placing significant decisions in my hands. By staying honest, dependable, and transparent, I aim to create an environment where clients feel safe, supported, and fully informed at every step.</p>
      <p className="member-paragraph">Authenticity is equally important to me. Outside of work, I remain grounded in who I am — a family-focused, down-to-earth individual who values meaningful connections and real conversations. These personal values shape the way I build relationships professionally, reminding me that behind every policy or financial decision is a person with hopes, responsibilities, and loved ones.</p>
      <p className="member-paragraph">My goal is simple: to serve with sincerity, reliability, and dedication, so every client feels heard, understood, and well taken care of.</p>
    </div>
  </div>
)

export default SamuelChew