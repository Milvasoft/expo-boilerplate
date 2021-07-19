/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import * as $AT from '@actions/ActionTypes';
import { dispatcher } from '@helpers/redux';

/**
* Change value for Global Reducer
* @param  {object} payload
* @ {expo
* @  `property`: `string`,
* @  `value`: `value`,
* @ } */
// eslint-disable-next-line import/prefer-default-export
export const globalStateChange = (payload) => {

  dispatcher({ type: $AT.GLOBAL_STATE_CHANGE, payload });

};
