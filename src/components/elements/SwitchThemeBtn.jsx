import { VscColorMode } from "react-icons/vsc";

export const SwitchThemeBtn = ({ toggleDarkMode, darkMode = false }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="h-[44px] min-w-[44px] rounded-lg flex justify-center items-center bg-inherit text-tbody border border-border hover:border-primary cursor-pointer transition"
    >
      <VscColorMode />
    </button>
  );
};
