import React from 'react'

const HomeCard = ({title , detail ,bgimg}) => {
  return (
    <>
      <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
        <div className="card-item">
          <div className="row">
            <div className="col-xl-5">
              <div
                className="card-bg"
                style={{
                  backgroundImage: bgimg,
                 
                }}
              />
            </div>
            <div className="col-xl-7 d-flex align-items-center">
              <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p>
                {detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCard
