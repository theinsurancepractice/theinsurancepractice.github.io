import img from '../assets/stock-medical-plans.jpg'

const MedicalPlans = () => (
  <div className="product container">
    <h2>Medical Plans</h2>
    <div className="product-group">
      <img src={img} alt="Medical Plans" />
      <p>Provide comprehensive health protection for individuals who live, work, or travel abroad. These plans typically include inpatient and outpatient care, emergency medical treatment, evacuation and repatriation, and access to a global network of medical providers.</p>
    </div>
  </div>
)

export default MedicalPlans