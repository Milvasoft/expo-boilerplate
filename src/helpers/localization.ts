/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import i18n from 'i18n-js';

const GetLang = (key: i18n.Scope, props?: i18n.TranslateOptions):string => i18n.t(key, props);

export default GetLang;
