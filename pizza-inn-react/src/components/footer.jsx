function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>
            <span className="pizza">PIZZA</span>{" "}
            <span className="inn">INN</span>
          </h2>

          <p>Kenya's signature pizza since 1998.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Order</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>Nairobi, Kenya</p>
          <p>+254 711 653 717</p>
          <p>customercare@ke-simbisa.com</p>
        </div>
      </div>

      <p className="footer-bottom">
        &copy; 2026 Pizza Inn Kenya. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;