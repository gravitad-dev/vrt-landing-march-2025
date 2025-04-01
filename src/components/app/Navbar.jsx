import { useEffect, useState } from "react";
import { SwitchThemeBtn } from "../elements/SwitchThemeBtn";
import { Layout } from "./Layout";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;

    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <nav className="sticky top-0 z-[1000] h-[75px] bg-bg  dark:text-white border-b border-border">
      <Layout className="flex flex-row justify-between xl:max-w-[100%] px-6 xl:px-6">
        <h1 className="text-xl font-bold font-grotesk">VTR</h1>

        <ul className="flex items-center space-x-4 font-poppins">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>

        <SwitchThemeBtn toggleDarkMode={toggleDarkMode} />
      </Layout>
    </nav>
  );
};
