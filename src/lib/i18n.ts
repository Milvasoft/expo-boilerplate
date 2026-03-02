import { I18n, Scope, TranslateOptions } from "i18n-js";
import * as Localization from "expo-localization";
import en from "@/localization/en";
import tr from "@/localization/tr";

const DEFAULT_LOCALE = "en";

const deviceLanguage =
  Localization.getLocales()?.[0]?.languageCode ?? DEFAULT_LOCALE;

const i18n = new I18n(
  { en, tr },
  {
    locale: deviceLanguage,
    enableFallback: true,
    defaultLocale: DEFAULT_LOCALE,
  }
);

export default function translate(
  key: Scope,
  options?: TranslateOptions
): string {
  return i18n.t(key, options);
}

export { i18n };
