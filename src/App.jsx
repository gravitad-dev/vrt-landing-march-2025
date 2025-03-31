import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero2 } from "./components/Hero2";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Gallery } from "./components/gallery";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Hero2 />
    </>
  );
}

export default App;
