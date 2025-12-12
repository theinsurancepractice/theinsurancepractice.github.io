import cartoonFire from './assets/cartoon-fire.png'
import cartoonBusinessPackages from './assets/cartoon-business-packages.png'
import cartoonContractor from './assets/cartoon-contractor.png'
import cartoonMachinery from './assets/cartoon-machinery.png'
import cartoonPlateGlass from './assets/cartoon-plate-glass.png'
import cartoonCyberRisk from './assets/cartoon-cyber-risk.png'
import cartoonDirector from './assets/cartoon-director.png'
import cartoonFidelity from './assets/cartoon-fidelity.png'
import cartoonProductLiability from './assets/cartoon-product-liability.png'
import cartoonPublicLiability from './assets/cartoon-public-liability.png'
import cartoonProfessionalIndemnity from './assets/cartoon-professional-indemnity.png'
import cartoonWorkmenCompensation from './assets/cartoon-workmen-compensation.png'
import cartoonForeignWorker from './assets/cartoon-foreign-worker.png'
import cartoonSecurityBond from './assets/cartoon-security-bond.png'
import cartoonPerformanceBond from './assets/cartoon-performance-bond.png'
import cartoonRentalBond from './assets/cartoon-rental-bond.png'
import cartoonUndertakingBond from './assets/cartoon-undertaking-bond.png'
import cartoonEmployeeBenefits from './assets/cartoon-employee-benefits.png'
import cartoonCorporateTravel from './assets/cartoon-corporate-travel.png'
import cartoonMedicalPlans from './assets/cartoon-medical-plans.png'
import cartoonCommercialMotor from './assets/cartoon-commercial-motor.png'
import cartoonMarineCargo from './assets/cartoon-marine-cargo.png'
import cartoonFreightForwarder from './assets/cartoon-freight-forwarder.png'
import cartoonInlandTransit from './assets/cartoon-inland-transit.png'
import cartoonWarehousemanLiability from './assets/cartoon-warehouseman-liability.png'

const CorporateInsurance = () => (
  <div className="insurance container">
    <h2>Corporate Insurance</h2>
    <div className="insurance-group">
      <h3 className="insurance-group-title-first">Property & Casualty</h3>
      <div className="insurance-types">
        <div className="insurance-type">
          <img src={cartoonFire} alt="Fire / All Risk" />
          <h4>Fire / All Risk</h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonBusinessPackages} alt="Business Packages" />
          <h4>Business Packages</h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonContractor} alt="Contractor All Risk" />
          <h4>Contractor <span>All Risk</span></h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonMachinery} alt="Machinery All Risk" />
          <h4>Machinery <span>All Risk</span></h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonPlateGlass} alt="Plate Glass" />
          <h4>Plate Glass</h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonCyberRisk} alt="Cyber Risk" />
          <h4>Cyber Risk</h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonDirector} alt="Directors & Officers" />
          <h4>Directors & Officers</h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonFidelity} alt="Fidelity Guarantee" />
          <h4>Fidelity Guarantee</h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonProductLiability} alt="Product Liability" />
          <h4>Product Liability</h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonPublicLiability} alt="Public Liability" />
          <h4>Public Liability</h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonProfessionalIndemnity} alt="Professional Indemnity" />
          <h4>Professional Indemnity</h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonWorkmenCompensation} alt="Workmen Compensation" />
          <h4>Workmen Compensation</h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonForeignWorker} alt="Foreign Worker Medical" />
          <h4>Foreign Worker Medical</h4>
        </div>
      </div>
    </div>
    <div className="insurance-group">
      <h3>Bonds</h3>
      <div className="insurance-types">
        <div className="insurance-type">
          <img src={cartoonSecurityBond} alt="Security Bond" />
          <h4>Security Bond</h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonPerformanceBond} alt="Performance Bond" />
          <h4>Performance Bond</h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonRentalBond} alt="Rental Bond" />
          <h4>Rental Bond</h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonUndertakingBond} alt="Undertaking Bond" />
          <h4>Undertaking Bond</h4>
        </div>
      </div>
    </div>
    <div className="insurance-group">
      <h3>Staff Benefits</h3>
      <div className="insurance-types">
        <div className="insurance-type">
          <img src={cartoonEmployeeBenefits} alt="Employee Benefits" />
          <h4>Employee Benefits</h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonCorporateTravel} alt="Corporate Travel" />
          <h4>Corporate Travel</h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonMedicalPlans} alt="Medical Plans" />
          <h4>Medical Plans</h4>
        </div>
      </div>
    </div>
    <div className="insurance-group">
      <h3>Motor</h3>
      <div className="insurance-types">
        <div className="insurance-type">
          <img src={cartoonCommercialMotor} alt="Commercial Motor Fleet" />
          <h4>Commercial <span>Motor Fleet</span></h4>
        </div>
      </div>
    </div>
    <div className="insurance-group">
      <h3>Marine</h3>
      <div className="insurance-types">
        <div className="insurance-type">
          <img src={cartoonMarineCargo} alt="Marine Cargo" />
          <h4>Marine Cargo</h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonFreightForwarder} alt="Freight Forwarder" />
          <h4>Freight Forwarder</h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonInlandTransit} alt="Inland Transit" />
          <h4>Inland Transit</h4>
        </div>
        <div className="insurance-type">
          <img src={cartoonWarehousemanLiability} alt="Warehouseman Liability" />
          <h4>Warehouseman Liability</h4>
        </div>
      </div>
    </div>
  </div>
)

export default CorporateInsurance