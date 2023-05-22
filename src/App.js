import { useEffect } from "react";
import Aos from "aos";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Services";
// import Products from "./components/UI/Products";
import Contact from "./components/UI/Contact";

import "./App.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
