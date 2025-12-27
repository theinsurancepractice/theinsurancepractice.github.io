import img from '../assets/stock-fire.jpg'

const Fire = () => (
  <div className="product container">
    <h2>Fire</h2>
    <div className="product-group">
      <img src={img} alt="Fire" onLoad={e => e.target.classList.add('visible')} />
      <p>Protects property and assets against damage or loss caused by fire, lightning, and explosions.</p>
    </div>
  </div>
)

export default Fire