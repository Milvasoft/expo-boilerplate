/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import { combineReducers } from 'redux'
import AppReducer from '@modules/app/redux/appSlice'

/**
 * Root reducer function that combines all the reducers.
 * @returns The combined reducer object.
 */
export default combineReducers({
  AppReducer
})
