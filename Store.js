
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './src/reducers';// Root reducer

const Store = createStore(
  RootReducer,
  applyMiddleware(thunk)
);
export default Store;
