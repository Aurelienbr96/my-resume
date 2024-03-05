import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { ReactElement, useRef, useState } from 'react';
import { FlagFr, FlagUk } from '../../../assets/flags';
import { useOnClickOutside } from '../../common/hooks/useOnClickOutside';
import { SelectArrows } from '../../common/components/SelectArrows';

export type LanguagesType = Array<{
  key: string;
  Flag: ReactElement;
}>;

export type Props = {
  className?: string;
  languages: LanguagesType;
};

export const LanguageSwitch = ({ className, languages }: Props) => {
  const ref = useRef(null);
  const [toggle, setToggle] = useState(false);

  useOnClickOutside(ref, () => setToggle(false));
  const { i18n } = useTranslation();
  const handleOnClick = () => {
    setToggle((prev) => !prev);
  };

  const renderCurrentFlag = () => {
    if (i18n.language === 'en')
      return <FlagUk data-testid="uk-flag" className="w-[26px] h-[18px]" />;
    return <FlagFr data-testid="fr-flag" className="w-[26px] h-[18px]" />;
  };

  const handleOnSelectLanguage = (key: string) => () => {
    setToggle(false);
    const languageObject = {
      state: {
        selectedLanguage: key,
        selectedLanguageChangedAt: new Date().getTime(),
        user: null,
      },
    };

    localStorage.setItem('languageLocale', JSON.stringify(languageObject));
    i18n.changeLanguage(key);
  };

  const containerClassName = classNames('ml-8 md:ml-0 mt-6 md:mt-0 relative', className);

  return (
    <div ref={ref} className={containerClassName}>
      <button
        className="flex items-center"
        type="button"
        onClick={handleOnClick}
      >
        {renderCurrentFlag()}
        <SelectArrows className="ml-[5px] fill-white md:fill-black" isOpen={toggle} />
      </button>
      {toggle && (
        <div className="absolute top-6 left-[-15px] md:left-[-12px] z-10 shadow-table flex-col">
          {languages.map(
            ({ Flag, key }) =>
              key !== i18n.language && (
                <button
                  key={key}
                  className="py-[11px] px-[15px] hover:bg-color-light-grey"
                  type="button"
                  onClick={handleOnSelectLanguage(key)}
                >
                  {Flag}
                </button>
              ),
          )}
        </div>
      )}
    </div>
  );
};
