
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './rootReducer';// Root reducer

const Store = createStore(RootReducer);

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export const getAppState = Store.getState;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default Store;
