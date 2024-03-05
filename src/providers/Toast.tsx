import React from "react";
import { ToastMessage } from "@src/components";
import { IToastType } from "@components/ToastMessage/IToastType";

let useToastRef: any;

/**
 * Sets the reference to the `useToastRef` property.
 * @param useToastRefProp - The reference to the `useToastRef` property.
 */
const setUseBackDropRef = (useToastRefProp: any) => {
  useToastRef = useToastRefProp;
};

/**
 * Utility function for displaying toast messages.
 * @returns A JSX element representing the toast message.
 */
function ToastUtils() {
  return <ToastMessage ref={setUseBackDropRef} />;
}

/**
 * Object containing actions related to toast notifications.
 */
export const toastActions = {
  /**
   * Opens a toast notification with the specified parameters.
   * @param param - The parameters for the toast notification.
   */
  open(param: IToastType) {
    useToastRef?.open(param);
  },
};

export default ToastUtils;
