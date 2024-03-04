import useBreakpoints from "../../common/hooks/useBreakPoints";
import { slide as MobileMenu } from "react-burger-menu";
import { ButtonMenu } from "./ButtonMenu";
import { LanguageSwitch } from "../../i18n/components/LanguageSwitch";
import { supportedLanguages } from "../../i18n/constants/supportedLanguages";

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

const ButtonsMenu = () => (
  <>
    <ButtonMenu className="mx-8" to="/about">
      ABOUT ME
    </ButtonMenu>
    <ButtonMenu className="mx-8" to="/experiences">
      EXPERIENCES
    </ButtonMenu>
    <ButtonMenu className="mx-8" to="/contacts">
      CONTACTS
    </ButtonMenu>
    <LanguageSwitch languages={supportedLanguages} />
  </>
);

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
