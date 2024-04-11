import "@/styles/footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <h2>CONTACT US</h2>
        <div className="contact_info">
          <div className="contact_info-description">
            <p>We are a registered non-profit organization</p>
            <p>Registration No - 125145</p>
          </div>
          <div className="contact_info-location">
            <p>Itahari-20, Sunsari, Tarahara</p>
            <p>Phone No. 9815465254</p>
          </div>
        </div>
        <h2>tarahararun@gmail.com</h2>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d807.0997721494327!2d87.27455867482226!3d26.704140051638063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6bbc5edeb589%3A0x14a4bd2956a49202!2sManakamana%20digital%20Studio%20%26%20Video%20shooting%20centre!5e0!3m2!1sen!2snp!4v1712807785567!5m2!1sen!2snp"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="iframe_map"
        ></iframe>
      </div>
    </div>
  )
}
