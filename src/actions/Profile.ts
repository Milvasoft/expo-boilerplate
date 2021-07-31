/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */

import * as $AT from '@actions/ActionTypes';
import { dispatcher } from '@helpers/redux';

export const increment = (): void => {

  dispatcher({ type: $AT.COUNTER_INC });

};

export const decrement = (): void => {

  dispatcher({ type: $AT.COUNTER_DEC });

};
