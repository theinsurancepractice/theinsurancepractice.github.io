import Link from 'next/link'
import Image from 'next/image'
import cartoonFire from '@/assets/cartoon-fire.png'
import cartoonBusinessPackages from '@/assets/cartoon-business-packages.png'
import cartoonContractor from '@/assets/cartoon-contractor.png'
import cartoonMachinery from '@/assets/cartoon-machinery.png'
import cartoonPlateGlass from '@/assets/cartoon-plate-glass.png'
import cartoonCyberRisk from '@/assets/cartoon-cyber-risk.png'
import cartoonDirector from '@/assets/cartoon-director.png'
import cartoonFidelity from '@/assets/cartoon-fidelity.png'
import cartoonProductLiability from '@/assets/cartoon-product-liability.png'
import cartoonPublicLiability from '@/assets/cartoon-public-liability.png'
import cartoonProfessionalIndemnity from '@/assets/cartoon-professional-indemnity.png'
import cartoonWorkmenCompensation from '@/assets/cartoon-workmen-compensation.png'
import cartoonForeignWorker from '@/assets/cartoon-foreign-worker.png'
import cartoonSecurityBond from '@/assets/cartoon-security-bond.png'
import cartoonPerformanceBond from '@/assets/cartoon-performance-bond.png'
import cartoonRentalBond from '@/assets/cartoon-rental-bond.png'
import cartoonUndertakingBond from '@/assets/cartoon-undertaking-bond.png'
import cartoonEmployeeBenefits from '@/assets/cartoon-employee-benefits.png'
import cartoonCorporateTravel from '@/assets/cartoon-corporate-travel.png'
import cartoonMedicalPlans from '@/assets/cartoon-medical-plans.png'
import cartoonCommercialMotor from '@/assets/cartoon-commercial-motor.png'
import cartoonMarineCargo from '@/assets/cartoon-marine-cargo.png'
import cartoonFreightForwarder from '@/assets/cartoon-freight-forwarder.png'
import cartoonInlandTransit from '@/assets/cartoon-inland-transit.png'
import cartoonWarehousemanLiability from '@/assets/cartoon-warehouseman-liability.png'

