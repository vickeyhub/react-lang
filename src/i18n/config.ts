import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslations from '../locales/en/en.json'
import hiTranslations from '../locales/hi/hi.json'

// Get saved language from localStorage or default to 'en'
const getStoredLanguage = (): string => {
  const stored = localStorage.getItem('i18nextLng')
  return stored || 'en'
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      hi: {
        translation: hiTranslations,
      },
    },
    lng: getStoredLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  })

// Listen for language changes and save to localStorage
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('i18nextLng', lng)
})

export default i18n

