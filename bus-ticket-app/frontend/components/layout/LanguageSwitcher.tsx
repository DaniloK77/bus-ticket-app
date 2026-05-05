"use client";

import { useState } from "react";

const languages = [
  { code: "EN", flag: "🇬🇧" },
  { code: "MNE", flag: "🇲🇪" },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-11 w-11 items-center justify-center rounded-full border bg-white text-xl shadow-sm transition hover:bg-gray-50"
      >
        <span>{selectedLanguage.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-14 z-50 w-40 rounded-xl border bg-white p-2 shadow-lg">
          {languages.map((language) => (
            <button
              key={language.code}
              type="button"
              onClick={() => {
                setSelectedLanguage(language);
                setIsOpen(false);
              }}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-100"
            >
              <span className="text-lg">{language.flag}</span>
              <span>{language.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
