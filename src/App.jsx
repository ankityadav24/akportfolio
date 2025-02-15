import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Experiance from "./components/experiance/Experiance";
import HeroBar from "./components/Herobar/HeroBar";
import NavBar from "./components/navbar/NavBar";
import SocialSideBar from "./components/sidebar/SocialSideBar";
import { About } from "./Pages/About";
import Projects from "./Pages/Projects";
import { useState, useEffect } from "react";
import SplashScreen from "./components/splash/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <div className={styles.App}>
          <NavBar />
          <HeroBar />
          <SocialSideBar />
          <About />
          <Experiance />
          <Projects />
        </div>
      )}
    </>
  );
}

export default App;
