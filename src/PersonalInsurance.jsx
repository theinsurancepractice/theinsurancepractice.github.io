import cartoonTravel from './assets/cartoon-travel.png'
import cartoonDomesticWorker from './assets/cartoon-domestic-worker.png'
import cartoonGolfer from './assets/cartoon-golfer.png'
import cartoonPet from './assets/cartoon-pet.png'
import cartoonFire from './assets/cartoon-fire-personal.png'
import cartoonMedicalPlans from './assets/cartoon-medical-plans.png'
import cartoonPersonalAccident from './assets/cartoon-personal-accident.png'
import cartoonMotor from './assets/cartoon-motor.png'

const PersonalInsurance = () => (
  <div className="insurance container">
    <h2>Personal Insurance</h2>
    <div className="insurance-group">
      <div className="insurance-types">
        <div className="insurance-type">
          <img src={cartoonTravel} alt="Travel" />
          <h4>Travel</h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonDomesticWorker} alt="Domestic Worker" />
          <h4>Domestic Worker</h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonGolfer} alt="Golfer" />
          <h4>Golfer</h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonPet} alt="Pet" />
          <h4>Pet</h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonFire} alt="Fire" />
          <h4>Fire</h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonMedicalPlans} alt="Medical Plans" />
          <h4>Medical Plans</h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonPersonalAccident} alt="Personal Accident" />
          <h4>Personal Accident</h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonMotor} alt="Motor" />
          <h4>Motor</h4>
        </div>
      </div>
    </div>
  </div>
)

export default PersonalInsurance