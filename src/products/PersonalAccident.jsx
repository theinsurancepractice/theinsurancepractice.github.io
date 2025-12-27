import img from '../assets/stock-personal-accident.jpg'

const PersonalAccident = () => (
  <div className="product container">
    <h2>Personal Accident</h2>
    <div className="product-group">
      <img src={img} alt="Personal Accident" onLoad={e => e.target.classList.add('visible')} />
      <p>Provides financial protection in the event of accidental injury, disability, or death. It covers medical expenses, compensation for loss of income, and other accident-related costs.</p>
    </div>
  </div>
)

export default PersonalAccident