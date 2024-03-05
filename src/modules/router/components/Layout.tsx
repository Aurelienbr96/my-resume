import { GiHamburgerMenu } from "react-icons/gi";

import { Outlet } from "react-router-dom";

import { ButtonMenu } from "./ButtonMenu";
import { Menu } from "./Menu";
import useBreakpoints from "../../common/hooks/useBreakPoints";
import { useContext } from "react";
import MenuContext from "../contexts/menuContext";

export const Layout = () => {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);
  const { isXs } = useBreakpoints();

  return (
    <div id="outer-container" className="flex flex-col px-6">
      <div className="flex justify-around">
        {isXs && (
          <button onClick={toggleMenu}>
            <GiHamburgerMenu />
          </button>
        )}

        <ButtonMenu className="text-3xl text-light-purple mt-4" to="/">
          Aurelien Brachet
        </ButtonMenu>
        <Menu isOpen={isMenuOpen} handleOnMobileMenuClick={toggleMenu} />
      </div>
      <div id="page-wrap">
        <div id="details" className="mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
