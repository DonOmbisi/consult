import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Teams from "./pages/Teams";
import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />}  />
        <Route path="/about" element={<About />}  />
        <Route path="/teams" element={<Teams />}  />
        <Route path="/service" element={<Service />}  />
        <Route path="/portfolio" element={<Portfolio />}  />
        <Route path="/contact" element={<Contact />}  />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
