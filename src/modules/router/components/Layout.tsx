import { Outlet } from "react-router-dom";
import { MouseFollower } from "../../common/components/MouseFollower";
import { useContext } from "react";
import ThemeContext from "../../common/contexts/ThemeContext";

export const Layout = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className="font-montserrat relative scroll-smooth dark:text-dark-text whitespace-pre-line">
      {isDarkMode && <MouseFollower />}
      <div
        id="outer-container"
        className="flex flex-col min-h-screen scroll-smooth"
      >
        <Outlet />
      </div>
    </div>
  );
};
