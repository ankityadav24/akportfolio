import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Experiance from "./components/experiance/Experiance";
import HeroBar from "./components/Herobar/HeroBar";
import NavBar from "./components/navbar/NavBar";
import SocialSideBar from "./components/sidebar/SocialSideBar";
import { useEffect, useState } from "react";
import About from "./components/about/About";
import Project from "./components/projects/Project";
import SplashScreen from "./components/splash/SplashScreen";
import Contact from "./contect/Contact";


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
          <About/>
          <Experiance />
          <Project/>
          <Contact/>
          
        </div>
      )}
    </>
  );
}

export default App;
