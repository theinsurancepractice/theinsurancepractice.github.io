import img from '../assets/stock-directors-and-officers.jpg'

const DirectorsAndOfficers = () => (
  <div className="product container">
    <h2>Directors & Officers</h2>
    <div className="product-group">
      <img src={img} alt="Directors & Officers" onLoad={e => e.target.classList.add('visible')} />
      <p>Protects company leaders against personal financial loss arising from claims of wrongful acts made in the course of managing a business. It covers legal defense costs, settlements, and damages resulting from allegations such as mismanagement, breach of duty, negligence, or regulatory violations.</p>
    </div>
  </div>
)

export default DirectorsAndOfficers