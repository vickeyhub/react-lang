import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="flex items-center gap-3">
      <label htmlFor="language-select" className="text-sm font-semibold text-gray-700">
        {t('user.language')}:
      </label>
      <select
        id="language-select"
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="px-4 py-2.5 border-2 border-gray-200 rounded-xl bg-white text-gray-900 text-sm font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm hover:shadow-md"
      >
        <option value="en">English</option>
        <option value="hi">हिंदी (Hindi)</option>
      </select>
    </div>
  )
}

export default LanguageSwitcher

