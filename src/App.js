import React from "react";
import Hero from "./Components/Hero";
import Analytics from "./Components/Analytics";
import Navbar from "./Components/Navbar";
import NewsLetter from "./Components/NewsLetter";

function App() {
 return(
  <div>
    <Navbar/>
    <Hero />
    <Analytics/>
    <NewsLetter />
  </div>
 )
}

export default App;
