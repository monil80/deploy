import React from 'react'

const HomeSlide = ({tagid, title ,detail , img ,point , active }) => {
  return (
    <>
      <div className={active} id={tagid}>
        <div className="row">
          <div
            className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <h3>{title}</h3>
            <p className="fst-italic">{detail}</p>
            <ul>
              {point.map((val, index) => {
                return (
                  <li key={index}
                   
                    >{val.li}
                        </li>
                );
              })}
            </ul>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 text-center"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <img src={img} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSlide
