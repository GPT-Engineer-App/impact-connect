import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Communication from "./pages/Communication.jsx";
import Collaboration from "./pages/Collaboration.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/communication" element={<Communication />} />
          <Route exact path="/collaboration" element={<Collaboration />} />
          <Route exact path="/user-profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;