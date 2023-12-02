import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Main-Pages/Home";
import About from "./Pages/Main-Pages/About";
import Contact from "./Pages/Main-Pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Main-Components/Footer";
// import Hero from './Components/Main-Components/Hero';
import WebDesign from "./Pages/Course-Page/Web-Design/WebDesign";
import Default from "./Components/Hero-Components/Default";
import Consultant from "./Components/Hero-Components/Consultant";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

function App() {

  useEffect(()=>{
    Aos.init({duration: 900})
  })
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="home" element={<Home />} />
            <Route path="about-us" element={<About />} />
            <Route path="contact-us" element={<Contact />} />
          </Route>

          <Route path="/web-design" element={<WebDesign />}>
            <Route path="Home" element={<Default />} />
            <Route path="Consultant" element={<Consultant />} />
          </Route>

          <Route path="*" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
