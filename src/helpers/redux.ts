import Store, { RootState } from '@src/store';

export const dispatcher = (action: any) => Store.dispatch(action);

export const getState = (): RootState => Store.getState();


