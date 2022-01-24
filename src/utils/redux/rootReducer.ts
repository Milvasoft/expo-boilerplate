/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import { combineReducers } from 'redux';
import AppReducer from '@modules/app/redux/reducer';
import ProfileReducer from '@modules/profile/redux/reducer';

export default combineReducers({ 
  AppReducer,
  ProfileReducer
});
