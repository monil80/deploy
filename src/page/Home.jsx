import React from 'react'
import { Link } from 'react-router-dom';
import QuoteForm from '../component/QuoteForm';
import OurService from '../component/OurService';
import data from '../data/home';
import HomeCard from '../component/HomeCard';
import HomeSlide from '../component/HomeSlide';

const Home = () => {

 

 
  return (
    <>
      <div>
        <section id="hero" className="hero">
          <div className="info d-flex align-items-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                  <h2 data-aos="fade-down">Welcome to</h2>
                  <h2>AURA ELEVATORS</h2>

                  <p data-aos="fade-up" className="ip">
                    Modern elevators utilize cutting-edge technology to provide
                    a safe and efficient mode of transportation.
                  </p>
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
                  "url(https://i.postimg.cc/z3mqBjtJ/Screenshot-2023-05-17-223837.png)",
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
                  "url(https://i.postimg.cc/T2jMg8cL/depositphotos-87874458-stock-photo-3d-rendering-an-elevator-shaft.webp)",
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
                  "url(https://i.postimg.cc/Zq7rg1gG/Microsoft-Teams-image-13.jpg)",
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
        {/* End Hero Section */}
        <main id="main">
          {/* ======= Get Started Section ======= */}
          <section id="get-started" className="get-started section-bg">
            <div className="container">
              <div className="row justify-content-between gy-4">
                <div
                  className="col-lg-6 d-flex align-items-center"
                  data-aos="fade-up"
                >
                  <div className="content">
                    <h3>
                      Certainly! Here are some additional things related to
                      elevators
                    </h3>
                    <p>
                      Elevator buttons often have a braille writing next to them
                      to make them accessible for people who are blind or
                      visually impaired.
                    </p>
                    <p>
                      Modern elevators use advanced technologies, such as
                      machine learning and artificial intelligence, to optimize
                      their performance and energy efficiency.
                    </p>
                    <p>
                      The Empire State Building in New York City has 73
                      elevators, including six freight elevators that can each
                      carry up to 80,000 pounds. In skyscrapers, double-deck
                      elevators can transport twice the number of passengers
                      between floors.
                    </p>
                    <p>
                      The world's fastest elevator is located in the Shanghai
                      Tower in China and has a speed of 45 mph (72 km/h).
                    </p>
                  </div>
                </div>
                <div className="col-lg-5" data-aos="fade">
                  <QuoteForm />
                </div>
                {/* End Quote Form */}
              </div>
            </div>
          </section>
          {/* End Get Started Section */}
          {/* ======= Constructions Section ======= */}
          <section id="constructions" className="constructions">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h2>Elevator Solutions</h2>
                <p>
                  Elevators are an integral part of any modern construction
                  project. Our elevator solutions are designed to provide
                  seamless transportation throughout your building, while also
                  adding a touch of elegance and style to your design. Whether
                  you're looking for a sleek and modern look or a more classic
                  design, our wide range of elevator models can be customized to
                  meet your specific needs. Contact us today to learn more about
                  how our elevator solutions can enhance your construction
                  project.
                </p>
              </div>
              <div className="row gy-4">
                {data.homeCard.map((val, index) => {
                  return (
                    <HomeCard
                      key={index}
                      title={val.title}
                      detail={val.detail}
                      bgimg={val.bgimg}
                    />
                  );
                })}

                {/* End Card Item */}
              </div>
            </div>
          </section>
          {/* End Constructions Section */}
          {/* ======= Services Section ======= */}

          {/* End Services Section */}
          {/* ======= Alt Services Section ======= */}
          <section id="alt-services-2" className="alt-services section-bg">
            <div className="container" data-aos="fade-up">
              <div className="row justify-content-around gy-4">
                <div className="col-lg-5 d-flex flex-column justify-content-center">
                  <h3>Elevate Your Building with Aura Elevator Solutions</h3>
                  <p>
                    At Aura Elevator, we specialize in providing cutting-edge
                    elevator solutions for commercial and residential buildings.
                    Our elevators are designed to provide reliable and efficient
                    vertical transportation while also enhancing the aesthetic
                    appeal of your property.
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

                <div
                  className="col-lg-6 img-bg"
                  style={{
                    backgroundImage:
                      "url(https://i.postimg.cc/02mTxTz2/hossein-nasr-fd-LSsyigt-EE-unsplash.jpg)",
                  }}
                  data-aos="zoom-in"
                  data-aos-delay={100}
                />
              </div>
            </div>
          </section>
          {/* End Alt Services Section */}
          {/* ======= Features Section ======= */}
          <section id="features" className="features section-bg">
            <div className="container" data-aos="fade-up">
              <ul className="nav nav-tabs row  g-2 d-flex">
                <li className="nav-item col-6">
                  <button
                    className="nav-link active show"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-1"
                  >
                    {" "}
                    <h4>Safety</h4>
                  </button>
                </li>
                {/* End tab nav item */}
                <li className="nav-item col-6">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-3"
                  >
                    <h4>History</h4>
                  </button>
                  {/* End tab nav item */}
                </li>
                {/* <li className="nav-item col-4">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-3"
                  >
                    <h4>Safety</h4>
                  </button>
                </li> */}
                {/* End tab nav item */}
                {/* <li className="nav-item col-3">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-4"
                  >
                    <h4>Smart Elevator</h4>
                  </button>
                </li> */}
                {/* End tab nav item */}
              </ul>
              <div className="tab-content">
                {data.homeSlide.map((val, index) => {
                  return (
                    <HomeSlide
                      tagid={val.tagid}
                      key={index}
                      title={val.title}
                      detail={val.detail}
                      img={val.img}
                      point={val.point}
                      active={val.active}
                    />
                  );
                })}

                {/* End tab content item */}
              </div>
            </div>
          </section>
          {/* End Features Section */}
          {/* ======= Our Projects Section ======= */}

          {/* End Our Projects Section */}
          {/* ======= Testimonials Section ======= */}

          {/* End Testimonials Section */}
          {/* ======= Recent Blog Posts Section ======= */}

          {/* End Recent Blog Posts Section */}
        </main>
        {/* End #main */}
      </div>
      <Link
        to="/"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </Link>
    </>
  );
}

