import React from 'react'
import { Link } from 'react-router-dom';


const OurTeam = ({name , detail , post , img }) => {
  return (
    <>
      <div
        className="col-lg-4 col-md-6 member"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <div className="member-img">
          <img src={img} className="img-fluid" alt=""  style={{height:"200px",width:"260px"}}/>
          <div className="social">
            <Link  to="https://www.facebook.com/profile.php?id=100092633316766"
                      target="_blank">
              <i className="bi bi-facebook" />
            </Link>
            <Link  to="https://www.instagram.com/auraelevators/"
                      target="_blank">
              <i className="bi bi-instagram" />
            </Link>
           
          </div>
        </div>
        <div className="member-info text-center">
          <h4>{name}</h4>
          <span>{post}</span>
          <p>
           {detail}
          </p>
        </div>
      </div>
    </>
  );
}

export default OurTeam
