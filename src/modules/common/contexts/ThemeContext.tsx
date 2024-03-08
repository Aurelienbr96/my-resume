import { PropsWithChildren, createContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  isDarkMode: false,
  handleOnChange: () => {},
});

export const ThemProvider = ({ children }: PropsWithChildren) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    document.documentElement.classList.contains("dark"),
  );
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  const handleOnChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  const value = { isDarkMode, handleOnChange };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
