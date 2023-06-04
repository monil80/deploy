import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";

// pages
import ErrorPage from "./page/ErrorPage";
import Home from "./page/Home";
import Contect from "./page/Contect";
import About from "./page/About";
import Service from "./page/Service";
import ServiceDetail from "./page/ServiceDetail";
import Blog from "./page/Blog";
import ProductDetail from "./page/ProductDetail";
import Project from "./page/Project";
import ProjectDetail from "./page/ProjectDetail";
import Test from "./page/Test";
//components
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  console.log = () => {};
  console.error = () => {};
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contect" element={<Contect />} />
          {/* <Route exact path="/blog" element={<Blog />} /> */}
          <Route exact path="/productdetail/:id" element={<ProductDetail />} />
          <Route exact path="/service" element={<Service />} />
          {/* <Route exact path="/servicedetail" element={<ServiceDetail />} /> */}
          <Route exact path="/servicedetail/:id" element={<ServiceDetail />} />
          <Route exact path="/about" element={<About />} />
          {/* <Route exact path="/project" element={<Project />} /> */}
          {/* <Route exact path="/projectdetail" element={<ProjectDetail />} /> */}
          {/* <Route exact path="/projectdetail/:id" element={<ProjectDetail />} /> */}
          {/* <Route exact path="/test" element={<Test />} /> */}
          <Route exact path="/*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
