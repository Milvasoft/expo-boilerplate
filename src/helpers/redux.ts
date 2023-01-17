import { RootState, Store } from '@utils/redux/store';

export const dispatcher = (action: any) => Store.dispatch(action);

export const getState = (): RootState => Store.getState();


