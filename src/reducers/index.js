import { combineReducers } from 'redux';
import GlobalReducer from './global/Reducer';
import ProfileReducer from './profile/Reducer';

export default combineReducers({ 
  GlobalReducer,
  ProfileReducer
});
