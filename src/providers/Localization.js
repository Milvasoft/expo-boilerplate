import React from 'react';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { TrResource, EnResource } from '@constants/localization/index';

i18n.translations = {
  en: EnResource,
  tr: TrResource,
};

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;
export default function LocalizationProvider({ children }) {
  return (
    <>
      {children}
    </>
  );
}
