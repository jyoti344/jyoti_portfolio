import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './styles/global.css';
import { initStars } from './utils/starEffect';

import Home from './pages/Home';
import BrainTumor from "./pages/BrainTumor";
import Intro from './Components/Intro/Intro';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ⭐ Stars
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@studio-freight/lenis@1.0.33/dist/lenis.min.js";
    script.async = true;

    script.onload = () => {
      initStars();
    };

    document.body.appendChild(script);

    // 🚀 Wake API
    fetch("https://portfolio-backend-xqr0.onrender.com")
      .catch(() => {});

    // ⏳ Intro duration
    setTimeout(() => {
      setLoading(false);
    }, 2200);

  }, []);

  return (
    <Router>
      <div id="star-container"></div>

      {/* ✅ Intro */}
      {loading && <Intro />}

      {/* ✅ App after intro */}
      <div className={!loading ? "show-home" : "hide-home"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brain-tumor" element={<BrainTumor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;