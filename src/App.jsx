import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Main-Pages/Home";
import About from "./Pages/Main-Pages/About";
import Contact from "./Pages/Main-Pages/Contact";
import {  BrowserRouter, Route, Routes } from "react-router-dom";
// import Footer from "./Components/Main-Components/Footer";
// import Hero from './Components/Main-Components/Hero';
import WebDesign from "./Pages/Course-Page/Web-Design/WebDesign";
import Default from "./Components/Hero-Components/Default";
import Consultant from "./Components/Hero-Components/Consultant";
import NotFound from './Pages/Main-Pages/404NotFound'
import Feedback from "./Components/Hero-Components/Feedback";

// Animation Packege

// import Aos from "aos";
import "aos/dist/aos.css";
// import { useEffect } from "react";
import Stories from "./Components/Hero-Components/Stories";
import WhyChoose from "./Components/Hero-Components/why-Choose";
import OutCome from "./Components/Hero-Components/OutCome";
import Syllabus from "./Components/Hero-Components/Syllabus";
import TeachingShots from "./Components/Hero-Components/TeachingShots";
import BestPerfomance from "./Components/Hero-Components/BestPerfomance";
import Bonus from "./Components/Hero-Components/Bonus";
import Awarding from "./Components/Hero-Components/Awarding";
import Summary from "./Components/Hero-Components/Summary";

function App() {

  // useEffect(() => {
  //   Aos.init({ duration: 900 });
  // });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route path="home" element={<Home />} />
            <Route path="about-us" element={<About />} />
            <Route path="contact-us" element={<Contact />} />
          </Route>

          <Route path="/web-design" element={<WebDesign />}>
          <Route index element={<Default />} />
            <Route path="Home" element={<Default />} />
            <Route path="Consultant" element={<Consultant />} />
            <Route path="Feedback" element={<Feedback />} />
            <Route path="Stories" element={<Stories />} />
            <Route path="Why-us" element={<WhyChoose/>} />
            <Route path="outcomes" element={<OutCome/>} />
            <Route path="syllabus" element={<Syllabus/>} />
            <Route path="teaching-shots" element={<TeachingShots/>} />
            <Route path="performance" element={<BestPerfomance/>} />
            <Route path="Bonus" element={<Bonus/>} />
            <Route path="Awardings" element={<Awarding/>} />
            <Route path="Batch-Summary" element={<Summary/>} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
