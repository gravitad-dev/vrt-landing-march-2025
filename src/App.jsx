import { useState } from "react";
import { Navbar } from "@/components/app/Navbar";
import { Hero2 } from "@/components/pages/landing/Hero2";
import { Hero } from "@/components/pages/landing/Hero";
import { About } from "@/components/pages/landing/About";
import { Gallery } from "@/components/pages/landing/Gallery";

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
