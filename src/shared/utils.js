
import { DEFAULT_LANG, languages } from './constants'

export const getLanguage = () => {
  const { pathname } = window?.location
  const [, pathLanguageCode] = pathname.split('/')
  const language =
    languages[pathLanguageCode || DEFAULT_LANG] ||
    languages[DEFAULT_LANG]

  return language
}

export const getLanguageFromFileName = (filename = '') => {
  const regex = /\/[a-z]{2}(?=\/|$)/
  const language = filename.match(regex, '')?.[0]?.replace('/', '') || DEFAULT_LANG

  return language
}

export const localizeDate = date => {
  const pubDateLocalized = new Date(date)
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' }
  return pubDateLocalized.toLocaleDateString(undefined, options)
}
