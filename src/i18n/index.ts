import en from './en';
import zhTw from './zh-tw';

const translations = { en, 'zh-tw': zhTw } as const;

export type Locale = keyof typeof translations;

export const defaultLocale: Locale = 'en';

export function t(locale: Locale = defaultLocale) {
  return translations[locale] ?? translations[defaultLocale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in translations) return lang as Locale;
  return defaultLocale;
}

export function getLocalePath(locale: Locale, path: string = '/') {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}
