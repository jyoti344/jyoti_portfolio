import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import './styles/global.css';
import { initStars } from './utils/starEffect';
import Intro from './Components/Intro/Intro';
import BrainTumor from "./pages/BrainTumor";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@studio-freight/lenis@1.0.33/dist/lenis.min.js";
    script.async = true;

    script.onload = () => {
      initStars();
    };

    document.body.appendChild(script);

    // ⏳ Auto intro duration
    setTimeout(() => {
      setLoading(false);
    }, 2200); // 2.2 sec
  }, []);

  return (
    <>
      <Router>
      <div id="star-container"></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brain-tumor" element={<BrainTumor />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;