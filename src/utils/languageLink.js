import { useLocation } from "react-router-dom";
import { getCurrentLanguage, addLanguageToPath } from "./languageUtils";

export const useLanguageLink = () => {
  const location = useLocation();
  const currentLang = getCurrentLanguage(location.pathname);
  const createLanguageLink = (path) => {
    return addLanguageToPath(path, currentLang);
  };

  return createLanguageLink;
};
