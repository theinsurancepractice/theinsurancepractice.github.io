const TriangleSvg = ({ angle, color }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill={color} 
    width="0.8rem" 
    height="0.8rem" 
    viewBox="0 0 13 7" 
    style={{ transform: `rotate(${angle}deg)`, transformOrigin: 'center', transition: 'transform 0.3s ease-in-out' }}
  >
    <path 
      d="
        M5.82415 6.38027
        C6.20651 6.73088 6.79349 6.73088 7.17585 6.38027
        L11.9669 1.98704
        C12.639 1.37072 12.203 0.25 11.291 0.25
        H1.70896
        C0.797032 0.25 0.360986 1.37072 1.03312 1.98704
        L5.82415 6.38027
        Z
      ">
    </path>
  </svg>
)

export default TriangleSvg