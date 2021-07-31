/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import * as $AT from '@actions/ActionTypes';
import { IGlobalState } from '@helpers/Types/Global';
import { AnyAction } from 'redux';
import INITIAL_STATE from './Store';

// eslint-disable-next-line max-len
const GlobalReducer = (state: IGlobalState = INITIAL_STATE, { type, payload }: AnyAction):IGlobalState => {

  switch (type) {

    case $AT.GLOBAL_STATE_CHANGE: {

      return { ...state, [payload.property]: payload.value };
    
    }
    
    default:
      return state;
  }

};
export default GlobalReducer;
