
/* global localStorage */

import { DEFAULT_LANG } from './constants'

export const t = async key => {
  const translations = await import(`../locales/${getCurrentLanguage()}.json`)
  return translations[key]
}

export const getCurrentLanguage = () => {
  const lang = localStorage?.getItem('lang')
  if (!lang) {
    localStorage.setItem('lang', DEFAULT_LANG)
    return DEFAULT_LANG
  }
  return lang
}
