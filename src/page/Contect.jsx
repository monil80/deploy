import React from 'react'
import ContectForm from '../component/ContectForm';
import { Link } from 'react-router-dom';
const Contect = () => {

    const linkStyle = {
      color: "black",
      textDecoration: "none",
      cursor: "pointer",
      transition: "all 0.4s ease 0s",
    };

    const hoverStyle = {
      color: "#1e849d",
    };

  
  return (
    <>
      <div
        className="breadcrumbs d-flex align-items-center"
        style={{
          backgroundImage:
            'url("https://i.postimg.cc/QtVzW9Wg/istockphoto-1129113667-612x612.jpg")',
        }}
      >
        <div
          className="container position-relative d-flex flex-column align-items-center"
          data-aos="fade"
        >
          <h2>Contact</h2>
        </div>
      </div>
      {/* End Breadcrumbs */}
      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-map" />
                <h3>Visit Us</h3>
                <p>
                  <Link
                    to="https://goo.gl/maps/uWu83fRPxYBwcQjv5"
                    target="_blank"
                    style={linkStyle}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = hoverStyle.color)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = linkStyle.color)
                    }
                  >
                    Shop no 236, city classic complex, Jivraj Park Main Rd, Mota
                    Mava, Rajkot, Gujarat 360004
                  </Link>
                </p>
              </div>
            </div>
            {/* End Info Item */}
            <div className="col-lg-3 col-md-6">
              <div className="info-item d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-envelope" />
                <h3>Email Us</h3>
                <p>
                  {" "}
                  <Link
                    to="mailto: auraelevators2023@gmail.com"
                    target="_blank"
                    style={linkStyle}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = hoverStyle.color)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = linkStyle.color)
                    }
                  >
                    Email: auraelevators2023@gmail.com
                  </Link>
                </p>
              </div>
            </div>
            {/* End Info Item */}
            <div className="col-lg-3 col-md-6">
              <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-telephone" />
                <h3>Call Us</h3>
                <p>
                  {" "}
                  <Link
                    to="tel:+919909965265"
                    target="_blank"
                    style={linkStyle}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = hoverStyle.color)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = linkStyle.color)
                    }
                  >
                    +917990809661
                  </Link>
                </p>
              </div>
            </div>
            {/* End Info Item */}
          </div>
          <div className="row gy-4 mt-1">
            <div className="col-lg-6 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.4665021648875!2d70.76877137496662!3d22.260311879715356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x611e1d67e1849215%3A0x11b76a30d439dfb2!2sAura%20elevators!5e0!3m2!1sen!2sin!4v1683692388277!5m2!1sen!2sin"
                frameBorder={0}
                style={{ border: 0, width: "100%", height: "384px" }}
                allowFullScreen
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
            {/* End Google Maps */}
            <div className="col-lg-6">
              <ContectForm />
            </div>
            {/* End Contact Form */}
          </div>
        </div>
      </section>
      {/* End Contact Section */}
      <a
        href="/"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default Contect
