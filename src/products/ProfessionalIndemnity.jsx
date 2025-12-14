import img from '../assets/stock-professional-indemnity.jpg'

const ProfessionalIndemnity = () => (
  <div className="product container">
    <h2>Professional Indemnity</h2>
    <div className="product-group">
      <img src={img} alt="Professional Indemnity" />
      <p>Protects professionals against claims alleging that their advice, service, or work caused a client financial loss. It typically covers legal defence costs, settlements, and damages arising from mistakes, negligence, breach of duty, or incorrect advice.</p>
    </div>
  </div>
)

export default ProfessionalIndemnity