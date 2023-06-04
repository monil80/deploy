import React from 'react'
import { Link } from 'react-router-dom';

const ProjectDetail = () => {
  return (
    <>
      <div>
        <main id="main">
          {/* ======= Breadcrumbs ======= */}
          <div
            className="breadcrumbs d-flex align-items-center"
            style={{ backgroundImage: 'url("assets/img/breadcrumbs-bg.jpg")' }}
          >
            <div
              className="container position-relative d-flex flex-column align-items-center"
              data-aos="fade"
            >
              <h2>Product Details</h2>
            </div>
          </div>
          {/* End Breadcrumbs */}
          {/* ======= Projet Details Section ======= */}
          <section id="project-details" className="project-details">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
            
              <section id="hero" className="hero">
                <div className="info d-flex align-items-center">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-6 text-center">
                      
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="hero-carousel"
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval={5000}
                >
                  <div
                    className="carousel-item active"
                    style={{
                      backgroundImage:
                        "url(https://i.postimg.cc/R0PXvs8X/michael-rosch-0h-Rzzm-YEao-unsplash.jpg)",
                    }}
                  />
                  <div
                    className="carousel-item"
                    style={{
                      backgroundImage:
                        "url(https://i.postimg.cc/HxRzyJTM/owen-cannon-c-WLTa-VPCGy-A-unsplash.jpg)",
                    }}
                  />
                  <div
                    className="carousel-item"
                    style={{
                      backgroundImage:
                        "url(assets/img/hero-carousel/hero-carousel-3.jpg)",
                    }}
                  />
                  <div
                    className="carousel-item"
                    style={{
                      backgroundImage:
                        "url(https://i.postimg.cc/hPRCK3M1/Screenshot-2023-05-11-233252.png)",
                    }}
                  />
                  <div
                    className="carousel-item"
                    style={{
                      backgroundImage:
                        "url(assets/img/hero-carousel/hero-carousel-5.jpg)",
                    }}
                  />
                  <Link
                    className="carousel-control-prev"
                    to="#hero-carousel"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon bi bi-chevron-left"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link
                    className="carousel-control-next"
                    to="#hero-carousel"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon bi bi-chevron-right"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </section>
              <div className="row justify-content-between gy-4 mt-4">
                <div className="col-lg-8">
                  <div className="portfolio-description">
                    <h2>
                      Passenger Elevator - An Example of Quality Elevator
                      Systems
                    </h2>
                    <p>
                      Passenger elevators are vital components of modern
                      buildings that provide mobility for tenants, visitors, and
                      staff. At Aura Elevator, we specialize in designing,
                      manufacturing, and installing high-quality passenger
                      elevator systems that meet or exceed the demands of any
                      building project.
                    </p>
                    <p>
                      Our passenger elevator systems are designed with safety,
                      reliability, and efficiency in mind. Equipped with
                      state-of-the-art features and technology, our elevators
                      offer smooth and comfortable rides that enhance the users'
                      experience.
                    </p>
                    <div className="testimonial-item">
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        Aura Elevators passenger elevators are truly remarkable.
                        They are reliable, efficient, and provide a comfortable
                        ride experience. I highly recommend their services to
                        anyone looking for quality elevator systems.
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                      <div>
                        <img
                          src="assets/img/testimonials/testimonials-2.jpg"
                          className="testimonial-img"
                          alt=""
                        />
                        <h3>Sara Wilsson</h3>
                        <h4>Designer</h4>
                      </div>
                    </div>
                    <p>
                      Our passenger elevators are customizable to fit your
                      specific requirements. We offer a range of design options
                      to choose from, including various materials such as glass,
                      stainless steel, and wood. We also have different cab
                      sizes, finishes, lighting, and fixtures to choose from,
                      ensuring that your elevator system meets your standards
                      and needs.
                    </p>
                    <p>
                      At Aura Elevator, we pride ourselves on providing
                      professional installation, maintenance, and repair
                      services for all types of elevator systems, including
                      passenger elevators. We guarantee reliable and efficient
                      elevator systems that meet all safety regulations and
                      building codes.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="portfolio-info">
                    <h3>Project information</h3>
                    <ul>
                      <li>
                        <strong>Category</strong> <span>Web design</span>
                      </li>
                      <li>
                        <strong>Client</strong> <span>ASU Company</span>
                      </li>
                      <li>
                        <strong>Project date</strong>{" "}
                        <span>01 March, 2020</span>
                      </li>
                      <li>
                        <strong>Project URL</strong>{" "}
                        <a href="/">www.example.com</a>
                      </li>
                      <li>
                        <a href="/" className="btn-visit align-self-start">
                          Visit Website
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Projet Details Section */}
        </main>
        {/* End /main */}
      </div>
    </>
  );
}

export default ProjectDetail
