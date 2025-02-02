import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Qualitysoil from "./pages/Qualitysoil";
import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import ScrollToTop from "./components/ScrollToTop";
import PortfolioInner from "./pages/PortfolioInner";

function App() {

  return (
    <>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />}  />
        <Route path="/about" element={<About />}  />
        <Route path="/Qualitysoil" element={<Qualitysoil />}  />
        <Route path="/service" element={<Service />}  />
        <Route path="/portfolio" element={<Portfolio />}  />
        <Route path="/portfolio/:category" element={<PortfolioInner />}  />
        <Route path="/contact" element={<Contact />}  />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
