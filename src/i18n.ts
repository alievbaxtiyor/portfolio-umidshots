import { createI18n } from 'vue-i18n'
import uz from './locales/uz.json'
import en from './locales/en.json'

const i18n = createI18n({
  legacy: false, // Composition API uchun
  locale: 'uz', // Default til
  fallbackLocale: 'en',
  messages: {
    uz,
    en
  }
})

export default i18n