export default Home


//  <section id="testimonials" className="testimonials section-bg">
//             <div className="container" data-aos="fade-up">
//               <div className="section-header">
//                 <h2>Testimonials</h2>
//                 <p>
//                   Quam sed id excepturi ccusantium dolorem ut quis dolores nisi
//                   llum nostrum enim velit qui ut et autem uia reprehenderit sunt
//                   deleniti
//                 </p>
//               </div>
//               <div className="slides-2 swiper">
//                 <div className="swiper-wrapper">
//                   <div className="swiper-slide">
//                     <div className="testimonial-wrap">
//                       <div className="testimonial-item">
//                         <img
//                           src="assets/img/testimonials/testimonials-1.jpg"
//                           className="testimonial-img"
//                           alt=""
//                         />
//                         <h3>Saul Goodman</h3>
//                         <h4>Ceo &amp; Founder</h4>
//                         <div className="stars">
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                           <i className="bi bi-star-fill" />
//                         </div>
//                         <p>
//                           <i className="bi bi-quote quote-icon-left" />
//                           Proin iaculis purus consequat sem cure digni ssim
//                           donec porttitora entum suscipit rhoncus. Accusantium
//                           quam, ultricies eget id, aliquam eget nibh et. Maecen
//                           aliquam, risus at semper.
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
//                   {/* End testimonial item */}
//                 </div>
//                 <div className="swiper-pagination" />
//               </div>
//             </div>
//           </section>




