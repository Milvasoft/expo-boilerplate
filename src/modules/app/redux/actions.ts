/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import * as $AT from '@src/actionTypes';
import { dispatcher } from '@helpers/redux';
import { IAppReducer, ToastColorEnum } from '@helpers/Types/IApp';
import { toastActions } from '@src/providers/Toast';

/**
* Change value for App Reducer
*/
export function updateAppState(payload: IAppReducer): void {

  dispatcher({ type: $AT.APP_STATE_CHANGE, payload });

}

export function showToast(msg: string, type?: ToastColorEnum, duration?: number) {

  toastActions.open({ msg, type, duration });

}
