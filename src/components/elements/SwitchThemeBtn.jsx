import { VscColorMode } from "react-icons/vsc";

export const SwitchThemeBtn = ({ toggleDarkMode, darkMode = false }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="h-[40px] min-w-[40px] flex justify-center items-center bg-inherit border border-border hover:border-primary cursor-pointer transition"
    >
      <VscColorMode />
    </button>
  );
};
