import { ToastColorEnum } from './ToastColorEnum';

export interface IToastType {
  msg: string;
  duration?: number;
  type?: ToastColorEnum;

}
