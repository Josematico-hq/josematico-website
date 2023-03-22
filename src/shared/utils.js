
/* global localStorage */

import { DEFAULT_LANG } from './constants'

export const getCurrentLanguage = () => {
  const lang = localStorage?.getItem('lang')
  if (!lang) {
    localStorage.setItem('lang', DEFAULT_LANG)
    return DEFAULT_LANG
  }
  return lang
}