const CorporateInsurance = () => (
  <div className="insurance container">
    <h2>Corporate Insurance</h2>
    <div className="insurance-group">
      <h3 className="insurance-group-title-first">Property & Casualty</h3>
      <div className="insurance-types">
        <Link href="/products/corporate-insurance/fire-all-risk" className="insurance-type">
          <Image src={cartoonFire} alt="Fire / All Risk" loading="eager" />
          <h4>Fire / All Risk</h4>
        </Link>
        <Link href="/products/corporate-insurance/business-packages" className="insurance-type">
          <Image src={cartoonBusinessPackages} alt="Business Packages" loading="eager" />
          <h4>Business Packages</h4>
        </Link>
        <Link href="/products/corporate-insurance/contractor-all-risk" className="insurance-type">
          <Image src={cartoonContractor} alt="Contractor All Risk" loading="eager" />
          <h4>Contractor <span>All Risk</span></h4>
        </Link>
        <Link href="/products/corporate-insurance/machinery-all-risk" className="insurance-type">
          <Image src={cartoonMachinery} alt="Machinery All Risk" loading="eager" />
          <h4>Machinery <span>All Risk</span></h4>
        </Link>
        <Link href="/products/corporate-insurance/plate-glass" className="insurance-type">
          <Image src={cartoonPlateGlass} alt="Plate Glass" loading="eager" />
          <h4>Plate Glass</h4>
        </Link>
        <Link href="/products/corporate-insurance/cyber-risk" className="insurance-type">
          <Image src={cartoonCyberRisk} alt="Cyber Risk" loading="eager" />
          <h4>Cyber Risk</h4>
        </Link>
        <Link href="/products/corporate-insurance/directors-and-officers" className="insurance-type">
          <Image src={cartoonDirector} alt="Directors & Officers" loading="eager" />
          <h4>Directors & Officers</h4>
        </Link>
        <Link href="/products/corporate-insurance/fidelity-guarantee" className="insurance-type">
          <Image src={cartoonFidelity} alt="Fidelity Guarantee" loading="eager" />
          <h4>Fidelity Guarantee</h4>
        </Link>
        <Link href="/products/corporate-insurance/product-liability" className="insurance-type">
          <Image src={cartoonProductLiability} alt="Product Liability" loading="eager" />
          <h4>Product Liability</h4>
        </Link>
        <Link href="/products/corporate-insurance/public-liability" className="insurance-type">
          <Image src={cartoonPublicLiability} alt="Public Liability" loading="eager" />
          <h4>Public Liability</h4>
        </Link>
        <Link href="/products/corporate-insurance/professional-indemnity" className="insurance-type">
          <Image src={cartoonProfessionalIndemnity} alt="Professional Indemnity" loading="eager" />
          <h4>Professional Indemnity</h4>
        </Link>
        <Link href="/products/corporate-insurance/workmen-compensation" className="insurance-type">
          <Image src={cartoonWorkmenCompensation} alt="Workmen Compensation" loading="eager" />
          <h4>Workmen Compensation</h4>
        </Link>
        <Link href="/products/corporate-insurance/foreign-worker-medical" className="insurance-type">
          <Image src={cartoonForeignWorker} alt="Foreign Worker Medical" loading="eager" />
          <h4>Foreign Worker Medical</h4>
        </Link>
      </div>
    </div>
    <div className="insurance-group">
      <h3>Bonds</h3>
      <div className="insurance-types">
        <Link href="/products/corporate-insurance/security-bond" className="insurance-type">
          <Image src={cartoonSecurityBond} alt="Security Bond" loading="eager" />
          <h4>Security Bond</h4>
        </Link>
        <Link href="/products/corporate-insurance/performance-bond" className="insurance-type">
          <Image src={cartoonPerformanceBond} alt="Performance Bond" loading="eager" />
          <h4>Performance Bond</h4>
        </Link>
        <Link href="/products/corporate-insurance/rental-bond" className="insurance-type">
          <Image src={cartoonRentalBond} alt="Rental Bond" loading="eager" />
          <h4>Rental Bond</h4>
        </Link>
        <Link href="/products/corporate-insurance/undertaking-bond" className="insurance-type">
          <Image src={cartoonUndertakingBond} alt="Undertaking Bond" loading="eager" />
          <h4>Undertaking Bond</h4>
        </Link>
      </div>
    </div>
    <div className="insurance-group">
      <h3>Staff Benefits</h3>
      <div className="insurance-types">
        <Link href="/products/corporate-insurance/employee-benefits" className="insurance-type">
          <Image src={cartoonEmployeeBenefits} alt="Employee Benefits" loading="eager" />
          <h4>Employee Benefits</h4>
        </Link>
        <Link href="/products/corporate-insurance/corporate-travel" className="insurance-type">
          <Image src={cartoonCorporateTravel} alt="Corporate Travel" loading="eager" />
          <h4>Corporate Travel</h4>
        </Link>
        <Link href="/products/corporate-insurance/medical-plans" className="insurance-type">
          <Image src={cartoonMedicalPlans} alt="Medical Plans" loading="eager" />
          <h4>Medical Plans</h4>
        </Link>
      </div>
    </div>
    <div className="insurance-group">
      <h3>Motor</h3>
      <div className="insurance-types">
        <Link href="/products/corporate-insurance/commercial-motor-fleet" className="insurance-type">
          <Image src={cartoonCommercialMotor} alt="Commercial Motor Fleet" loading="eager" />
          <h4>Commercial <span>Motor Fleet</span></h4>
        </Link>
      </div>
    </div>
    <div className="insurance-group">
      <h3>Marine</h3>
      <div className="insurance-types">
        <Link href="/products/corporate-insurance/marine-cargo" className="insurance-type">
          <Image src={cartoonMarineCargo} alt="Marine Cargo" loading="eager" />
          <h4>Marine Cargo</h4>
        </Link>
        <Link href="/products/corporate-insurance/freight-forwarder" className="insurance-type">
          <Image src={cartoonFreightForwarder} alt="Freight Forwarder" loading="eager" />
          <h4>Freight Forwarder</h4>
        </Link>
        <Link href="/products/corporate-insurance/inland-transit" className="insurance-type">
          <Image src={cartoonInlandTransit} alt="Inland Transit" loading="eager" />
          <h4>Inland Transit</h4>
        </Link>
        <Link href="/products/corporate-insurance/warehouseman-liability" className="insurance-type">
          <Image src={cartoonWarehousemanLiability} alt="Warehouseman Liability" loading="eager" />
          <h4>Warehouseman Liability</h4>
        </Link>
      </div>
    </div>
  </div>
)

export default CorporateInsurance