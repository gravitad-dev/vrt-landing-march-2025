import { useEffect, useState } from "react";
import { SwitchThemeBtn } from "../elements/SwitchThemeBtn";
import { Layout } from "./Layout";
import { Logo } from "../elements/Logo";
import { Button } from "../elements/Button";

const MENU_ITEMS = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/about" },
  { name: "Contacto", href: "/contact" },
];

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
    <nav className="sticky top-0 z-[1000] h-[75px] bg-bg  text-tbody border-b border-border">
      <Layout className="flex flex-row justify-between xl:max-w-[100%] px-6 xl:px-6">
        <div className="w-full">
          <Logo />
        </div>

        <ul className="hidden md:flex w-full justify-center items-center space-x-4 font-grotesk text-tbody">
          {MENU_ITEMS.map((item) => (
            <li key={item.name} className="flex items-center px-2 h-[40px]">
              <a
                href={item.href}
                className="text-tbody hover:text-primary transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex justify-end w-full gap-3">
          <Button>Ver mas acerca de</Button>
          <SwitchThemeBtn toggleDarkMode={toggleDarkMode} />
        </div>
      </Layout>
    </nav>
  );
};
