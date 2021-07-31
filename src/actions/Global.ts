/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import * as $AT from '@actions/ActionTypes';
import { dispatcher } from '@helpers/redux';
import * as Types from '@helpers/Types/Global';

/**
* Change value for Global Reducer
* @param  {object} payload
* @ {
* @  `property`: `string`,
* @  `value`: `value`,
* @ } */
// eslint-disable-next-line import/prefer-default-export
export const globalStateChange = (payload : Types.IGlobalStateChangeType): void => {

  dispatcher({ type: $AT.GLOBAL_STATE_CHANGE, payload });

};
