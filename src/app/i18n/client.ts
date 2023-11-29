import { useEffect, useState } from 'react';
import i18next from 'i18next';
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next';
import { useCookies } from 'react-cookie';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getOptions, languages, cookieName } from './settings';

const runsOnServerSide = typeof window === 'undefined';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language, namespace) => import(`./locales/${language}/${namespace}.json`)))
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'navigator'],
      caches: ['cookie'] // ensure cookies are used if available
    },
    preload: runsOnServerSide ? languages : []
  });

export function useTranslation(lng?: string, ns?: string, options?: object) {
  const [cookies, setCookie] = useCookies([cookieName]);
  const { i18n } = useTranslationOrg(ns, options);
  const [activeLng, setActiveLng] = useState<string | undefined>(i18n.resolvedLanguage);

  useEffect(() => {
    const changeLanguage = async () => {
      if (lng && i18n.resolvedLanguage !== lng) {
        await i18n.changeLanguage(lng);
      }
    };
    changeLanguage();
  }, [lng, i18n]);

  useEffect(() => {
    setActiveLng(i18n.resolvedLanguage);
  }, [i18n.resolvedLanguage]);

  useEffect(() => {
    if (lng && cookies[cookieName] !== lng) {
      setCookie(cookieName, lng, { path: '/' });
    }
  }, [lng, cookies, setCookie]);

  return { ...useTranslationOrg(ns, options), activeLng };
}
