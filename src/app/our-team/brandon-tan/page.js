import brandonTan from '@/assets/brandon-tan.jpg'

const BrandonTan = () => (
  <div className="member container">
    <div className="member-left">
      <Image src={brandonTan} alt="Brandon Tan" className="team-member-photo member-photo" />
      <div className="team-member-divider member-divider-top"></div>
      <h2 className="member-name">Brandon Tan</h2>
      <p className="member-role">General Insurance Agent</p>
      <div className="team-member-divider member-divider-bottom"></div>
    </div>
    <div className="member-right">
      <p className="member-paragraph"></p>
      <p className="member-paragraph"></p>
      <p className="member-paragraph"></p>
    </div>
  </div>
)

export default BrandonTan