import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/items/Home"
import About from "./components/items/About"
import Events from "./components/items/Events"
import AlumniDirectory from "./components/items/AlumniDirectory"
import ContactUs from "./components/items/ContactUs"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/alumni-directory" element={<AlumniDirectory />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>

  
    
  )
}

export default App;
