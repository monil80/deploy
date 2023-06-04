import React from 'react'
import { Link } from 'react-router-dom';
import OurTeam from '../component/OurTeam';
import data from '../data/about';
import OurService from '../component/OurService';


const About = () => {
   
  return (
    <>
      <div>
        <main id="main">
          {/* ======= Breadcrumbs ======= */}
          <div
            className="breadcrumbs d-flex align-items-center"
            style={{
              backgroundImage:
                'url("https://i.postimg.cc/kGJ0vcbq/istockphoto-1335204621-612x612-transformed.jpg")',
            }}
          >
            <div
              className="container position-relative d-flex flex-column align-items-center"
              data-aos="fade"
            >
              <h2>About</h2>
            </div>
          </div>
          {/* End Breadcrumbs */}
          {/* ======= About Section ======= */}
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="row position-relative">
                <div
                  className="col-lg-7 about-img"
                  style={{
                    backgroundImage:
                      "url(https://i.postimg.cc/3Rz2r239/Microsoft-Teams-image-12.jpg)",
                  }}
                />
                <div className="col-lg-7">
                  <h2>AURA ELEVATORS</h2>
                  <div className="our-story">
                    <h4>Est 2023</h4>
                    <h3>Our Story</h3>
                    <p>
                      Aura Elevators is a company that specializes in helping
                      clients with their elevator needs. With over a decade of
                      experience in the industry, we have built a reputation for
                      providing high-quality elevator installation,
                      maintenance,modernaization and repair services.
                    </p>

                    <ul>
                      <li>
                        <i class="bi bi-caret-right"></i>{" "}
                        <span>
                          Expertise in a wide range of elevator systems and
                          technologies
                        </span>
                      </li>
                      <li>
                        <i class="bi bi-caret-right"></i>{" "}
                        <span>
                          Dedicated team of professionals committed to customer
                          satisfaction
                        </span>
                      </li>
                      <li>
                        <i class="bi bi-caret-right"></i>{" "}
                        <span>
                          Comprehensive service offerings, including
                          installation, maintenance,modernaization and repair
                        </span>
                      </li>
                    </ul>
                    <p>
                      At Aura Elevators, we believe in providing our clients
                      with the highest level of service and support. Our team is
                      committed to ensuring that your elevators are running
                      smoothly and efficiently, and we work closely with you to
                      develop customized solutions that meet your specific needs
                      and requirements.
                    </p>
                    {/* <div className="watch-video d-flex align-items-center position-relative">
                      <i className="bi bi-play-circle" />
                      <Link
                        to="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                        className="glightbox stretched-link"
                        target="_blank"
                      >
                        Watch Video
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End About Section */}
          {/* ======= Stats Counter Section ======= */}
          <section id="stats-counter" className="stats-counter section-bg">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-3 col-md-6">
                  <div className="stats-item d-flex align-items-center w-100 h-100">
                    <i className="bi bi-emoji-smile color-blue flex-shrink-0" />
                    <div>
                      <span
                        data-purecounter-start={0}
                        data-purecounter-end={232}
                        data-purecounter-duration={1}
                        className="purecounter"
                      ></span>
                      <p>Happy Clients</p>
                    </div>
                  </div>
                </div>
                {/* End Stats Item */}
                <div className="col-lg-3 col-md-6">
                  <div className="stats-item d-flex align-items-center w-100 h-100">
                    <i className="bi bi-journal-richtext color-orange flex-shrink-0" />
                    <div>
                      <span
                        data-purecounter-start={0}
                        data-purecounter-end={521}
                        data-purecounter-duration={1}
                        className="purecounter"
                      />
                      <p>Projects</p>
                    </div>
                  </div>
                </div>
                {/* End Stats Item */}
                <div className="col-lg-3 col-md-6">
                  <div className="stats-item d-flex align-items-center w-100 h-100">
                    <i className="bi bi-headset color-green flex-shrink-0" />
                    <div>
                      <span
                        data-purecounter-start={0}
                        data-purecounter-end={1463}
                        data-purecounter-duration={1}
                        className="purecounter"
                      />
                      <p>Hours Of Support</p>
                    </div>
                  </div>
                </div>
                {/* End Stats Item */}
                <div className="col-lg-3 col-md-6">
                  <div className="stats-item d-flex align-items-center w-100 h-100">
                    <i className="bi bi-people color-pink flex-shrink-0" />
                    <div>
                      <span
                        data-purecounter-start={0}
                        data-purecounter-end={15}
                        data-purecounter-duration={1}
                        className="purecounter"
                      />
                      <p>Hard Workers</p>
                    </div>
                  </div>
                </div>
                {/* End Stats Item */}
              </div>
            </div>
          </section>
          {/* End Stats Counter Section */}
          {/* ======= Alt Services Section ======= */}
          <section id="alt-services" className="alt-services">
            <div className="container" data-aos="fade-up">
              <div className="row justify-content-around gy-4">
                <div
                  className="col-lg-6 img-bg"
                  style={{
                    backgroundImage:
                      "url(https://i.postimg.cc/7PjJrFxn/vector-a-man-with-a-laptop-going-out-from-the-elevator.jpg)",
                  }}
                  data-aos="zoom-in"
                  data-aos-delay={100}
                />
                <div className="col-lg-5 d-flex flex-column justify-content-center">
                  <h3>About Aura Elevators</h3>
                  <p>
                    Aura Elevators is a company dedicated to providing
                    top-quality elevator services to clients. Our team of
                    experienced professionals is committed to delivering
                    excellent customer service and ensuring client satisfaction.
                  </p>
                  {data.ourService.map((val, index) => {
                    return (
                      <OurService
                        key={index}
                        title={val.title}
                        detail={val.detail}
                        classimg={val.classimg}
                      />
                    );
                  })}

                  {/* End Icon Box */}
                </div>
              </div>
            </div>
          </section>
          {/* End Alt Services Section */}
          {/* ======= Alt Services Section 2 ======= */}

          {/* End Alt Services Section 2 */}
          {/* ======= Our Team Section ======= */}
          <section id="team" className="team">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h2>Our Team</h2>
                <p>
                  Aperiam dolorum et et wuia molestias qui eveniet numquam nihil
                  porro incidunt dolores placeat sunt id nobis omnis tiledo
                  stran delop
                </p>
              </div>
              <div className="row gy-5">
                {data.ourTeam.map((val, index) => {
                  return (
                    <OurTeam
                      key={index}
                      img={val.img}
                      post={val.post}
                      name={val.name}
                      detail={val.detail}
                    />
                  );
                })}

                {/* End Team Member */}
              </div>
            </div>
          </section>
          {/* End Our Team Section */}
          {/* ======= Testimonials Section ======= */}
          <section id="testimonials" className="testimonials section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h2>Testimonials</h2>
                <p>
                  "I recently had the pleasure of working with Aura Elevator and
                  was thoroughly impressed by their commitment to excellence.
                  The team at Aura Elevator went above and beyond to ensure that
                  our building's elevator was installed on time and to the
                  highest standards. Their attention to detail and dedication to
                  customer satisfaction truly sets them apart in the industry. I
                  would highly recommend Aura Elevator to anyone looking for
                  top-quality elevator installation and maintenance services."
                </p>
              </div>
              <div className="slides-2 swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-wrap"></div>
                  </div>
                  {/* End testimonial item */}
                  {/* -------------see the after page------------------ */}
                  {/* End testimonial item */}
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </section>
          {/* End Testimonials Section */}
        </main>

        <Link
          to="/"
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </Link>
      </div>
    </>
  );
}

