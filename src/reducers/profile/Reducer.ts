/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import * as $AT from '@actions/ActionTypes';
import { AnyAction } from 'redux';
import INITIAL_STATE from './Store';

interface IProfile{
  counter: number
}

const ProfileReducer = (state: IProfile = INITIAL_STATE, { type, payload }: AnyAction):IProfile => {

  switch (type) {
    case $AT.COUNTER_INC: {

      return { ...state, counter: state.counter + 1 };
    
    }
    case $AT.COUNTER_DEC: {

      return { ...state, counter: state.counter - 1 };
    
    }
    case $AT.PROFILE_STATE_CHANGE: {

      return { ...state, [payload.key]: payload.value };
    
    }
    default:
      return state;
  }

};
export default ProfileReducer;
