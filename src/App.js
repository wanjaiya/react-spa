import React from "react";
import Hero from "./Components/Hero";
import Analytics from "./Components/Analytics";
import Navbar from "./Components/Navbar";
import NewsLetter from "./Components/NewsLetter";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";

function App() {
 return(
  <div>
    <Navbar/>
    <Hero />
    <Analytics/>
    <NewsLetter />
    <Cards />
    <Footer />
  </div>
 )
}

export default App;
