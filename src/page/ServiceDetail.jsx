import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import data from '../data/service'

const ServiceDetail = () => {

  const { id } = useParams();
 
  
  return (
    <>
      {data.serviceDetail.map((val,index) =>{
      return (
        String(val.id) === id && (
          <div key={index}>
            <main id="main">
              {/* ======= Breadcrumbs ======= */}
              <div
                className="breadcrumbs d-flex align-items-center"
                style={{
                  backgroundImage: `url(${val.himg})`,
                }}
              >
                <div
                  className="container position-relative d-flex flex-column align-items-center"
                  data-aos="fade"
                >
                  <h2>{val.name}</h2>
                </div>
              </div>
              {/* End Breadcrumbs */}
              {/* ======= Service Details Section ======= */}
              <section id="service-details" className="service-details">
                <div
                  className="container"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="row gy-4">
                    <div className="col-lg-4">
                      <div className="services-list">
                        {val.link.map((path , index) => {
                          return <Link className="active stop" key={index}>{path.l}</Link>;
                        })}
                      </div>
                      <h4>{val.stopic}</h4>
                      <p>{val.sdetail}</p>
                    </div>
                    <div className="col-lg-8">
                      <img
                        src={val.simg}
                        alt=""
                        className="img-fluid services-img"
                      />
                      <h4>{val.rtopic}</h4>
                      <br />
                      <p>{val.rdetail}</p>
                      <ul>
                        {val.point.map((point,index) => {
                          return (
                            <li key={index}>
                              <i className="bi bi-chevron-double-right" />
                              <span>{point.p}</span>
                            </li>
                          );})}
                       
                      </ul>
                      <p>{val.rdetail1}</p>
                      <p>{val.rdetail2}</p>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Service Details Section */}
            </main>
            {/* End =/main */}
            <Link
              to="/"
              className="scroll-top d-flex align-items-center justify-content-center"
            >
              <i className="bi bi-arrow-up-short"></i>
            </Link>
          </div>
        )
      );
        })}
    </>
  );
}

export default ServiceDetail

/*
At Aura Elevator, we offer professional new installation services for elevators. Our experienced team works closely with architects, builders, and property owners to ensure that our elevators are installed according to the highest standards, and in compliance of all safety regulations.

{" "} Customized designs to meet specific requirements of every project
{" "} Compliance with building codes, safety regulations, etc.
{" "} Use of high-quality materials and advanced technology
{" "} Installation services in a timely and efficient manner
We ensure that our elevators meet your needs while also providing safety and comfort to the users. With our new installation services, we guarantee you an elevator system that is efficient, reliable, and modern.

Trust Aura Elevator for professional new installation services that not only meets but exceeds your expectations. Contact us today and let us help you install an elevator that precisely matches your requirements.

*/
