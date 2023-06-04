import React from 'react'
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, detail, classimg ,sid}) => {
  return (
    <>
      <div
        className="col-lg-4 col-md-6 "
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <div className="service-item  position-relative">
          <div className="icon ">
            <i className={classimg} />
          </div>
          <h3>{title}</h3>
          <p >
           {detail}
          </p>
          <Link to={`/servicedetail/${sid}`} className="readmore stretched-link">
            Learn more <i className="bi bi-arrow-right" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceCard
