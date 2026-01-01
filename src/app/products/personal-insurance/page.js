import Link from 'next/link'
import Image from 'next/image'
import cartoonTravel from '@/assets/cartoon-travel.png'
import cartoonDomesticWorker from '@/assets/cartoon-domestic-worker.png'
import cartoonGolfer from '@/assets/cartoon-golfer.png'
import cartoonPet from '@/assets/cartoon-pet.png'
import cartoonFire from '@/assets/cartoon-fire-personal.png'
import cartoonMedicalPlans from '@/assets/cartoon-medical-plans.png'
import cartoonPersonalAccident from '@/assets/cartoon-personal-accident.png'
import cartoonMotor from '@/assets/cartoon-motor.png'

const PersonalInsurance = () => (
  <div className="insurance container">
    <h2>Personal Insurance</h2>
    <div className="insurance-group">
      <div className="insurance-types">
        <Link href="/products/personal-insurance/travel" className="insurance-type">
          <Image src={cartoonTravel} alt="Travel" loading="eager" />
          <h4>Travel</h4>
        </Link>
        <Link href="/products/personal-insurance/domestic-worker" className="insurance-type">
          <Image src={cartoonDomesticWorker} alt="Domestic Worker" loading="eager" />
          <h4>Domestic Worker</h4>
        </Link>
        <Link href="/products/personal-insurance/golfer" className="insurance-type">
          <Image src={cartoonGolfer} alt="Golfer" loading="eager" />
          <h4>Golfer</h4>
        </Link>
        <Link href="/products/personal-insurance/pet" className="insurance-type">
          <Image src={cartoonPet} alt="Pet" loading="eager" />
          <h4>Pet</h4>
        </Link>
        <Link href="/products/personal-insurance/fire" className="insurance-type">
          <Image src={cartoonFire} alt="Fire" loading="eager" />
          <h4>Fire</h4>
        </Link>
        <Link href="/products/personal-insurance/medical-plans" className="insurance-type">
          <Image src={cartoonMedicalPlans} alt="Medical Plans" loading="eager" />
          <h4>Medical Plans</h4>
        </Link>
        <Link href="/products/personal-insurance/personal-accident" className="insurance-type">
          <Image src={cartoonPersonalAccident} alt="Personal Accident" loading="eager" />
          <h4>Personal Accident</h4>
        </Link>
        <Link href="/products/personal-insurance/motor" className="insurance-type">
          <Image src={cartoonMotor} alt="Motor" loading="eager" />
          <h4>Motor</h4>
        </Link>
      </div>
    </div>
  </div>
)

export default PersonalInsurance