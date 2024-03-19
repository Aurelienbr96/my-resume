import { Timeline } from "flowbite-react";
import { useTranslation } from "react-i18next";
import enData from "../../i18n/locales/en.json";
import { IconRedirect } from "../../../assets/icons";
import { useRef } from "react";
import { useHandleFilterClick } from "../../router/hooks/useHandleFilterClick";
import { useAddAnimationOnScroll } from "./hooks/useAddAnimationOnScroll";
import { ExperienceBlock } from "../components/ExperienceBlock";
import { getFilteredData } from "./utils/getFilteredData";

export type JSONData = typeof enData;

export const ExperienceSection = () => {
  const { t } = useTranslation();

  const containerRef = useRef(null);
  const animationStateRef = useRef({});
  const { i18n } = useTranslation();

  useAddAnimationOnScroll(
    containerRef,
    animationStateRef,
    ".animate-on-scroll",
  );

  const {
    searchParams,
    handleRemoveFilters,
    handleFilterClick,
    searchParamsValues,
  } = useHandleFilterClick();

  const workData = t("work", { returnObjects: true }) as JSONData["work"];

  const filteredData = getFilteredData(searchParams, workData, "skills");

  return (
    <div>
      <p className="text-3xl dark:text-dark-highlight hidden lg:block">
        Experiences
      </p>
      {Array.from(searchParams).length > 0 && (
        <button onClick={handleRemoveFilters}>remove filters</button>
      )}
      <div ref={containerRef}>
        <Timeline className="mt-6 group border-transparent md:border-gray-200 mr-10 md:mr-0">
          {filteredData.map((work: JSONData["work"][number], index: number) => (
            <ExperienceBlock
              work={work}
              index={index}
              handleFilterClick={handleFilterClick}
              searchParamsValues={searchParamsValues}
            />
          ))}
        </Timeline>
        <div>
          <a
            href={i18n.language === "en" ? "/resume.pdf" : "/cv.pdf"}
            className="inline-flex items-center group font-bold dark:text-dark-highlight ml-6 md:ml-0"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
          >
            <span className="group-hover:text-strong-purple dark:group-hover:text-dark-skill-text">
              {i18n.t("basics.view-resume")}
            </span>
            <IconRedirect
              height={16}
              width={16}
              className={
                "group-hover:fill-strong-purple dark:group-hover:fill-dark-skill-text group-hover:animate-right-top"
              }
            />
          </a>
        </div>
      </div>
    </div>
  );
};
