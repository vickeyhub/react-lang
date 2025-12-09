# React i18n Localization App

A production-ready React 19 application with complete internationalization (i18n) setup using i18next, react-i18next, and Tailwind CSS v4.

## 🌟 Features

- ✅ **Complete i18n Setup** - Full internationalization with i18next and react-i18next
- ✅ **Language Persistence** - Selected language saved in localStorage
- ✅ **Dynamic Language Switching** - Change language without page reload
- ✅ **Modern UI** - Beautiful, responsive design with Tailwind CSS v4
- ✅ **TypeScript** - Fully typed for better development experience
- ✅ **React 19** - Latest React features with Vite
- ✅ **Production Ready** - Optimized build and best practices

## 🚀 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **i18next** - Internationalization framework
- **react-i18next** - React bindings for i18next
- **Tailwind CSS v4** - Utility-first CSS framework
- **PostCSS** - CSS processing

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── main.tsx                    # Entry point, initializes i18n
├── App.tsx                     # Main application component
├── index.css                   # Tailwind CSS imports
├── i18n/
│   └── config.ts              # i18n configuration with localStorage
├── locales/
│   ├── en/
│   │   └── en.json            # English translations
│   └── hi/
│       └── hi.json            # Hindi translations
└── components/
    ├── LanguageSwitcher.tsx   # Language selection dropdown
    └── ExampleComponent.tsx   # Example usage component
```

## 🔄 How i18n Works

### Workflow Overview

```
1. Application Starts
   ↓
2. main.tsx imports './i18n/config'
   ↓
3. i18n/config.ts:
   - Loads JSON translation files
   - Checks localStorage for saved language
   - Initializes i18n with translations
   - Sets up localStorage listener
   ↓
4. Components use useTranslation() hook
   ↓
5. t() function returns translated strings
   ↓
6. User changes language → Saved to localStorage
   ↓
7. React re-renders with new language
```

### Detailed Flow

#### 1. **localStorage → i18n picks language**
When the app starts, i18n checks `localStorage.getItem('i18nextLng')` to get the previously selected language. If none exists, it defaults to `'en'`.

```typescript
const getStoredLanguage = (): string => {
  const stored = localStorage.getItem('i18nextLng')
  return stored || 'en'
}
```

#### 2. **i18n loads JSON**
Translation JSON files are imported at build time and loaded into i18n's memory:

```typescript
import enTranslations from '../locales/en/en.json'
import hiTranslations from '../locales/hi/hi.json'

resources: {
  en: { translation: enTranslations },
  hi: { translation: hiTranslations }
}
```

#### 3. **Keeps it in memory**
All translations are stored in JavaScript memory for fast access. No file reads after initial load.

#### 4. **UI uses it**
Components use the `t()` function to get translated strings:

```typescript
const { t } = useTranslation()
t('app.name')  // Returns "My App" or "मेरा ऐप"
```

## 💻 Usage Examples

### Basic Translation

```tsx
import { useTranslation } from 'react-i18next'

function MyComponent() {
  const { t } = useTranslation()
  
  return (
    <div>
      <h1>{t('app.name')}</h1>
      <p>{t('app.tagline')}</p>
    </div>
  )
}
```

### Nested Translation Keys

```tsx
// Translation structure in JSON:
// {
//   "user": {
//     "profile": "Profile",
//     "settings": "Settings"
//   }
// }

const { t } = useTranslation()
t('user.profile')    // "Profile" or "प्रोफ़ाइल"
t('user.settings')   // "Settings" or "सेटिंग्स"
```

### Translation with Interpolation

```tsx
// JSON: "min_length": "Minimum length is {min}"
t('form.min_length', { min: 5 })
// Returns: "Minimum length is 5" or "न्यूनतम लंबाई 5 है"
```

### Language Switching

```tsx
import { useTranslation } from 'react-i18next'

