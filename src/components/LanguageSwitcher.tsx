import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage("pt")}
        className={`px-3 py-1 rounded-md text-sm font-medium ${
          i18n.language === "pt"
            ? "bg-oet-green-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        PT
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1 rounded-md text-sm font-medium ${
          i18n.language === "en"
            ? "bg-oet-green-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
