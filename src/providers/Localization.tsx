/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import moment from "moment";
import "moment/min/locales";
import * as Localization from "expo-localization";
import { I18n } from "i18n-js";
import { TrResource, EnResource } from "@src/localization/index";

/**
 * The internationalization object used for localization.
 *
 * @remarks
 * This object is responsible for managing the localization resources and settings.
 *
 * @example
 * const i18n = new I18n(
 *   {
 *     en: EnResource,
 *     tr: TrResource,
 *   },
 *   {
 *     locale: Localization.locale,
 *     enableFallback: true,
 *     defaultLocale: "en",
 *   }
 * );
 */
const i18n = new I18n(
  {
    en: EnResource,
    tr: TrResource,
  },
  {
    locale: Localization.locale,
    enableFallback: true,
    defaultLocale: "en",
  }
);

export default i18n;

moment.locale(Localization.locale);

// moment(1316116057189).fromNow(); // il y a 7 ans

// moment("20111031", "YYYYMMDD").fromNow(); // 9 years ago
// moment("20120620", "YYYYMMDD").fromNow(); // 9 years ago
// moment().startOf('day').fromNow();        // 20 hours ago
// moment().endOf('day').fromNow();          // in 4 hours
// moment().startOf('hour').fromNow();
