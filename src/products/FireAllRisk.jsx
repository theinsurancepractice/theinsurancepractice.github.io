import img from '../assets/stock-fire-all-risk.jpg'

const FireAllRisk = () => (
  <div className="product container">
    <h2>Fire / All Risk</h2>
    <div className="product-group">
      <img src={img} alt="Fire / All Risk" onLoad={e => e.target.classList.add('visible')} />
      <p>Protects buildings, equipment, and other physical assets against accidental, sudden, and unforeseen losses. Fire insurance covers damage caused specifically by fire, lightning, and explosions, while All Risk policies offer broader protection, covering all accidental physical loss or damage unless it is specifically excluded (e.g. wear and tear, war, intentional acts).</p>
    </div>
  </div>
)

export default FireAllRisk