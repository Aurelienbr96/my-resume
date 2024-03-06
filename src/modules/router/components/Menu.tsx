import useBreakpoints from "../../common/hooks/useBreakPoints";
import { slide as MobileMenu } from "react-burger-menu";
import { ButtonMenu } from "./ButtonMenu";
import { LanguageSwitch } from "../../i18n/components/LanguageSwitch";
import { supportedLanguages } from "../../i18n/constants/supportedLanguages";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { useContext, useRef } from "react";
import { useOnClickOutside } from "../../common/hooks/useOnClickOutside";
import MenuContext from "../contexts/menuContext";

const styles = {
  bmBurgerButton: {
    position: "absolute",
    width: "0px",
    height: "0px",
    left: "36px",
    top: "36px",
  },
  bmItemList: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
  },
};

const ButtonsMenu = () => {
  const { t } = useTranslation();

  const buttonClassName = classNames("mx-8 mt-6 md:mt-0");

  return (
    <>
      <ButtonMenu className={buttonClassName} to="/experiences">
        {t("menu.experiences").toUpperCase()}
      </ButtonMenu>
      <ButtonMenu className={buttonClassName} to="/contacts">
        {t("menu.contact").toUpperCase()}
      </ButtonMenu>
      <LanguageSwitch languages={supportedLanguages} />
    </>
  );
};

export const Menu = () => {
  const { isXs } = useBreakpoints();

  const { closeMenu, toggleMenu, isMenuOpen } = useContext(MenuContext);
  const ref = useRef(null);
  useOnClickOutside(ref, closeMenu);

  if (!isXs) {
    return (
      <div
        data-testid="desktop-menu-container"
        className="mt-6 flex flex-1  justify-center items-center text-light-purple"
      >
        <ButtonsMenu />
      </div>
    );
  }

  return (
    <div data-testid="mobile-menu-container" ref={ref}>
      <MobileMenu
        right
        styles={styles}
        outerContainerId={"outer-container"}
        pageWrapId={"page-wrap"}
        className="bg-light-purple text-white"
        onClose={toggleMenu}
        isOpen={isMenuOpen}
      >
        <ButtonsMenu />
      </MobileMenu>
    </div>
  );
};