function LanguageSwitcher() {
  const { i18n } = useTranslation()
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)  // Automatically saves to localStorage
  }
  
  return (
    <select onChange={(e) => changeLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="hi">हिंदी</option>
    </select>
  )
}
```

## 📝 Translation File Structure

Translation files use nested objects for better organization:

```json
{
  "app": {
    "name": "My App",
    "tagline": "Build something amazing"
  },
  "common": {
    "ok": "OK",
    "cancel": "Cancel",
    "save": "Save"
  },
  "form": {
    "email": "Email",
    "password": "Password",
    "required": "This field is required"
  }
}
```

## ➕ Adding New Languages

1. **Create translation file:**
   ```bash
   mkdir -p src/locales/fr
   touch src/locales/fr/fr.json
   ```

2. **Add translations to `fr.json`:**
   ```json
   {
     "app": {
       "name": "Mon Application",
       "tagline": "Construire quelque chose d'incroyable"
     }
   }
   ```

3. **Update `i18n/config.ts`:**
   ```typescript
   import frTranslations from '../locales/fr/fr.json'
   
   resources: {
     en: { translation: enTranslations },
     hi: { translation: hiTranslations },
     fr: { translation: frTranslations }  // Add this
   }
   ```

4. **Add option to LanguageSwitcher:**
   ```tsx
   <option value="fr">Français</option>
   ```

## 🎨 Styling with Tailwind CSS

This project uses Tailwind CSS v4. All styles are applied using utility classes:

```tsx
<div className="bg-white rounded-xl shadow-lg p-6">
  <h1 className="text-4xl font-bold text-gray-900">
    {t('app.name')}
  </h1>
</div>
```

## 🔧 Configuration Files

### i18n Configuration (`src/i18n/config.ts`)

- Loads translation files
- Manages localStorage integration
- Sets up language change listeners
- Configures fallback language

### PostCSS Configuration (`postcss.config.js`)

- Processes Tailwind CSS
- Handles autoprefixing

### Tailwind CSS

- Uses v4 syntax: `@import "tailwindcss"` in `index.css`
- No config file needed (v4 uses CSS-based configuration)

## 📊 Data Flow

```
┌─────────────────────────────────────┐
│  Application Startup                │
└─────────────────────────────────────┘
            ↓
┌─────────────────────────────────────┐
│  Check localStorage                 │
│  → Get saved language ('hi'/'en')  │
└─────────────────────────────────────┘
            ↓
┌─────────────────────────────────────┐
│  Load JSON files into memory        │
│  → All translations available       │
└─────────────────────────────────────┘
            ↓
┌─────────────────────────────────────┐
│  Initialize i18n                    │
│  → Set language from localStorage   │
│  → Setup React integration          │
└─────────────────────────────────────┘
            ↓
┌─────────────────────────────────────┐
│  Components Render                  │
│  → useTranslation() hook            │
│  → t() returns translated strings   │
└─────────────────────────────────────┘
            ↓
┌─────────────────────────────────────┐
│  User Changes Language              │
│  → i18n.changeLanguage('hi')       │
│  → Save to localStorage             │
│  → React re-renders                 │
└─────────────────────────────────────┘
```

## 🚀 Development Commands

```bash
# Start dev server (with HMR)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📚 Key Concepts

### localStorage Integration
- Language preference is automatically saved when changed
- Persists across browser sessions
- No page reload needed for language switching

### Translation Keys
- Use dot notation for nested keys: `t('user.profile')`
- Keys should match JSON structure exactly
- Missing keys fall back to the fallback language

### React Integration
- `useTranslation()` hook provides `t` function and `i18n` object
- Components automatically re-render on language change
- No manual state management needed

## 🎯 Best Practices

1. **Organize translations** - Use nested objects for logical grouping
2. **Consistent keys** - Use consistent naming conventions
3. **Fallback language** - Always provide English as fallback
4. **Type safety** - Use TypeScript for better IDE support
5. **Performance** - All translations loaded in memory for fast access

## 📄 License

This project is open source and available for use.

---

**Built with ❤️ using React 19, TypeScript, Vite, i18next, and Tailwind CSS**
