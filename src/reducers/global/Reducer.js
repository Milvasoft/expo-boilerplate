import * as $AT from '@actions/ActionTypes';
import INITIAL_STATE from './Store';

const GlobalReducer = (state = INITIAL_STATE, { type, payload }) => {

  switch (type) {

    case $AT.GLOBAL_STATE_CHANGE: {

      return { ...state, [payload.property]: payload.value };
    
    }
    
    case $AT.EXAMPLE: {

      return { ...state, example: payload?.example };
    
    }
    default:
      return state;
  }

};
export default GlobalReducer;
