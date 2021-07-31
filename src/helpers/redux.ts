/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Store, { RootState } from '../reducers/Store';

export const dispatcher = (action: any) => {

  Store.dispatch(action);

};

export const getState = ():RootState => Store.getState();


