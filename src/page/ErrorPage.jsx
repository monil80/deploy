import { useEffect ,useState} from 'react'
import React  from 'react'
import '../style/ErrorPage.css'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {

    const navigate = useNavigate();

  
    
  useEffect(() => {
      
    
       
      setTimeout(() => {
     
        navigate("/");
      }, 11000);
       
  
      
    }
  )
  
   
       
  return (
    <div className="body1">
      <div
        className="breadcrumbs d-flex align-items-center"
        style={{
          backgroundImage:
            'url("https://i.postimg.cc/R0PXvs8X/michael-rosch-0h-Rzzm-YEao-unsplash.jpg")',
        }}
      >
        <div
          className="container position-relative d-flex flex-column align-items-center"
          data-aos="fade"
        >
          <h2> Sorry!</h2>
          <h2> The page you're looking for can't be found</h2>
        </div>
      </div>
      <section id="not-found">
        <div className="container h2 text-primary1 text-center ">
          You Will Be Redirect To Home page In Few Moment
          <div className="container h3 text-primary1 text-center">
            Thank You ....
          </div>
          <br />
        </div>
        <div id="title" className="text-primary1">
          404 Error Page
        </div>
        <div className="circles">
          <p className="text-primary">
            404
            <br />
            <small className="text-primary">PAGE NOT FOUND</small>
          </p>
          <span className="circle big"></span>
          <span className="circle med"></span>
          <span className="circle small"></span>
        </div>
      </section>
    </div>
  );
}

export default ErrorPage
