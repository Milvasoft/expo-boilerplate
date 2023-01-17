/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import { Scope, TranslateOptions } from 'i18n-js';
import i18n from '@providers/Localization';

const translate = (key: Scope, props?: TranslateOptions):string => i18n.t(key, props);

export default translate;
