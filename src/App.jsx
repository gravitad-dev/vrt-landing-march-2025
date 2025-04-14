import { useState } from "react";
import { Navbar } from "@/components/app/Navbar";
import { Hero2 } from "@/components/pages/landing/Hero2";
import { Hero } from "@/components/pages/landing/Hero";
import { About } from "@/components/pages/landing/About";
import { Gallery } from "@/components/pages/landing/Gallery";
import { Footer } from "@/components/app/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;

//<Hero2 />
