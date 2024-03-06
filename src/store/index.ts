import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import RootReducer from './rootReducer'// Root reducer

/**
 * The Redux store instance.
 */
export const Store = configureStore({ reducer: RootReducer })

/**
 * The type representing the state of the root store.
 */
export type RootState = ReturnType<typeof Store.getState>

/**
 * A custom selector hook that allows you to select values from the Redux store.
 *
 * @template T - The type of the selected value.
 * @param selector - A selector function that takes the root state and returns the selected value.
 * @returns The selected value from the Redux store.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default Store
