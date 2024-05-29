import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Spinner from "./components/Spinner";
import FooterSection from "./components/FooterSection";
import Home from "./components/Home";
import Services from "./components/Services";
import Navebar from "./components/Navebar";
import Contactus from "./components/Contactus";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Cleanup function to clear the timer if component unmounts or updates
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Navebar /> {/* Include Navbar component here */}
      <Routes>
        <Route
          path="/"
          element={loading ? <Spinner /> : <Home />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!loading && <FooterSection />}
    </BrowserRouter>
  );
}

// Not Found Component
function NotFound() {
  return <h1>404 - Not Found</h1>;
}

export default App;
