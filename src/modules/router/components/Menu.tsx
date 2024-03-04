import useBreakpoints from "../../common/hooks/useBreakPoints";
import { slide as MobileMenu } from "react-burger-menu";
import { ButtonMenu } from "./ButtonMenu";
import { LanguageSwitch } from "../../i18n/components/LanguageSwitch";
import { supportedLanguages } from "../../i18n/constants/supportedLanguages";
import { useTranslation } from "react-i18next";

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
  return (
    <>
      <ButtonMenu className="mx-8" to="/about">
        {t("menu.about").toUpperCase()}
      </ButtonMenu>
      <ButtonMenu className="mx-8" to="/experiences">
        {t("menu.experiences").toUpperCase()}
      </ButtonMenu>
      <ButtonMenu className="mx-8" to="/contacts">
        {t("menu.contact").toUpperCase()}
      </ButtonMenu>
      <LanguageSwitch languages={supportedLanguages} />
    </>
  );
};

export const Menu = ({
  isOpen,
  handleOnMobileMenuClick,
}: {
  isOpen: boolean;
  handleOnMobileMenuClick: (() => void) | undefined;
}) => {
  const { isXs } = useBreakpoints();

  if (!isXs) {
    return (
      <div className="mt-6 flex items-center text-light-purple">
        <ButtonsMenu />
      </div>
    );
  }

  return (
    <MobileMenu
      right
      styles={styles}
      outerContainerId={"outer-container"}
      pageWrapId={"page-wrap"}
      className="bg-black text-light-purple"
      onClose={handleOnMobileMenuClick}
      isOpen={isOpen}
    >
      <ButtonsMenu />
    </MobileMenu>
  );
};
