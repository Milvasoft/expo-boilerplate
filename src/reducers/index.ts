/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import { combineReducers } from 'redux';
import AppReducer from './app/Reducer';
import ProfileReducer from './profile/Reducer';

export default combineReducers({ 
  AppReducer,
  ProfileReducer
});
