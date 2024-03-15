import { useContext } from "react";
import { IoMdMoon } from "react-icons/io";
import { IoSunny } from "react-icons/io5";
import { Switch } from "./Switch";
import ThemeContext from "../../contexts/ThemeContext";

export const ThemeSwitch = () => {
  const { isDarkMode, handleOnChange } = useContext(ThemeContext);
  return (
    <div className="flex items-center my-4 mr-4">
      <IoSunny data-testid="io-sunny" />
      <Switch className="mx-2" checked={isDarkMode} onChange={handleOnChange} />
      <IoMdMoon data-testid="io-moon" />
    </div>
  );
};
