import * as $AT from '@actions/ActionTypes';
import INITIAL_STATE from './Store';

const ProfileReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case $AT.COUNTER_INC: {
      return { ...state, counter: state.counter + 1 };
    }
    case $AT.COUNTER_DEC: {
      return { ...state, counter: state.counter - 1 };
    }
    case $AT.COUNTER_CHANGED: {
      return { ...state, counter: payload };
    }
    case $AT.PROFILE_STATE_CHANGE: {
      return { ...state, [payload.key]: payload.value };
    }
    default:
      return state;
  }
};
export default ProfileReducer;
