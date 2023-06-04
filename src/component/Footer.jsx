import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-content position-relative">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-info">
                  <h3>
                    {" "}
                    <img
                      src="https://i.postimg.cc/j2djRTFN/AURA-FILE.gif"
                      alt=""
                      style={{ height: "100px", width: "150px" }}
                    />
                  </h3>
                  <p>
                    <Link
                      to="https://goo.gl/maps/uWu83fRPxYBwcQjv5"
                      target="_blank"
                    >
                      Shop no 236, city classic complex, <br />
                      Jivraj Park Main Rd, Mota Mava, Rajkot, Gujarat 360004
                    </Link>

                    <br />
                    <br />
                    <strong></strong>
                    {/* <Link to="tel:+919909965265" target="_blank">
                      Phone: +919909965265
                    </Link> */}
                    <br />
                    <Link to="tel:+919909965265" target="_blank">
                      Customer Care: +917990809661
                    </Link>
                    <br />
                    <strong></strong>
                    <Link
                      to="mailto: auraelevators2023@gmail.com"
                      target="_blank"
                    >
                      Email: auraelevators2023@gmail.com
                    </Link>
                    <br />
                  </p>
                  <div className="social-links d-flex mt-3">
                    {/* <Link
                      to="/"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-twitter" />
                    </Link> */}
                    <Link
                      to="https://www.facebook.com/profile.php?id=100092633316766"
                      target="_blank"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-facebook" />
                    </Link>
                    <Link
                      to="https://www.instagram.com/auraelevators/"
                      target="_blank"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-instagram" />
                    </Link>
                    {/* <Link
                      to="https://www.facebook.com/my-facebook-page"
                      target="_blank"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-linkedin" />
                    </Link> */}
                  </div>
                </div>
              </div>
              {/* End footer info column*/}
              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <Link to="/" onClick={scrollToTop}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={scrollToTop}>
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link to="/service" onClick={scrollToTop}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/contect" onClick={scrollToTop}>
                      contact
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/" onClick={scrollToTop}>
                      Privacy policy
                    </Link>
                  </li> */}
                </ul>
              </div>
              {/* End footer links column*/}
              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Our Services</h4>
                <ul>
                  {/* <li>
                    <Link to="/" onClick={scrollToTop}>
                      manufacture{" "}
                    </Link>
                  </li> */}
                  <li>
                    <Link to="servicedetail/425698123" onClick={scrollToTop}>
                      Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link to="servicedetail/458563214" onClick={scrollToTop}>
                      New Installation
                    </Link>
                  </li>
                  <li>
                    <Link to="servicedetail/745863225" onClick={scrollToTop}>
                      Modernization
                    </Link>
                  </li>
                </ul>
              </div>
              {/* End footer links column*/}
              <div className="col-lg-4 col-md-3 footer-links">
                <h4>AURA ELEVATORS</h4>
                <ul style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                  <li>
                    Aura Elevators in Rajkot is one of the leading businesses in
                    the Industries of Elevator.
                  </li>

                  <li>
                    We are well-known establishment acts as a one- stop
                    destination servicing customers both local and from other
                    parts of Rajkot.
                  </li>
                </ul>
              </div>
              {/* End footer links column*/}
              {/* <div className="col-lg-2 col-md-3 footer-links">
                <h4>Nobis illum</h4>
                <ul>
                  <li>
                    <Link to="/">Ipsam</Link>
                  </li>
                  <li>
                    <Link to="/">Laudantium dolorum</Link>
                  </li>
                  <li>
                    <Link to="/">Dinera</Link>
                  </li>
                  <li>
                    <Link to="/">Trodelas</Link>
                  </li>
                  <li>
                    <Link to="/">Flexo</Link>
                  </li>
                </ul>
              </div> */}
              {/* End footer links column*/}
            </div>
          </div>
        </div>
        <div className="footer-legal text-center position-relative">
          <div className="container">
            <div className="copyright">
              © Copyright{" "}
              <strong>
                <span>AURA ELEVATORS</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/upconstruction-bootstrap-construction-website-template/ */}
              Designed by{" "}
              <Link to="/" className="stop">
                Monil Nariya
              </Link>
            </div>
          </div>
        </div>
        {/* <a
          href="#"
          className="scroll-top d-flex align-items-center justify-content-center active"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a> */}
      </footer>
    </>
  );
}

export default Footer