export default About


//  <div className="swiper-slide">
//                     <div className="testimonial-wrap">
//                       <div className="testimonial-item">
//                         <img
//                           src="assets/img/testimonials/testimonials-2.jpg"
//                           className="testimonial-img"
//                           alt=""
//                         />
//                         <h3>Sara Wilsson</h3>
//                         <h4>Designer</h4>
//                         <div className="stars">
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                         </div>
//                         <p>
//                           <i className="bi bi-quote quote-icon-left" />
//                           Export tempor illum tamen malis malis eram quae irure
//                           esse labore quem cillum quid cillum eram malis quorum
//                           velit fore eram velit sunt aliqua noster fugiat irure
//                           amet legam anim culpa.
//                           <i className="bi bi-quote quote-icon-right" />
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   {/* End testimonial item */}
//                   <div className="swiper-slide">
//                     <div className="testimonial-wrap">
//                       <div className="testimonial-item">
//                         <img
//                           src="assets/img/testimonials/testimonials-3.jpg"
//                           className="testimonial-img"
//                           alt=""
//                         />
//                         <h3>Jena Karlis</h3>
//                         <h4>Store Owner</h4>
//                         <div className="stars">
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                         </div>
//                         <p>
//                           <i className="bi bi-quote quote-icon-left" />
//                           Enim nisi quem export duis labore cillum quae magna
//                           enim sint quorum nulla quem veniam duis minim tempor
//                           labore quem eram duis noster aute amet eram fore quis
//                           sint minim.
//                           <i className="bi bi-quote quote-icon-right" />
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   {/* End testimonial item */}
//                   <div className="swiper-slide">
//                     <div className="testimonial-wrap">
//                       <div className="testimonial-item">
//                         <img
//                           src="assets/img/testimonials/testimonials-4.jpg"
//                           className="testimonial-img"
//                           alt=""
//                         />
//                         <h3>Matt Brandon</h3>
//                         <h4>Freelancer</h4>
//                         <div className="stars">
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                         </div>
//                         <p>
//                           <i className="bi bi-quote quote-icon-left" />
//                           Fugiat enim eram quae cillum dolore dolor amet nulla
//                           culpa multos export minim fugiat minim velit minim
//                           dolor enim duis veniam ipsum anim magna sunt elit fore
//                           quem dolore labore illum veniam.
//                           <i className="bi bi-quote quote-icon-right" />
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   {/* End testimonial item */}
//                   <div className="swiper-slide">
//                     <div className="testimonial-wrap">
//                       <div className="testimonial-item">
//                         <img
//                           src="assets/img/testimonials/testimonials-5.jpg"
//                           className="testimonial-img"
//                           alt=""
//                         />
//                         <h3>John Larson</h3>
//                         <h4>Entrepreneur</h4>
//                         <div className="stars">
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                         </div>
//                         <p>
//                           <i className="bi bi-quote quote-icon-left" />
//                           Quis quorum aliqua sint quem legam fore sunt eram
//                           irure aliqua veniam tempor noster veniam enim culpa
//                           labore duis sunt culpa nulla illum cillum fugiat legam
//                           esse veniam culpa fore nisi cillum quid.
//                           <i className="bi bi-quote quote-icon-right" />
//                         </p>
//                       </div>
//                     </div>
//                   </div>












  // <div className="testimonial-item">
  //                       {/* <img
  //                         src="assets/img/testimonials/testimonials-1.jpg"
  //                         className="testimonial-img"
  //                         alt=""
  //                       /> */}
  //                       {/* <h3>Krunal</h3>
  //                       <h4>Ceo &amp; Founder</h4> */}
  //                       {/* <div className="stars">
  //                         <i className="bi bi-star-fill" />
  //                         <i className="bi bi-star-fill" />
  //                         <i className="bi bi-star-fill" />
  //                         <i className="bi bi-star-fill" />
  //                         <i className="bi bi-star-fill" />
  //                       </div> */}
  //                       {/* <p>
  //                         <i className="bi bi-quote quote-icon-left" />
  //                         Krunal is an amazing CEO who has led our company with
  //                         passion, dedication, and a keen business sense. His
  //                         vision for the company has brought us to new heights,
  //                         and his leadership style is both inspiring and
  //                         effective. Working under Krunal has been a privilege,
  //                         and I am constantly impressed by his ability to make
  //                         tough decisions and guide our team towards success.
  //                         <i className="bi bi-quote quote-icon-right" />
  //                       </p> */}
  //                     </div>