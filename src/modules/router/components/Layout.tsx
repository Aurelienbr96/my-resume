import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MouseFollower } from "../../common/components/animatedComponents/MouseFollower";
import { useContext } from "react";
import ThemeContext from "../../common/contexts/ThemeContext";

export const Layout = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const location = useLocation();

  return (
    <div className="font-montserrat relative scroll-smooth dark:text-dark-text whitespace-pre-line">
      {isDarkMode && location.pathname === "/" && <MouseFollower />}
      <div
        id="outer-container"
        className="flex flex-col min-h-screen scroll-smooth"
      >
        <Outlet />
      </div>
    </div>
  );
};
