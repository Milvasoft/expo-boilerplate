import React from 'react';
import { ToastMessage } from '@src/components';
import { IToastType } from '@src/helpers/Types/IToastType';

let useToastRef: any;

const setUseBackDropRef = (useToastRefProp: any) => {

  useToastRef = useToastRefProp;
  
};
  
function ToastUtils() {

  return <ToastMessage ref={setUseBackDropRef} />;

}

export const toastActions = {

  open(param: IToastType) {
  
    useToastRef?.open(param);
      
  }
};
  
export default ToastUtils;
