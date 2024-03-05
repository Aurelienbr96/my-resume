import { useTranslation } from "react-i18next";
import me from "../../assets/img/me.jpeg";

export const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="flex items-center">
        <p className="w-[800px]">
          {t('basics.summary')}
        </p>
      </div>
      <img className="rounded-lg mt-6 md:mt-0" src={me} />
    </div>
  );
};
