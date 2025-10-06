import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getCurrentLanguage } from "../../utils/languageUtils";
import { useTranslation } from "react-i18next";

const LanguageRedirect = ({ children }) => {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLang = getCurrentLanguage(location.pathname);

    if (i18n && i18n.changeLanguage && i18n.language !== currentLang) {
      if (i18n.isInitialized) {
        try {
          i18n.changeLanguage(currentLang).catch((err) => {
            console.error("Failed to change language:", err);
          });
        } catch (err) {
          console.error("Error changing language:", err);
        }
      } else {
        // Wait for i18n to be ready
        const checkReady = () => {
          if (i18n.isInitialized) {
            try {
              i18n.changeLanguage(currentLang).catch((err) => {
                console.error("Failed to change language:", err);
              });
            } catch (err) {
              console.error("Error changing language:", err);
            }
          } else {
            setTimeout(checkReady, 100);
          }
        };
        checkReady();
      }
    }
  }, [location.pathname, i18n]);

  return children;
};

export default LanguageRedirect;
