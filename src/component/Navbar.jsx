import React,{useState } from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  
   function dropdoenToggle() {
     setActiveDropdown(!activeDropdown);
   }

     function navToggle() {
       setShowNav(!showNav);
       showNav && activeDropdown&& dropdoenToggle()
  }
   
  
  



  return (
    <>
      <header id="header" className={`header d-flex align-items-center   `}>
        <div
          className={`container-fluid container-xl d-flex align-items-center justify-content-between  ${
            showNav ? "mobile-nav-active" : ""
          }`}
        >
          <Link to="/" className="logo d-flex align-items-center ">
            {/* Uncomment the line below if you also wish to use an image logo */}

            <img
              src="https://i.postimg.cc/j2djRTFN/AURA-FILE.gif"
              alt=""
              style={{ }}
            />
          </Link>
          <i
            onClick={navToggle}
            className={`mobile-nav-toggle mobile-nav-show bi bi-list ${
              showNav ? "d-none" : ""
            }`}
          />

          <i
            onClick={navToggle}
            className={`mobile-nav-toggle mobile-nav-hide  bi bi-x ${
              showNav ? "" : "d-none"
            }`}
          />
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link to="/" onClick={navToggle}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={navToggle}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/service" onClick={navToggle}>
                  Services
                </Link>
              </li>
              {/* <li>
                <Link to="/project">Projects</Link>
              </li> */}
              {/* <li>
                <Link to="/blog">Blog</Link>
              </li> */}
              <li className="dropdown">
                <Link className="" onClick={dropdoenToggle}>
                  <span>Product</span>
                  <i className="bi bi-chevron-down dropdown-indicator active" />
                </Link>
                <ul className={` ${activeDropdown ? "dropdown-active" : ""} `}>
                  <li>
                    <Link to="/productdetail/58294927" onClick={navToggle}>
                      Passenger Elevators
                    </Link>
                  </li>

                  <li>
                    <Link to="/productdetail/58961471" onClick={navToggle}>
                      Car Elevators
                    </Link>
                  </li>
                  <li>
                    <Link to="/productdetail/78542987" onClick={navToggle}>
                      {" "}
                      Capsule Elevators
                    </Link>
                  </li>
                  <li>
                    <Link to="/productdetail/94632147" onClick={navToggle}>
                      Home Elevators
                    </Link>
                  </li>
                  <li>
                    <Link to="/productdetail/65474123" onClick={navToggle}>
                      Hospital Elevators
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contect" onClick={navToggle}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          {/* .navbar */}
        </div>
      </header>
    </>
  );
}

export default Navbar


const ProductLink = ({id,link,name ,navToggle}) => {
  
  return (
    <li>
      <Link to="/productdetail" onClick={navToggle}>
        Passenger Elevators
      </Link>
    </li>
  );
}


/*


Freight Elevators
Car Elevators

Goods Elevators

Dumbwaiters

 {/* <li className="dropdown">
                    <Link to="/">
                      <span>Deep Dropdown</span>{" "}
                      <i className="bi bi-chevron-down dropdown-indicator" />
                    </Link>
                    <ul>
                      <li>
                        <Link to="/">Deep Dropdown 1</Link>
                      </li>
                      <li>
                        <Link to="/">Deep Dropdown 2</Link>
                      </li>
                      <li>
                        <Link to="/">Deep Dropdown 3</Link>
                      </li>
                      <li>
                        <Link to="/">Deep Dropdown 4</Link>
                      </li>
                      <li>
                        <Link to="/">Deep Dropdown 5</Link>
                      </li>
                    </ul>
                  </li> */
