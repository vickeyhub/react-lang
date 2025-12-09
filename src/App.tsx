import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LanguageSwitcher from './components/LanguageSwitcher'

function App() {
  const [count, setCount] = useState(0)
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {t('app.name')}
              </h1>
              <p className="text-lg text-gray-600 font-medium">
                {t('app.tagline')}
              </p>
            </div>
            <LanguageSwitcher />
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Dashboard Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {t('dashboard.dashboard')}
              </h2>
            </div>
            <div className="space-y-3">
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-gray-700 font-medium">{t('dashboard.home')}</span>
                </div>
              </a>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-gray-700 font-medium">{t('dashboard.overview')}</span>
                </div>
              </a>
              <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-gray-700 font-medium">{t('dashboard.analytics')}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Auth Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {t('auth.login')}
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('form.email')}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('form.password')}
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
              </div>
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-200">
                {t('auth.login')}
              </button>
            </div>
          </div>

          {/* Status Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Status
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 font-semibold rounded-full text-sm shadow-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                {t('status.active')}
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 font-semibold rounded-full text-sm shadow-sm">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                {t('status.pending')}
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 font-semibold rounded-full text-sm shadow-sm">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {t('status.completed')}
              </span>
            </div>
          </div>
        </div>

        {/* Counter Section */}
        <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100 mb-8">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-8 flex items-center gap-6">
              <a href="https://vite.dev" target="_blank" className="inline-block transform hover:scale-110 transition-transform duration-300">
                <img src={viteLogo} className="h-20 w-20 drop-shadow-lg" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank" className="inline-block transform hover:scale-110 transition-transform duration-300">
                <img src={reactLogo} className="h-20 w-20 drop-shadow-lg animate-spin" style={{ animationDuration: '20s' }} alt="React logo" />
              </a>
            </div>
            <button
              onClick={() => setCount((count) => count + 1)}
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-4 px-10 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 mb-6 text-lg"
            >
              Count: {count}
            </button>
            <p className="text-gray-600 text-center text-lg">
              {t('common.edit')} <code className="bg-gray-100 px-3 py-1.5 rounded-lg font-mono text-indigo-600 font-semibold">src/App.tsx</code> {t('common.save')}
            </p>
          </div>
        </div>

        {/* Messages Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-bold text-green-800 text-lg">{t('messages.success')}</span>
            </div>
            <p className="text-green-700 font-medium">{t('messages.data_saved')}</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              <span className="font-bold text-red-800 text-lg">{t('messages.error')}</span>
            </div>
            <p className="text-red-700 font-medium">{t('errors.network_error')}</p>
          </div>
        </div>

        {/* Navigation Footer */}
        <footer className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="flex flex-wrap gap-6 justify-center">
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-semibold transition-colors duration-200 hover:underline">
              {t('navigation.help')}
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-semibold transition-colors duration-200 hover:underline">
              {t('navigation.about_us')}
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-semibold transition-colors duration-200 hover:underline">
              {t('navigation.contact_us')}
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-semibold transition-colors duration-200 hover:underline">
              {t('navigation.terms')}
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-semibold transition-colors duration-200 hover:underline">
              {t('navigation.privacy_policy')}
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
