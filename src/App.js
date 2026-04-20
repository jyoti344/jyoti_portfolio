import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import './styles/global.css';
import { initStars } from './utils/starEffect';
import Intro from './Components/Intro/Intro';

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
      <div id="star-container"></div>

      {loading && <Intro />}

      <div className={!loading ? "show-home" : "hide-home"}>
        <Home />
      </div>
    </>
  );
}

export default App;