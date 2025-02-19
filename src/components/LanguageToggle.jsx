import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-16 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
    >
      {i18n.language === "en" ? "ES" : "EN"}
    </button>
  );
}