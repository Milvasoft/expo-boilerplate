export enum ToastType {
  Info = "#2196F3",
  Success = "#4CAF50",
  Warning = "#FF9800",
  Error = "#F44336",
}

export interface ToastMessage {
  msg: string;
  type?: ToastType;
  duration?: number;
}

type ToastHandler = {
  show: (message: ToastMessage) => void;
};

let toastHandler: ToastHandler | null = null;

export function registerToastHandler(handler: ToastHandler) {
  toastHandler = handler;
}

export function showToast(
  msg: string,
  type: ToastType = ToastType.Info,
  duration = 1500
) {
  toastHandler?.show({ msg, type, duration });
}
