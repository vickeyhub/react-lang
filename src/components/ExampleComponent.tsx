import { useTranslation } from 'react-i18next'

/**
 * Example component showing how to use nested translations
 */
const ExampleComponent = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
      <h2 className="text-2xl font-bold mb-4">{t('app.name')}</h2>
      <p className="text-gray-600 dark:text-gray-400">{t('user.language')}</p>
      
      {/* Using translations with interpolation */}
      <p className="mt-2">{t('form.min_length', { min: 5 })}</p>
    </div>
  )
}

export default ExampleComponent

