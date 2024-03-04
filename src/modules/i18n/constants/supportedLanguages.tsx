
import { FlagFr, FlagUk } from '../../../assets/flags';
import { LanguagesType } from '../components/LanguageSwitch';


export const supportedLanguages: LanguagesType = [
  {
    key: 'fr',
    Flag: <FlagFr data-testid="fr-flag" className="w-[26px] h-[18px]" />,
  },
  {
    key: 'en',
    Flag: <FlagUk data-testid="uk-flag" className="w-[26px] h-[18px]" />,
  },
];
