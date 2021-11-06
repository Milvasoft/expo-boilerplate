/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import * as $AT from '@src/actionTypes';
import { IAppReducer } from '@helpers/Types/IApp';
import { AnyAction } from 'redux';
import INITIAL_STATE from './store';

const AppReducer = (state: IAppReducer = INITIAL_STATE, { type, payload }: AnyAction):IAppReducer => {

  switch (type) {

    case $AT.APP_STATE_CHANGE: return { ...state, ...payload };    
    
    default:
      return state;
  }

};
export default AppReducer;
