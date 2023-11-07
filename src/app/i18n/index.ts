import { useState, useEffect } from 'react';
import { createInstance, i18n as I18NextInstance, TFunction } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';
import { getOptions } from './settings';

const initI18next = async (lng: string, ns: string | string[]): Promise<I18NextInstance> => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language, namespace) => import(`./locales/${language}/${namespace}.json`)))
    .init(getOptions(lng, ns));
  return i18nInstance;
};

export function useTranslation(lng: string, ns: string | string[], options: { keyPrefix?: string } = {}): { t?: TFunction; i18n?: I18NextInstance } {
  const [t, setT] = useState<TFunction>();
  const [i18n, setI18n] = useState<I18NextInstance>();

  useEffect(() => {
    let mounted = true;

    const initializeI18n = async () => {
      const i18nextInstance = await initI18next(lng, ns);
      if (mounted) {
        setT(() => i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix));
        setI18n(i18nextInstance);
      }
    };

    initializeI18n();

    return () => {
      mounted = false;
    };
  }, [lng, ns, options.keyPrefix]);

  return { t, i18n };
}
