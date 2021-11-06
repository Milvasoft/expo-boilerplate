import React from 'react';
import { ToastMessage } from '@src/components';
import { IToastType } from '@src/helpers/Types/IApp';

let useToastRef: any;

const setUseBackDropRef = (useToastRefProp: any) => {

  useToastRef = useToastRefProp;
  
};
  
const ToastUtils = () => <ToastMessage ref={setUseBackDropRef} />;

export const toastActions = {

  open(param: IToastType) {
  
    useToastRef?.open(param);
      
  }
};
  
export default ToastUtils;
