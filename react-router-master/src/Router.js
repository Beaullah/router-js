import React from "react";

import {
  BrowserRouter as AppRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import ServiceDetail from "./Components/ServiceDetail";

export default function Router() {
  return (
    <div>
      <AppRouter>
       
          
          <nav >
              <Link to="/">Home</Link>
           
              <Link to="/about">About</Link>
            
              <Link to="/contact">Contact</Link>
           
              <Link to="/services">Services</Link>
            
          </nav>
   
        <hr  />
     
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route exact path="/services" element={<Services />} />
            <Route path="/services/:serviceid" element={<ServiceDetail/>} />
          </Routes>
      
      </AppRouter>
    </div>
  );
}
