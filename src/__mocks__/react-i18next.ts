export const useTranslation = () => {
  return {
    t: (str: unknown) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  };
};