//  <section id="recent-blog-posts" className="recent-blog-posts">
//             <div className="container" data-aos="fade-up">
//               <div className=" section-header">
//                 <h2>Recent Blog Posts</h2>
//                 <p>
//                   In commodi voluptatem excepturi quaerat nihil error autem
//                   voluptate ut et officia consequuntu
//                 </p>
//               </div>
//               <div className="row gy-5">
//                 <div
//                   className="col-xl-4 col-md-6"
//                   data-aos="fade-up"
//                   data-aos-delay={100}
//                 >
//                   <div className="post-item position-relative h-100">
//                     <div className="post-img position-relative overflow-hidden">
//                       <img
//                         src="assets/img/blog/blog-1.jpg"
//                         className="img-fluid"
//                         alt=""
//                       />
//                       <span className="post-date">December 12</span>
//                     </div>
//                     <div className="post-content d-flex flex-column">
//                       <h3 className="post-title">
//                         Eum ad dolor et. Autem aut fugiat debitis
//                       </h3>
//                       <div className="meta d-flex align-items-center">
//                         <div className="d-flex align-items-center">
//                           <i className="bi bi-person" />{" "}
//                           <span className="ps-2">Julia Parker</span>
//                         </div>
//                         <span className="px-3 text-black-50">/</span>
//                         <div className="d-flex align-items-center">
//                           <i className="bi bi-folder2" />{" "}
//                           <span className="ps-2">Politics</span>
//                         </div>
//                       </div>
//                       <hr />
//                       <a
//                         href="blog-details.html"
//                         className="readmore stretched-link"
//                       >
//                         <span>Read More</span>
//                         <i className="bi bi-arrow-right" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 {/* End post item */}
//                 <div
//                   className="col-xl-4 col-md-6"
//                   data-aos="fade-up"
//                   data-aos-delay={200}
//                 >
//                   <div className="post-item position-relative h-100">
//                     <div className="post-img position-relative overflow-hidden">
//                       <img
//                         src="assets/img/blog/blog-2.jpg"
//                         className="img-fluid"
//                         alt=""
//                       />
//                       <span className="post-date">July 17</span>
//                     </div>
//                     <div className="post-content d-flex flex-column">
//                       <h3 className="post-title">
//                         Et repellendus molestiae qui est sed omnis
//                       </h3>
//                       <div className="meta d-flex align-items-center">
//                         <div className="d-flex align-items-center">
//                           <i className="bi bi-person" />{" "}
//                           <span className="ps-2">Mario Douglas</span>
//                         </div>
//                         <span className="px-3 text-black-50">/</span>
//                         <div className="d-flex align-items-center">
//                           <i className="bi bi-folder2" />{" "}
//                           <span className="ps-2">Sports</span>
//                         </div>
//                       </div>
//                       <hr />
//                       <a
//                         href="blog-details.html"
//                         className="readmore stretched-link"
//                       >
//                         <span>Read More</span>
//                         <i className="bi bi-arrow-right" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 {/* End post item */}
//                 <div className="col-xl-4 col-md-6">
//                   <div
//                     className="post-item position-relative h-100"
//                     data-aos="fade-up"
//                     data-aos-delay={300}
//                   >
//                     <div className="post-img position-relative overflow-hidden">
//                       <img
//                         src="assets/img/blog/blog-3.jpg"
//                         className="img-fluid"
//                         alt=""
//                       />
//                       <span className="post-date">September 05</span>
//                     </div>
//                     <div className="post-content d-flex flex-column">
//                       <h3 className="post-title">
//                         Quia assumenda est et veritati tirana ploder
//                       </h3>
//                       <div className="meta d-flex align-items-center">
//                         <div className="d-flex align-items-center">
//                           <i className="bi bi-person" />{" "}
//                           <span className="ps-2">Lisa Hunter</span>
//                         </div>
//                         <span className="px-3 text-black-50">/</span>
//                         <div className="d-flex align-items-center">
//                           <i className="bi bi-folder2" />{" "}
//                           <span className="ps-2">Economics</span>
//                         </div>
//                       </div>
//                       <hr />
//                       <a
//                         href="blog-details.html"
//                         className="readmore stretched-link"
//                       >
//                         <span>Read More</span>
//                         <i className="bi bi-arrow-right" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 {/* End post item */}
//               </div>
//             </div>
//           </section>


  // <section id="projects" className="projects">
  //           <div className="container" data-aos="fade-up">
  //             <div className="section-header">
  //               <h2>Our Projects</h2>
  //               <p>
  //                 Consequatur libero assumenda est voluptatem est quidem illum
  //                 et officia imilique qui vel architecto accusamus fugit aut qui
  //                 distinctio
  //               </p>
  //             </div>
  //             <div
  //               className="portfolio-isotope"
  //               data-portfolio-filter="*"
  //               data-portfolio-layout="masonry"
  //               data-portfolio-sort="original-order"
  //             >
  //               <ul
  //                 className="portfolio-flters"
  //                 data-aos="fade-up"
  //                 data-aos-delay={100}
  //               >
  //                 <li data-filter="*" className="filter-active">
  //                   All
  //                 </li>
  //                 <li data-filter=".filter-remodeling">Remodeling</li>
  //                 <li data-filter=".filter-construction">Construction</li>
  //                 <li data-filter=".filter-repairs">Repairs</li>
  //                 <li data-filter=".filter-design">Design</li>
  //               </ul>
  //               {/* End Projects Filters */}
  //               <div
  //                 className="row gy-4 portfolio-container"
  //                 data-aos="fade-up"
  //                 data-aos-delay={200}
  //               >
  //                 <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
  //                   <div className="portfolio-content h-100">
  //                     <img
  //                       src="assets/img/projects/remodeling-1.jpg"
  //                       className="img-fluid"
  //                       alt=""
  //                     />
  //                     <div className="portfolio-info">
  //                       <h4>Remodeling 1</h4>
  //                       <p>Lorem ipsum, dolor sit amet consectetur</p>
  //                       <a
  //                         href="assets/img/projects/remodeling-1.jpg"
  //                         title="Remodeling 1"
  //                         data-gallery="portfolio-gallery-remodeling"
  //                         className="glightbox preview-link"
  //                       >
  //                         <i className="bi bi-zoom-in" />
  //                       </a>
  //                       <a
  //                         href="project-details.html"
  //                         title="More Details"
  //                         className="details-link"
  //                       >
  //                         <i className="bi bi-link-45deg" />
  //                       </a>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 {/* End Projects Item */}
  //                 <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
  //                   <div className="portfolio-content h-100">
  //                     <img
  //                       src="assets/img/projects/construction-1.jpg"
  //                       className="img-fluid"
  //                       alt=""
  //                     />
  //                     <div className="portfolio-info">
  //                       <h4>Construction 1</h4>
  //                       <p>Lorem ipsum, dolor sit amet consectetur</p>
  //                       <a
  //                         href="assets/img/projects/construction-1.jpg"
  //                         title="Construction 1"
  //                         data-gallery="portfolio-gallery-construction"
  //                         className="glightbox preview-link"
  //                       >
  //                         <i className="bi bi-zoom-in" />
  //                       </a>
  //                       <a
  //                         href="project-details.html"
  //                         title="More Details"
  //                         className="details-link"
  //                       >
  //                         <i className="bi bi-link-45deg" />
  //                       </a>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 {/* End Projects Item */}
  //                 <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
  //                   <div className="portfolio-content h-100">
  //                     <img
  //                       src="assets/img/projects/repairs-1.jpg"
  //                       className="img-fluid"
  //                       alt=""
  //                     />
  //                     <div className="portfolio-info">
  //                       <h4>Repairs 1</h4>
  //                       <p>Lorem ipsum, dolor sit amet consectetur</p>
  //                       <a
  //                         href="assets/img/projects/repairs-1.jpg"
  //                         title="Repairs 1"
  //                         data-gallery="portfolio-gallery-repairs"
  //                         className="glightbox preview-link"
  //                       >
  //                         <i className="bi bi-zoom-in" />
  //                       </a>
  //                       <a
  //                         href="project-details.html"
  //                         title="More Details"
  //                         className="details-link"
  //                       >
  //                         <i className="bi bi-link-45deg" />
  //                       </a>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 {/* End Projects Item */}
  //                 <div className="col-lg-4 col-md-6 portfolio-item filter-design">
  //                   <div className="portfolio-content h-100">
  //                     <img
  //                       src="assets/img/projects/design-1.jpg"
  //                       className="img-fluid"
  //                       alt=""
  //                     />
  //                     <div className="portfolio-info">
  //                       <h4>Design 1</h4>
  //                       <p>Lorem ipsum, dolor sit amet consectetur</p>
  //                       <a
  //                         href="assets/img/projects/design-1.jpg"
  //                         title="Repairs 1"
  //                         data-gallery="portfolio-gallery-book"
  //                         className="glightbox preview-link"
  //                       >
  //                         <i className="bi bi-zoom-in" />
  //                       </a>
  //                       <a
  //                         href="project-details.html"
  //                         title="More Details"
  //                         className="details-link"
  //                       >
  //                         <i className="bi bi-link-45deg" />
  //                       </a>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 {/* End Projects Item */}
  //                 <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
  //                   <div className="portfolio-content h-100">
  //                     <img
  //                       src="assets/img/projects/remodeling-2.jpg"
  //                       className="img-fluid"
  //                       alt=""
  //                     />
  //                     <div className="portfolio-info">
  //                       <h4>Remodeling 2</h4>
  //                       <p>Lorem ipsum, dolor sit amet consectetur</p>
  //                       <a
  //                         href="assets/img/projects/remodeling-2.jpg"
  //                         title="Remodeling 2"
  //                         data-gallery="portfolio-gallery-remodeling"
  //                         className="glightbox preview-link"
  //                       >
  //                         <i className="bi bi-zoom-in" />
  //                       </a>
  //                       <a
  //                         href="project-details.html"
  //                         title="More Details"
  //                         className="details-link"
  //                       >
  //                         <i className="bi bi-link-45deg" />
  //                       </a>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 {/* End Projects Item */}
  //                 <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
  //                   <div className="portfolio-content h-100">
  //                     <img
  //                       src="assets/img/projects/construction-2.jpg"
  //                       className="img-fluid"
  //                       alt=""
  //                     />
  //                     <div className="portfolio-info">
  //                       <h4>Construction 2</h4>
  //                       <p>Lorem ipsum, dolor sit amet consectetur</p>
  //                       <a
  //                         href="assets/img/projects/construction-2.jpg"
  //                         title="Construction 2"
  //                         data-gallery="portfolio-gallery-construction"
  //                         className="glightbox preview-link"
  //                       >
  //                         <i className="bi bi-zoom-in" />
  //                       </a>
  //                       <a
  //                         href="project-details.html"
  //                         title="More Details"
  //                         className="details-link"
  //                       >
  //                         <i className="bi bi-link-45deg" />
  //                       </a>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 {/* End Projects Item */}
  //                 <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
  //                   <div className="portfolio-content h-100">
  //                     <img
  //                       src="assets/img/projects/repairs-2.jpg"
  //                       className="img-fluid"
  //                       alt=""
  //                     />
  //                     <div className="portfolio-info">
  //                       <h4>Repairs 2</h4>
  //                       <p>Lorem ipsum, dolor sit amet consectetur</p>
  //                       <a
  //                         href="assets/img/projects/repairs-2.jpg"
  //                         title="Repairs 2"
  //                         data-gallery="portfolio-gallery-repairs"
  //                         className="glightbox preview-link"
  //                       >
  //                         <i className="bi bi-zoom-in" />
  //                       </a>
  //                       <a
  //                         href="project-details.html"
  //                         title="More Details"
  //                         className="details-link"
  //                       >
  //                         <i className="bi bi-link-45deg" />
  //                       </a>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 {/* End Projects Item */}
  //                 <div className="col-lg-4 col-md-6 portfolio-item filter-design">
  //                   <div className="portfolio-content h-100">
  //                     <img
  //                       src="assets/img/projects/design-2.jpg"
  //                       className="img-fluid"
  //                       alt=""
  //                     />
  //                     <div className="portfolio-info">
  //                       <h4>Design 2</h4>
  //                       <p>Lorem ipsum, dolor sit amet consectetur</p>
  //                       <a
  //                         href="assets/img/projects/design-2.jpg"
  //                         title="Repairs 2"
  //                         data-gallery="portfolio-gallery-book"
  //                         className="glightbox preview-link"
  //                       >
  //                         <i className="bi bi-zoom-in" />
  //                       </a>
  //                       <a
  //                         href="project-details.html"
  //                         title="More Details"
  //                         className="details-link"
  //                       >
  //                         <i className="bi bi-link-45deg" />
  //                       </a>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 {/* End Projects Item */}
  //                 <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
  //                   <div className="portfolio-content h-100">
  //                     <img
  //                       src="assets/img/projects/remodeling-3.jpg"
  //                       className="img-fluid"
  //                       alt=""
  //                     />
  //                     <div className="portfolio-info">
  //                       <h4>Remodeling 3</h4>
  //                       <p>Lorem ipsum, dolor sit amet consectetur</p>
  //                       <a
  //                         href="assets/img/projects/remodeling-3.jpg"
  //                         title="Remodeling 3"
  //                         data-gallery="portfolio-gallery-remodeling"
  //                         className="glightbox preview-link"
  //                       >
  //                         <i className="bi bi-zoom-in" />
  //                       </a>
  //                       <a
  //                         href="project-details.html"
  //                         title="More Details"
  //                         className="details-link"
  //                       >
  //                         <i className="bi bi-link-45deg" />
  //                       </a>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 {/* End Projects Item */}
  //                 <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
  //                   <div className="portfolio-content h-100">
  //                     <img
  //                       src="assets/img/projects/construction-3.jpg"
  //                       className="img-fluid"
  //                       alt=""
  //                     />
  //                     <div className="portfolio-info">
  //                       <h4>Construction 3</h4>
  //                       <p>Lorem ipsum, dolor sit amet consectetur</p>
  //                       <a
  //                         href="assets/img/projects/construction-3.jpg"
  //                         title="Construction 3"
  //                         data-gallery="portfolio-gallery-construction"
  //                         className="glightbox preview-link"
  //                       >
  //                         <i className="bi bi-zoom-in" />
  //                       </a>
  //                       <a
  //                         href="project-details.html"
  //                         title="More Details"
  //                         className="details-link"
  //                       >
  //                         <i className="bi bi-link-45deg" />
  //                       </a>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 {/* End Projects Item */}
  //                 <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
  //                   <div className="portfolio-content h-100">
  //                     <img
  //                       src="assets/img/projects/repairs-3.jpg"
  //                       className="img-fluid"
  //                       alt=""
  //                     />
  //                     <div className="portfolio-info">
  //                       <h4>Repairs 3</h4>
  //                       <p>Lorem ipsum, dolor sit amet consectetur</p>
  //                       <a
  //                         href="assets/img/projects/repairs-3.jpg"
  //                         title="Repairs 2"
  //                         data-gallery="portfolio-gallery-repairs"
  //                         className="glightbox preview-link"
  //                       >
  //                         <i className="bi bi-zoom-in" />
  //                       </a>
  //                       <a
  //                         href="project-details.html"
  //                         title="More Details"
  //                         className="details-link"
  //                       >
  //                         <i className="bi bi-link-45deg" />
  //                       </a>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 {/* End Projects Item */}
  //                 <div className="col-lg-4 col-md-6 portfolio-item filter-design">
  //                   <div className="portfolio-content h-100">
  //                     <img
  //                       src="assets/img/projects/design-3.jpg"
  //                       className="img-fluid"
  //                       alt=""
  //                     />
  //                     <div className="portfolio-info">
  //                       <h4>Design 3</h4>
  //                       <p>Lorem ipsum, dolor sit amet consectetur</p>
  //                       <a
  //                         href="assets/img/projects/design-3.jpg"
  //                         title="Repairs 3"
  //                         data-gallery="portfolio-gallery-book"
  //                         className="glightbox preview-link"
  //                       >
  //                         <i className="bi bi-zoom-in" />
  //                       </a>
  //                       <a
  //                         href="project-details.html"
  //                         title="More Details"
  //                         className="details-link"
  //                       >
  //                         <i className="bi bi-link-45deg" />
  //                       </a>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 {/* End Projects Item */}
  //               </div>
  //               {/* End Projects Container */}
  //             </div>
  //           </div>
  //         </section>