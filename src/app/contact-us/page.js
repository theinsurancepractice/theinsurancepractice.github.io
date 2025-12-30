import Form from '@/components/Form'
import PhoneSvg from '@/svg/PhoneSvg'
import EmailSvg from '@/svg/EmailSvg'

const Contact = () => (
  <div className="contact container">
    <h2>Contact Us</h2>
    <p className="contact-description">Feel free to contact us for enquiries about our products, collaborations or career opportunities.</p>
    <div className="contact-method">
      <PhoneSvg />
      <div className="contact-method-details">
        <div className="contact-method-header">
          <h3>Call Us</h3>
          <PhoneSvg />
        </div>
        <a href="tel:+6596888238">(+65) 9688 8238</a>
      </div>
    </div>
    <div className="contact-method-divider"></div>
    <div className="contact-method">
      <EmailSvg />
      <div className="contact-method-details">
        <div className="contact-method-header">
          <h3>Email Us</h3>
          <EmailSvg />
        </div>
        <a href="mailto:info@theinsurancepractice.com">info@theinsurancepractice.com</a>
      </div>
    </div>
    <Form />
  </div>
)

export default Contact