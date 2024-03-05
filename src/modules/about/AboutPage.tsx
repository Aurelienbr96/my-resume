import { useTranslation } from "react-i18next";
import me from "../../assets/img/me.jpeg";

export const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <p className="w-[800px]">
          {t('basics.summary')}
        </p>
      </div>
      <img className="rounded-lg" src={me} />
    </div>
  );
};
