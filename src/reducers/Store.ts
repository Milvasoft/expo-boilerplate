
import { createStore } from 'redux';
import RootReducer from '.';// Root reducer

const Store = createStore(RootReducer);

export default Store;

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
