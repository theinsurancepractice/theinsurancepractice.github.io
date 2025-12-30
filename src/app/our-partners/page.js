import Image from 'next/image'
import allianzLogo from '@/assets/allianz-logo.png'
import eqInsuranceLogo from '@/assets/eq-insurance-logo.png'
import libertyInsuranceLogo from '@/assets/liberty-insurance-logo.png'

const Partners = () => (
  <div className="partners container">
    <h2>Our Partners</h2>
    <div className="partners-logos">
      <Image src={allianzLogo} alt="Allianz Logo" className="partners-logo" />
      <Image src={eqInsuranceLogo} alt="EQ Insurance Logo" className="partners-logo" />
      <Image src={libertyInsuranceLogo} alt="Liberty Insurance Logo" className="partners-logo" />
      <Image src={eqInsuranceLogo} alt="EQ Insurance Logo" className="partners-logo" />
      <Image src={libertyInsuranceLogo} alt="Liberty Insurance Logo" className="partners-logo" />
      <Image src={allianzLogo} alt="Allianz Logo" className="partners-logo" />
      <Image src={libertyInsuranceLogo} alt="Liberty Insurance Logo" className="partners-logo" />
      <Image src={allianzLogo} alt="Allianz Logo" className="partners-logo" />
      <Image src={eqInsuranceLogo} alt="EQ Insurance Logo" className="partners-logo" />
      <Image src={libertyInsuranceLogo} alt="Liberty Insurance Logo" className="partners-logo" />
    </div>
  </div>
)

export default Partners