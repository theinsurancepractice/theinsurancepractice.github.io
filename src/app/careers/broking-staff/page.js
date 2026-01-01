import Image from 'next/image'
import BrokingStaffImage from '@/assets/broking-staff.webp'

const BrokingStaff = () => (
  <div className="career container">
    <h2>Broking Staff</h2>
    <div className="career-content">
      <Image src={BrokingStaffImage} alt="Broking Staff" loading="eager" />
      <div>
        <h3>Benefits</h3>
        <ul>
          <li>Comprehensive 1 to 1 coaching to enhance insurance understanding</li>
          <li>GI as entry point to life insurance sales</li>
          <li>Team building and networking</li>
        </ul>
      </div>
      <blockquote>
        <p>
          “From my first day as a broking staff, I was never left to figure things out alone. 
          There was constant hand-holding, patient guidance, and genuine coaching from experienced 
          mentors who are true experts in the field. What surprised me most was the sense of homeliness. 
          Everyone is willing to help, to share, and to grow together. It truly feels like being part 
          of a big family that looks out for one another while pushing each other to become better 
          professionals every day. Joining the TIP family opened the door to invaluable networks 
          which converted into sales.”
        </p>
        <footer>
          — <cite>Yi Cheng, life insurance agent in his 7th year with TIP</cite>
        </footer>
      </blockquote>
      <blockquote>
        <p>
          “When I first joined as a broking staff, I thought my role was simply to arrange insurance. 
          What I did not expect was how much the journey would shape my character. In a world of 
          financial turbulence and uncertainty, I learned how to assess risks beyond what is visible, 
          plan meaningful protection for businesses, and stand by clients when challenges arise. 
          Each case taught me resilience, responsibility, and the true importance of trust. Today, 
          I take pride in knowing that my work contributes to strengthening companies against adversity, 
          not just protecting their balance sheets.”
        </p>
        <footer>
          — <cite>Aleathea, fresh graduate joining TIP</cite>
        </footer>
      </blockquote>
      <div>
      <h3>Eligibility</h3>
        <ul>
          <li>Minimum GCE 'O' level qualification</li>
          <li>
            Obtained certification in:
            <ul>
              <li>Basic Insurance Concepts and Principles (BCP)</li>
              <li>Personal General Insurance (PGI)</li>
              <li>Commercial General Insurance (ComGI)</li>
              <li>Health Insurance (HI)</li>
            </ul>
          </li>
          <li>Motivated, compassionate and versatile</li>
        </ul>
      </div>
      <p>
        Keen to join our family? Contact us @ <a href="tel:+6596888238">9688 8238</a>
      </p>
    </div>
  </div>
)

export default BrokingStaff