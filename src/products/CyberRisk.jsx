import img from '../assets/stock-cyber-risk.jpg'

const CyberRisk = () => (
  <div className="product container">
    <h2>Cyber Risk</h2>
    <div className="product-group">
      <img src={img} alt="Cyber Risk" onLoad={e => e.target.classList.add('visible')} />
      <p>Protects businesses from financial losses resulting from cyber attacks, data breaches, and system disruptions. It typically covers costs related to data recovery, business interruption, cyber extortion, legal liabilities, and incident response services. This policy helps organizations manage the impact of cyber incidents, maintain operations, and safeguard their digital assets and reputation.</p>
    </div>
  </div>
)

export default CyberRisk