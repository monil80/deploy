import React from 'react'
import data from '../data/service'
import ServiceCard from '../component/ServiceCard';

const Service = () => {
  return (
    <>
      <div>
        <main id="main">
          {/* ======= Breadcrumbs ======= */}
          <div
            className="breadcrumbs d-flex align-items-center"
            style={{
              backgroundImage:
                'url("https://i.postimg.cc/W1PNXSX8/services.jpg")',
            }}
          >
            <div
              className="container position-relative d-flex flex-column align-items-center"
              data-aos="fade"
            >
              <h2>Services</h2>
            </div>
          </div>
          {/* End Breadcrumbs */}
          {/* ======= Services Section ======= */}
          <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">
              <div className="row gy-4">
                {data.serviceCard.map((val, index) => {
                  return (
                    <ServiceCard
                      key={index}
                      title={val.title}
                      detail={val.detail}
                      classimg={val.classimg}
                      sid={val.id}
                    />
                  );
                })}

                {/* End Service Item */}
              </div>
            </div>
          </section>
          {/* End Services Section */}
          {/* ======= Servie Cards Section ======= */}
          <section id="services-cards" className="services-cards">
            <div className="container" data-aos="fade-up">
              <div className="row gy-4">
                {/* <div
                  className="col-lg-3 col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <h3>Quasi eaque omnis</h3>
                  <p>
                    Eius non minus autem soluta ut ui labore omnis quisquam
                    corrupti autem odit voluptas quos commodi magnam occaecati.
                  </p>
                  <ul className="list-unstyled">
                    <li>
                      <i className="bi bi-check2" />{" "}
                      <span>Ullamco laboris nisi ut aliquip</span>
                    </li>
                    <li>
                      <i className="bi bi-check2" />{" "}
                      <span>Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li>
                      <i className="bi bi-check2" />{" "}
                      <span>Ullamco laboris nisi ut aliquip ex ea</span>
                    </li>
                  </ul>
                </div> */}
                {/* End feature item*/}
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <h3>New Elevator Installation</h3>
                  <p>
                    Installing a new elevator requires careful planning and
                    execution. Factors such as the building layout, traffic
                    patterns, and safety requirements must be considered during
                    the design process. Skilled technicians are then needed to
                    install and test the elevator for optimal performance.
                  </p>
                  <ul className="list-unstyled">
                    <li>
                      <i className="bi bi-check2" />{" "}
                      <span>Designing according to building needs</span>
                    </li>
                    <li>
                      <i className="bi bi-check2" />{" "}
                      <span>Expert installation and testing</span>
                    </li>
                    <li>
                      <i className="bi bi-check2" />{" "}
                      <span>Compliance with safety regulations</span>
                    </li>
                  </ul>
                </div>
                {/* End feature item*/}
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <h3>Elevator Maintenance</h3>
                  <p>
                    Proper elevator maintenance is crucial for safe and reliable
                    operation. Technicians must carefully manage the maintenance
                    process to ensure elevators continue to operate efficiently.
                    Unexpected issues may arise, and experienced technicians are
                    needed to diagnose and repair problems quickly to minimize
                    downtime.
                  </p>
                  <ul className="list-unstyled">
                    <li>
                      <i className="bi bi-check2" />{" "}
                      <span>Scheduling routine inspections</span>
                    </li>
                    <li>
                      <i className="bi bi-check2" />{" "}
                      <span>Cleaning and maintenance tasks</span>
                    </li>
                    <li>
                      <i className="bi bi-check2" />{" "}
                      <span>Performing repairs and upgrades as needed</span>
                    </li>
                  </ul>
                </div>

                {/* End feature item*/}
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay={400}
                >
                  <h3>Elevator Modernization</h3>
                  <p>
                    modernization an elevator can improve its performance,
                    energy efficiency, and aesthetics. It can involve replacing
                    old components with modern ones or adding new features such
                    as destination dispatch. Upgrades also help ensure that
                    elevators comply with current safety codes and regulations.
                  </p>
                  <ul className="list-unstyled">
                    <li>
                      <i className="bi bi-check2" />{" "}
                      <span>Improved performance and efficiency</span>
                    </li>
                    <li>
                      <i className="bi bi-check2" />{" "}
                      <span>New components and features</span>
                    </li>
                    <li>
                      <i className="bi bi-check2" />{" "}
                      <span>Compliance with safety codes and regulations</span>
                    </li>
                  </ul>
                </div>

                {/* End feature item*/}
              </div>
            </div>
          </section>
          {/* End Servie Cards Section */}
          {/* ======= Alt Services Section 2 ======= */}

          {/* End Alt Services Section 2 */}
          {/* ======= Alt Services Section ======= */}

          {/* End Alt Services Section */}
          {/* ======= Testimonials Section ======= */}

          {/* End Testimonials Section */}
        </main>
        {/* End #main */}
        <a
          href="/"
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
      </div>
    </>
  );
}

export default Service


/*
Manufacture: We specialize in manufacturing elevators that meet the unique specifications of our clients. Our team of engineers and technicians works closely with our clients to design and build elevators that meet their specific requirements. We use high-quality materials and the latest technology to ensure that our elevators are durable, reliable, and safe.

Maintenance: We understand that elevators need regular maintenance to ensure that they operate efficiently and safely. That's why we offer comprehensive maintenance services for all makes and models of elevators. Our team of experienced technicians will perform routine inspections, testing, and repairs to keep your elevator operating smoothly.

New Installation: If you are building a new property or renovating an existing one, Aura Elevator can help you with the installation of a new elevator. We work closely with architects, builders, and property owners to ensure that our elevators are installed correctly and on time. Our team will ensure that your elevator meets all safety regulations and standards.



At Aura Elevator, we are committed to providing our customers with exceptional elevator services. Whether you need a new elevator installed, maintenance services, or an upgrade to an existing system, we have the expertise and experience to meet your needs.
*/