import React from 'react'
import { Link } from 'react-router-dom';

const OurService = ({title , detail ,classimg}) => {
  return (
    <>
      <div
        className="icon-box d-flex position-relative"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <i className={classimg} />
        <div>
          <h4>
            <Link to="#" className="stretched-link stop" >
            {title}
            </Link>
          </h4>
          <p>
                      {detail}
                  </p>
        </div>
      </div>
    </>
  );
}

export default OurService
