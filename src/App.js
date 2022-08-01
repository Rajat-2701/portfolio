import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./PortfolioContainer/About/About";
import Contact from "./PortfolioContainer/Contact/Contact";
import Profile from "./PortfolioContainer/Home/Profile";
import Navbar from "./PortfolioContainer/Navbar/Navbar";
import Portfolio from "./PortfolioContainer/Portfolio/Portfolio";
import Resume from "./PortfolioContainer/Resume/Resume";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Profile/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route exact path="/home" element={<><Profile/><About/><Resume/><Portfolio/><Contact/></>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
