import AdministrativeStaffImage from './assets/administrative-staff.jpg'

const AdministrativeStaff = () => (
  <div className="career container">
    <h2>Administrative Staff</h2>
    <div className="career-content">
      <img src={AdministrativeStaffImage} alt="Administrative Staff" onLoad={e => e.target.classList.add('visible')} />
      <div>
        <h3>Benefits</h3>
        <ul>
          <li>Flexible working arrangements</li>
          <li>Conducive and supportive working environment</li>
          <li>Career progression prospects and personal growth</li>
        </ul>
      </div>
      <div>
        <h3>Current Openings</h3>
        <ul>
          <li>Claims handler</li>
          <li>Administrative officer</li>
          <li>Finance officer</li>
        </ul>
      </div>
      <p>
        Email your resume to: <a href="mailto:terencetan@tnlinsurance.sg">terencetan@tnlinsurance.sg</a>
      </p>
    </div>
  </div>
)

export default AdministrativeStaff