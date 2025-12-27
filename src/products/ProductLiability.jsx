import img from '../assets/stock-product-liability.jpg'

const ProductLiability = () => (
  <div className="product container">
    <h2>Product Liability</h2>
    <div className="product-group">
      <img src={img} alt="Product Liability" onLoad={e => e.target.classList.add('visible')} />
      <p>Protects businesses against legal and financial claims arising from injury, illness, or property damage caused by their products. It covers defense costs, settlements, and judgments, helping companies manage risks, maintain consumer trust, and continue operations confidently.</p>
    </div>
  </div>
)

export default ProductLiability