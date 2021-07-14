/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
/* eslint-disable import/prefer-default-export */
import * as $AT from '@actions/ActionTypes';
import { dispatcher } from '@helpers/redux';

/**
* Global reducer daki değişken güncelleme
* @param  {object} payload
* @ {expo
* @  `property`: `string`,
* @  `value`: `value`,
* @ } */
export const globalStateChange = (payload) => {

  dispatcher({ type: $AT.GLOBAL_STATE_CHANGE, payload });

};
