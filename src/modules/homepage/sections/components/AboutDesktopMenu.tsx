import { useGetRecommendations } from "../../../admin/recommendations/hooks/useGetRecommendations";

const HrefLine = ({ isActive }: { isActive: boolean }) => (
  <span
    className={`w-4 h-px mr-2 bg-black  transition-all duration-250 group-hover:w-8 group-hover:bg-dark-purple dark:group-hover:bg-dark-highlight  ${isActive ? "w-8 dark:bg-dark-highlight" : "dark:bg-dark-text"}`}
  />
);

type MenuTextProps = {
  href: string;
  isActive: boolean;
  children: string;
};

const MenuText = ({ children, isActive, href }: MenuTextProps) => (
  <li>
    <a
      href={href}
      className={`mt-2 group flex items-center dark:hover:text-dark-highlight ${isActive ? "font-bold dark:text-dark-highlight " : ""}`}
    >
      <HrefLine isActive={isActive} />
      {children}
    </a>
  </li>
);

type Props = {
  isAboutActive: boolean;
  isExperienceActive: boolean;
  isRecommendationsActive: boolean;
  isContactActive: boolean;
};

export const AboutDesktopMenu = ({
  isAboutActive,
  isExperienceActive,
  isRecommendationsActive,
  isContactActive,
}: Props) => {
  const { recommendations, isLoading } = useGetRecommendations();
  return (
    <nav className="hidden md:block">
      <ul className="mt-10 w-max">
        <MenuText href="#about" isActive={isAboutActive}>
          About
        </MenuText>
        <MenuText href="#experiences" isActive={isExperienceActive}>
          Experiences
        </MenuText>
        {recommendations && recommendations.length > 0 && !isLoading && (
          <MenuText href="#recommendations" isActive={isRecommendationsActive}>
            Recommendations
          </MenuText>
        )}
        <MenuText href="#contact" isActive={isContactActive}>
          Contact
        </MenuText>
      </ul>
    </nav>
  );
};
