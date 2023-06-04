import React from 'react'
import { useParams,Link } from "react-router-dom";
import data from '../data/product'

const ProductDetail = () => {

  const { id } = useParams();

   function scrollToTop() {
     window.scrollTo({ top: 0, behavior: "smooth" });
   }
  
  return (
    <>
      {data.producteDetail.map((val, index) => {
        return (
          String(val.id) === id && (
            <div key={index}>
              <main id="main">
                {/* ======= Breadcrumbs ======= */}
                <div
                  className="breadcrumbs d-flex align-items-center"
                  style={{
                    backgroundImage: `url(${val.limg})`,
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
                {/* ======= Blog Details Section ======= */}
                <section id="blog" className="blog">
                  <div
                    className="container"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <div className="row g-5">
                      <div className="col-lg-8">
                        <article className="blog-details">
                          <div className="post-img">
                            <img src={val.limg} alt="" className="img-fluid" />
                          </div>
                          <h2 className="title">{val.ltopic}</h2>
                          <div className="meta-top">
                            <ul>
                              {/* <li className="d-flex align-items-center">
                                <i className="bi bi-person" />{" "}
                                <a href="blog-details.html">John Doe</a>
                              </li>
                              <li className="d-flex align-items-center">
                                <i className="bi bi-clock" />{" "}
                                <a href="blog-details.html">
                                  <time dateTime="2020-01-01">Jan 1, 2022</time>
                                </a>
                              </li>
                              <li className="d-flex align-items-center">
                                <i className="bi bi-chat-dots" />{" "}
                                <a href="blog-details.html">12 Comments</a>
                              </li> */}
                            </ul>
                          </div>
                          {/* End meta top */}
                          <div className="content">
                            <p>{val.ldetail}</p>
                            <p>{val.ldetail2}</p>
                            <blockquote>
                              <p>{val.box}</p>
                            </blockquote>
                            <p>{val.ldetail3}</p>
                            <h3>{val.ltopic1}</h3>
                            <p>{val.ldetail4}</p>
                            <ul>
                          
                              {val.lpoint.map((point, index) => {
                                return (
                                  <React.Fragment key={index}>
                                    <li key={index}>
                                      {" "}
                                 
                                      {point.p}
                                    </li>
                                  </React.Fragment>
                                ); 
                              })}
                            </ul>
                            <p>{val.ldetail5}</p>
                          </div>
                          {/* End post content */}
                          {/* <div className="meta-bottom">
                            <i className="bi bi-folder" />
                            <ul className="cats">
                              <li>
                                <a href="/">Business</a>
                              </li>
                            </ul>
                            <i className="bi bi-tags" />
                            <ul className="tags">
                              <li>
                                <a href="/">Creative</a>
                              </li>
                              <li>
                                <a href="/">Tips</a>
                              </li>
                              <li>
                                <a href="/">Marketing</a>
                              </li>
                            </ul>
                          </div> */}
                          {/* End meta bottom */}
                        </article>
                        {/* End blog post */}
                        <div className="post-author d-flex align-items-center">
                          <img
                            src="assets/img/blog/blog-author.jpg"
                            className="rounded-circle flex-shrink-0"
                            alt=""
                          />
                          <div>
                            <h4>{val.msgkey}</h4>
                            <div className="social-links mb-5">
                              {/* <a href="https://twitters.com//">
                                <i className="bi bi-twitter" />
                              </a>
                              <a href="https://facebook.com//">
                                <i className="bi bi-facebook" />
                              </a>
                              <a href="https://instagram.com//">
                                <i className="biu bi-instagram" />
                              </a> */}
                            </div>
                            <p>{val.msgvalue}</p>
                          </div>
                        </div>
                        {/* End post author */}

                        {/* End blog comments */}
                      </div>
                      <div className="col-lg-4">
                        <div className="sidebar">
                          {/* <div className="sidebar-item search-form">
                            <h3 className="sidebar-title">Search</h3>
                            <form action="" className="mt-3">
                              <input
                                type="text"
                                placeholder="Enter your search keywords"
                              />
                              <button type="submit">
                                <i className="bi bi-search"></i>
                              </button>
                            </form>
                          </div> */}

                          <div className="sidebar-item categories">
                            <h3 className="sidebar-title">{val.rtopic}</h3>

                            <ul className="mt-3">
                              {val.rpoint.map((point, index) => {
                                return (
                                  <li key={index}>
                                    <Link
                                      className=""
                                      to={point.path}
                                      onClick={scrollToTop}
                                    >
                                      {point.p}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>

                          <div className="sidebar-item recent-posts">
                            <h3 className="sidebar-title">{val.rtopic1}</h3>
                            <div className="mt-3">
                              {val.rpoint1.map((point, index) => {
                                return (
                                  <div key={index} className="post-item mt-3">
                                    <img
                                      src="assets/img/projects/project-2.jpg"
                                      alt=""
                                    />
                                    <div>
                                      <h4>
                                        <Link className="stop" >{point.p}</Link>
                                      </h4>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          <div className="sidebar-item tags">
                            <h3 className="sidebar-title">{val.rtopic2}</h3>
                            <ul className="mt-3">
                              {val.rpoint2.map((point, index) => {
                                return (
                                  <li key={index}>
                                    <Link
                                      className="stop"
                                   
                                    >
                                      {point.p}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* End Blog Details Section */}
              </main>
              {/* End /main */}
            </div>
          )
        );
      })}
    </>
  );
}

export default ProductDetail;



  //  <div className="comments">
  //                   <h4 className="comments-count">8 Comments</h4>
  //                   <div id="comment-1" className="comment">
  //                     <div className="d-flex">
  //                       <div className="comment-img">
  //                         <img src="assets/img/blog/comments-1.jpg" alt="" />
  //                       </div>
  //                       <div>
  //                         <h5>
  //                           <a href>Georgia Reader</a>{" "}
  //                           <a href="/" className="reply">
  //                             <i className="bi bi-reply-fill" /> Reply
  //                           </a>
  //                         </h5>
  //                         <time dateTime="2020-01-01">01 Jan,2022</time>
  //                         <p>
  //                           Et rerum totam nisi. Molestiae vel quam dolorum vel
  //                           voluptatem et et. Est ad aut sapiente quis molestiae
  //                           est qui cum soluta. Vero aut rerum vel. Rerum quos
  //                           laboriosam placeat ex qui. Sint qui facilis et.
  //                         </p>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   {/* End comment /1 */}
  //                   <div id="comment-2" className="comment">
  //                     <div className="d-flex">
  //                       <div className="comment-img">
  //                         <img src="assets/img/blog/comments-2.jpg" alt="" />
  //                       </div>
  //                       <div>
  //                         <h5>
  //                           <a href>Aron Alvarado</a>{" "}
  //                           <a href="/" className="reply">
  //                             <i className="bi bi-reply-fill" /> Reply
  //                           </a>
  //                         </h5>
  //                         <time dateTime="2020-01-01">01 Jan,2022</time>
  //                         <p>
  //                           Ipsam tempora sequi voluptatem quis sapiente non.
  //                           Autem itaque eveniet saepe. Officiis illo ut beatae.
  //                         </p>
  //                       </div>
  //                     </div>
  //                     <div
  //                       id="comment-reply-1"
  //                       className="comment comment-reply"
  //                     >
  //                       <div className="d-flex">
  //                         <div className="comment-img">
  //                           <img src="assets/img/blog/comments-3.jpg" alt="" />
  //                         </div>
  //                         <div>
  //                           <h5>
  //                             <a href>Lynda Small</a>{" "}
  //                             <a href="/" className="reply">
  //                               <i className="bi bi-reply-fill" /> Reply
  //                             </a>
  //                           </h5>
  //                           <time dateTime="2020-01-01">01 Jan,2022</time>
  //                           <p>
  //                             Enim ipsa eum fugiat fuga repellat. Commodi quo
  //                             quo dicta. Est ullam aspernatur ut vitae quia
  //                             mollitia id non. Qui ad quas nostrum rerum sed
  //                             necessitatibus aut est. Eum officiis sed repellat
  //                             maxime vero nisi natus. Amet nesciunt nesciunt qui
  //                             illum omnis est et dolor recusandae. Recusandae
  //                             sit ad aut impedit et. Ipsa labore dolor impedit
  //                             et natus in porro aut. Magnam qui cum. Illo
  //                             similique occaecati nihil modi eligendi. Pariatur
  //                             distinctio labore omnis incidunt et illum.
  //                             Expedita et dignissimos distinctio laborum minima
  //                             fugiat. Libero corporis qui. Nam illo odio beatae
  //                             enim ducimus. Harum reiciendis error dolorum non
  //                             autem quisquam vero rerum neque.
  //                           </p>
  //                         </div>
  //                       </div>
  //                       <div
  //                         id="comment-reply-2"
  //                         className="comment comment-reply"
  //                       >
  //                         <div className="d-flex">
  //                           <div className="comment-img">
  //                             <img
  //                               src="assets/img/blog/comments-4.jpg"
  //                               alt=""
  //                             />
  //                           </div>
  //                           <div>
  //                             <h5>
  //                               <a href>Sianna Ramsay</a>{" "}
  //                               <a href="/" className="reply">
  //                                 <i className="bi bi-reply-fill" /> Reply
  //                               </a>
  //                             </h5>
  //                             <time dateTime="2020-01-01">01 Jan,2022</time>
  //                             <p>
  //                               Et dignissimos impedit nulla et quo distinctio
  //                               ex nemo. Omnis quia dolores cupiditate et. Ut
  //                               unde qui eligendi sapiente omnis ullam. Placeat
  //                               porro est commodi est officiis voluptas repellat
  //                               quisquam possimus. Perferendis id consectetur
  //                               necessitatibus.
  //                             </p>
  //                           </div>
  //                         </div>
  //                       </div>
  //                       {/* End comment reply /2*/}
  //                     </div>
  //                     {/* End comment reply /1*/}
  //                   </div>
  //                   {/* End comment /2*/}
  //                   <div id="comment-3" className="comment">
  //                     <div className="d-flex">
  //                       <div className="comment-img">
  //                         <img src="assets/img/blog/comments-5.jpg" alt="" />
  //                       </div>
  //                       <div>
  //                         <h5>
  //                           <a href>Nolan Davidson</a>{" "}
  //                           <a href="/" className="reply">
  //                             <i className="bi bi-reply-fill" /> Reply
  //                           </a>
  //                         </h5>
  //                         <time dateTime="2020-01-01">01 Jan,2022</time>
  //                         <p>
  //                           Distinctio nesciunt rerum reprehenderit sed. Iste
  //                           omnis eius repellendus quia nihil ut accusantium
  //                           tempore. Nesciunt expedita id dolor exercitationem
  //                           aspernatur aut quam ut. Voluptatem est accusamus
  //                           iste at. Non aut et et esse qui sit modi neque.
  //                           Exercitationem et eos aspernatur. Ea est
  //                           consequuntur officia beatae ea aut eos soluta. Non
  //                           qui dolorum voluptatibus et optio veniam. Quam
  //                           officia sit nostrum dolorem.
  //                         </p>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   {/* End comment /3 */}
  //                   <div id="comment-4" className="comment">
  //                     <div className="d-flex">
  //                       <div className="comment-img">
  //                         <img src="assets/img/blog/comments-6.jpg" alt="" />
  //                       </div>
  //                       <div>
  //                         <h5>
  //                           <a href>Kay Duggan</a>{" "}
  //                           <a href="/" className="reply">
  //                             <i className="bi bi-reply-fill" /> Reply
  //                           </a>
  //                         </h5>
  //                         <time dateTime="2020-01-01">01 Jan,2022</time>
  //                         <p>
  //                           Dolorem atque aut. Omnis doloremque blanditiis quia
  //                           eum porro quis ut velit tempore. Cumque sed quia ut
  //                           maxime. Est ad aut cum. Ut exercitationem non in
  //                           fugiat.
  //                         </p>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   {/* End comment /4 */}
  //                   <div className="reply-form">
  //                     <h4>Leave a Reply</h4>
  //                     <p>
  //                       Your email address will not be published. Required
  //                       fields are marked *{" "}
  //                     </p>
  //                     <form action>
  //                       <div className="row">
  //                         <div className="col-md-6 form-group">
  //                           <input
  //                             name="name"
  //                             type="text"
  //                             className="form-control"
  //                             placeholder="Your Name*"
  //                           />
  //                         </div>
  //                         <div className="col-md-6 form-group">
  //                           <input
  //                             name="email"
  //                             type="text"
  //                             className="form-control"
  //                             placeholder="Your Email*"
  //                           />
  //                         </div>
  //                       </div>
  //                       <div className="row">
  //                         <div className="col form-group">
  //                           <input
  //                             name="website"
  //                             type="text"
  //                             className="form-control"
  //                             placeholder="Your Website"
  //                           />
  //                         </div>
  //                       </div>
  //                       <div className="row">
  //                         <div className="col form-group">
  //                           <textarea
  //                             name="comment"
  //                             className="form-control"
  //                             placeholder="Your Comment*"
  //                             defaultValue={""}
  //                           />
  //                         </div>
  //                       </div>
  //                       <button type="submit" className="btn btn-primary">
  //                         Post Comment
  //                       </button>
  //                     </form>
  //                   </div>
  //                 </div>