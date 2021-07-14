/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import React from 'react';
import moment from 'moment';
import 'moment/min/locales';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { TrResource, EnResource } from '@assets/localization/index';

i18n.translations = {
  en: EnResource,
  tr: TrResource,
};

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

// Example
// import i18n from 'i18n-js';
// i18n.t('login.email')

// Moment.js Settings

moment.locale(Localization.locale);

// moment(1316116057189).fromNow(); // il y a 7 ans

// moment("20111031", "YYYYMMDD").fromNow(); // 9 years ago
// moment("20120620", "YYYYMMDD").fromNow(); // 9 years ago
// moment().startOf('day').fromNow();        // 20 hours ago
// moment().endOf('day').fromNow();          // in 4 hours
// moment().startOf('hour').fromNow();  
export default function LocalizationProvider({ children }) {

  return (
    <>
      {children}
    </>
  );

}
