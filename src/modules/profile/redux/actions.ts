/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */

import * as $AT from '@utils/redux/actionTypes';
import { dispatcher } from '@helpers/redux';

export const increment = () => dispatcher({ type: $AT.COUNTER_INC });

export const decrement = () => dispatcher({ type: $AT.COUNTER_DEC });
